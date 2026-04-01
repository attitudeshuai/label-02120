<template>
  <div class="home-page">
    <div class="container">
      <!-- 轮播图 -->
      <section class="banner-section">
        <el-carousel height="400px" :interval="5000">
          <el-carousel-item v-for="banner in banners" :key="banner.id">
            <router-link :to="banner.link" class="banner-link">
              <el-image :src="banner.image" fit="cover" class="banner-image">
                <template #placeholder>
                  <div class="banner-placeholder">
                    <el-icon :size="48"><Picture /></el-icon>
                  </div>
                </template>
                <template #error>
                  <div class="banner-placeholder">
                    <el-icon :size="48"><Picture /></el-icon>
                    <span>{{ banner.title }}</span>
                  </div>
                </template>
              </el-image>
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </section>

      <!-- 分类导航 -->
      <section class="category-section card">
        <div class="category-grid">
          <router-link 
            v-for="cat in categories" 
            :key="cat.id" 
            :to="`/category?id=${cat.id}`"
            class="category-item"
          >
            <div class="category-icon">
              <el-icon :size="28"><component :is="cat.icon" /></el-icon>
            </div>
            <span class="category-name">{{ cat.name }}</span>
          </router-link>
        </div>
      </section>

      <!-- 热销商品 -->
      <section class="product-section">
        <div class="section-header">
          <h2 class="section-title">
            <el-icon><TrendCharts /></el-icon>
            热销爆款
          </h2>
          <router-link to="/products?sort=sales" class="view-more">
            查看更多 <el-icon><ArrowRight /></el-icon>
          </router-link>
        </div>
        
        <div class="product-grid" v-loading="loading">
          <ProductCard 
            v-for="product in hotProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </section>

      <!-- 新品推荐 -->
      <section class="product-section">
        <div class="section-header">
          <h2 class="section-title">
            <el-icon><Star /></el-icon>
            新品推荐
          </h2>
          <router-link to="/products" class="view-more">
            查看更多 <el-icon><ArrowRight /></el-icon>
          </router-link>
        </div>
        
        <div class="product-grid">
          <ProductCard 
            v-for="product in newProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </section>

      <!-- 猜你喜欢 -->
      <section class="product-section">
        <div class="section-header">
          <h2 class="section-title">
            <el-icon><MagicStick /></el-icon>
            猜你喜欢
          </h2>
          <button class="refresh-btn" @click="refreshRecommend" :disabled="refreshing">
            <el-icon :class="{ rotating: refreshing }"><Refresh /></el-icon>
            换一批
          </button>
        </div>
        
        <div class="product-grid" v-loading="refreshing">
          <ProductCard 
            v-for="product in recommendedProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api'
import ProductCard from '@/components/common/ProductCard.vue'

const loading = ref(false)
const refreshing = ref(false)
const banners = ref([])
const categories = ref([])
const hotProducts = ref([])
const newProducts = ref([])
const recommendedProducts = ref([])
const allProducts = ref([])

function getRecommendations(count = 4) {
  const scored = allProducts.value.map(product => ({
    ...product,
    _score: product.sales * 0.6 + product.rating * 1000 * 0.4 + Math.random() * 500
  }))
  scored.sort((a, b) => b._score - a._score)
  return scored.slice(0, count).map(({ _score, ...p }) => p)
}

function refreshRecommend() {
  refreshing.value = true
  setTimeout(() => {
    recommendedProducts.value = getRecommendations(4)
    refreshing.value = false
  }, 600)
}

onMounted(async () => {
  loading.value = true
  try {
    const [bannersRes, categoriesRes, productsRes] = await Promise.all([
      api.getBanners(),
      api.getCategories(),
      api.getProducts({ pageSize: 8, sort: 'sales' })
    ])
    
    banners.value = bannersRes.data
    categories.value = categoriesRes.data
    hotProducts.value = productsRes.data.list
    
    const allRes = await api.getProducts({ pageSize: 100 })
    allProducts.value = allRes.data.list
    
    // 获取新品
    newProducts.value = allProducts.value.filter(p => p.tags?.includes('新品')).slice(0, 4)
    if (newProducts.value.length < 4) {
      newProducts.value = allProducts.value.slice(0, 4)
    }
    
    recommendedProducts.value = getRecommendations(4)
  } finally {
    loading.value = false
  }
})
</script>

<style lang="scss" scoped>
.home-page {
  padding: $spacing-lg 0;
}

.banner-section {
  margin-bottom: $spacing-lg;
  border-radius: $radius-md;
  overflow: hidden;
  
  .banner-link {
    display: block;
    height: 100%;
  }
  
  .banner-image {
    width: 100%;
    height: 100%;
  }
  
  .banner-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $spacing-md;
    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
    color: $text-muted;
    
    span {
      font-size: $font-lg;
      font-weight: 500;
      color: $text-secondary;
    }
  }
}

.category-section {
  margin-bottom: $spacing-lg;
  padding: $spacing-lg;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: $spacing-base;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-base;
  border-radius: $radius-md;
  transition: all 0.2s;
  
  &:hover {
    background: rgba($primary-color, 0.08);
    
    .category-icon {
      background: $primary-color;
      color: white;
    }
  }
}

.category-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $bg-color;
  border-radius: 50%;
  color: $primary-color;
  transition: all 0.2s;
}

.category-name {
  font-size: $font-sm;
  color: $text-primary;
}

.product-section {
  margin-bottom: $spacing-lg;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-base;
}

.section-title {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  font-size: $font-lg;
  font-weight: 600;
  color: $text-primary;
  
  .el-icon {
    color: $primary-color;
  }
}

.view-more {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  font-size: $font-sm;
  color: $text-secondary;
  transition: color 0.2s;
  
  &:hover {
    color: $primary-color;
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-base;
}

.refresh-btn {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  padding: $spacing-sm $spacing-base;
  font-size: $font-sm;
  color: $text-secondary;
  background: transparent;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    color: $primary-color;
    border-color: $primary-color;
    background: rgba($primary-color, 0.05);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .rotating {
    animation: spin 0.6s linear infinite;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
