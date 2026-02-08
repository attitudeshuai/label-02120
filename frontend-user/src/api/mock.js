// Mock 数据服务
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms))

// 分类数据
export const categories = [
  { id: 1, name: '手机数码', icon: 'Iphone', children: [
    { id: 11, name: '手机' }, { id: 12, name: '平板' }, { id: 13, name: '智能手表' }
  ]},
  { id: 2, name: '电脑办公', icon: 'Monitor', children: [
    { id: 21, name: '笔记本' }, { id: 22, name: '台式机' }, { id: 23, name: '显示器' }
  ]},
  { id: 3, name: '家用电器', icon: 'House', children: [
    { id: 31, name: '电视' }, { id: 32, name: '空调' }, { id: 33, name: '冰箱' }
  ]},
  { id: 4, name: '服饰鞋包', icon: 'Goods', children: [
    { id: 41, name: '男装' }, { id: 42, name: '女装' }, { id: 43, name: '鞋靴' }
  ]},
  { id: 5, name: '美妆护肤', icon: 'Present', children: [
    { id: 51, name: '面部护肤' }, { id: 52, name: '彩妆' }, { id: 53, name: '香水' }
  ]},
  { id: 6, name: '食品生鲜', icon: 'Apple', children: [
    { id: 61, name: '水果' }, { id: 62, name: '蔬菜' }, { id: 63, name: '肉禽蛋' }
  ]}
]

// 商品数据 - 使用 Unsplash 真实商品图片
export const products = [
  { 
    id: 1, 
    name: 'iPhone 15 Pro Max 256GB 原色钛金属', 
    price: 9999, 
    originalPrice: 10999, 
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop', 
    sales: 12580, 
    rating: 4.9, 
    stock: 999, 
    categoryId: 11, 
    tags: ['新品', '热卖'] 
  },
  { 
    id: 2, 
    name: 'MacBook Pro 14英寸 M3芯片 16GB+512GB', 
    price: 14999, 
    originalPrice: 15999, 
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop', 
    sales: 8920, 
    rating: 4.8, 
    stock: 500, 
    categoryId: 21, 
    tags: ['热卖'] 
  },
  { 
    id: 3, 
    name: '华为 Mate 60 Pro 12GB+512GB 雅丹黑', 
    price: 6999, 
    originalPrice: 7499, 
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop', 
    sales: 25600, 
    rating: 4.9, 
    stock: 888, 
    categoryId: 11, 
    tags: ['新品', '爆款'] 
  },
  { 
    id: 4, 
    name: 'iPad Pro 11英寸 M2芯片 WiFi版 256GB', 
    price: 6799, 
    originalPrice: 7299, 
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop', 
    sales: 6780, 
    rating: 4.7, 
    stock: 666, 
    categoryId: 12, 
    tags: [] 
  },
  { 
    id: 5, 
    name: 'Sony WH-1000XM5 无线降噪耳机 黑色', 
    price: 2499, 
    originalPrice: 2999, 
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop', 
    sales: 15800, 
    rating: 4.8, 
    stock: 1200, 
    categoryId: 13, 
    tags: ['热卖'] 
  },
  { 
    id: 6, 
    name: '戴森 V15 Detect 无绳吸尘器', 
    price: 5490, 
    originalPrice: 5990, 
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop', 
    sales: 9200, 
    rating: 4.6, 
    stock: 300, 
    categoryId: 31, 
    tags: [] 
  },
  { 
    id: 7, 
    name: 'Nike Air Jordan 1 High OG 黑红脚趾', 
    price: 1299, 
    originalPrice: 1599, 
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop', 
    sales: 32000, 
    rating: 4.9, 
    stock: 2000, 
    categoryId: 43, 
    tags: ['爆款'] 
  },
  { 
    id: 8, 
    name: 'SK-II 神仙水护肤精华露 230ml', 
    price: 1590, 
    originalPrice: 1790, 
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop', 
    sales: 45000, 
    rating: 4.8, 
    stock: 5000, 
    categoryId: 51, 
    tags: ['热卖'] 
  },
  { 
    id: 9, 
    name: '小米14 Ultra 16GB+512GB 黑色', 
    price: 6499, 
    originalPrice: 6999, 
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop', 
    sales: 18900, 
    rating: 4.7, 
    stock: 777, 
    categoryId: 11, 
    tags: ['新品'] 
  },
  { 
    id: 10, 
    name: 'Apple Watch Ultra 2 钛金属表壳', 
    price: 6499, 
    originalPrice: 6999, 
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop', 
    sales: 7800, 
    rating: 4.8, 
    stock: 400, 
    categoryId: 13, 
    tags: [] 
  },
  { 
    id: 11, 
    name: '海尔 BCD-470WDPG 十字对开门冰箱', 
    price: 4999, 
    originalPrice: 5999, 
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop', 
    sales: 5600, 
    rating: 4.5, 
    stock: 200, 
    categoryId: 33, 
    tags: [] 
  },
  { 
    id: 12, 
    name: '格力 KFR-35GW 1.5匹变频空调', 
    price: 3299, 
    originalPrice: 3799, 
    image: 'https://images.unsplash.com/photo-1631567091196-a5c0e7a5e8d7?w=400&h=400&fit=crop', 
    sales: 12300, 
    rating: 4.6, 
    stock: 800, 
    categoryId: 32, 
    tags: ['热卖'] 
  }
]

// 轮播图数据 - 使用真实电商风格的轮播图
export const banners = [
  { 
    id: 1, 
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&h=400&fit=crop', 
    link: '/product/1', 
    title: 'iPhone 15 Pro 新品上市' 
  },
  { 
    id: 2, 
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=400&fit=crop', 
    link: '/product/2', 
    title: 'MacBook Pro M3 性能怪兽' 
  },
  { 
    id: 3, 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=400&fit=crop', 
    link: '/products?categoryId=43', 
    title: '运动鞋履 潮流新风尚' 
  },
  { 
    id: 4, 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=400&fit=crop', 
    link: '/products?categoryId=13', 
    title: '智能穿戴 科技生活' 
  }
]


// 订单状态
export const orderStatus = {
  0: { label: '待付款', color: 'warning' },
  1: { label: '待发货', color: 'primary' },
  2: { label: '待收货', color: 'primary' },
  3: { label: '已完成', color: 'success' },
  4: { label: '已取消', color: 'info' }
}

// Mock 订单数据 - 使用 let 以便可以添加新订单
let orders = [
  {
    id: 'ORD202402090001',
    status: 0,
    createTime: '2024-02-09 09:00:00',
    payTime: null,
    items: [
      { productId: 3, name: '华为 Mate 60 Pro 12GB+512GB 雅丹黑', price: 6999, quantity: 1, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&h=100&fit=crop' }
    ],
    totalAmount: 6999,
    address: { name: '张三', phone: '138****8888', address: '北京市朝阳区xxx街道xxx号' }
  },
  {
    id: 'ORD202402080002',
    status: 1,
    createTime: '2024-02-08 14:00:00',
    payTime: '2024-02-08 14:05:00',
    items: [
      { productId: 7, name: 'Nike Air Jordan 1 High OG 黑红脚趾', price: 1299, quantity: 2, image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=100&h=100&fit=crop' }
    ],
    totalAmount: 2598,
    address: { name: '张三', phone: '138****8888', address: '北京市朝阳区xxx街道xxx号' }
  },
  {
    id: 'ORD202402080001',
    status: 3,
    createTime: '2024-02-08 10:30:00',
    payTime: '2024-02-08 10:35:00',
    items: [
      { productId: 1, name: 'iPhone 15 Pro Max 256GB', price: 9999, quantity: 1, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&h=100&fit=crop' }
    ],
    totalAmount: 9999,
    address: { name: '张三', phone: '138****8888', address: '北京市朝阳区xxx街道xxx号' }
  },
  {
    id: 'ORD202402070002',
    status: 2,
    createTime: '2024-02-07 15:20:00',
    payTime: '2024-02-07 15:25:00',
    items: [
      { productId: 5, name: 'Sony WH-1000XM5 无线降噪耳机', price: 2499, quantity: 1, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=100&h=100&fit=crop' },
      { productId: 8, name: 'SK-II 神仙水护肤精华露', price: 1590, quantity: 2, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=100&h=100&fit=crop' }
    ],
    totalAmount: 5679,
    address: { name: '张三', phone: '138****8888', address: '北京市朝阳区xxx街道xxx号' }
  }
]

// Mock 地址数据
export const addresses = [
  { id: 1, name: '张三', phone: '13888888888', province: '北京市', city: '北京市', district: '朝阳区', detail: 'xxx街道xxx号xxx室', isDefault: true },
  { id: 2, name: '李四', phone: '13999999999', province: '上海市', city: '上海市', district: '浦东新区', detail: 'xxx路xxx弄xxx号', isDefault: false }
]

// Mock 用户数据
export const mockUser = {
  id: 1,
  username: 'demo_user',
  nickname: '优品会员',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo',
  phone: '138****8888',
  email: 'demo@example.com',
  level: 3,
  points: 2580
}

// API 模拟函数
export const mockApi = {
  // 获取分类
  async getCategories() {
    await delay()
    return { code: 200, data: categories }
  },

  // 获取商品列表
  async getProducts(params = {}) {
    await delay()
    let result = [...products]
    
    if (params.categoryId) {
      result = result.filter(p => p.categoryId === params.categoryId)
    }
    if (params.keyword) {
      result = result.filter(p => p.name.includes(params.keyword))
    }
    if (params.sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (params.sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (params.sort === 'sales') {
      result.sort((a, b) => b.sales - a.sales)
    }
    
    const page = params.page || 1
    const pageSize = params.pageSize || 12
    const total = result.length
    result = result.slice((page - 1) * pageSize, page * pageSize)
    
    return { code: 200, data: { list: result, total, page, pageSize } }
  },

  // 获取商品详情
  async getProductDetail(id) {
    await delay()
    const product = products.find(p => p.id === Number(id))
    if (!product) {
      return { code: 404, message: '商品不存在' }
    }
    return { 
      code: 200, 
      data: {
        ...product,
        images: [
          product.image,
          product.image.replace('w=400', 'w=401'),
          product.image.replace('w=400', 'w=402'),
          product.image.replace('w=400', 'w=403')
        ],
        specs: [
          { name: '颜色', values: ['黑色', '白色', '蓝色'] },
          { name: '容量', values: ['128GB', '256GB', '512GB'] }
        ],
        description: '这是一款高品质商品，采用先进工艺制造，品质保证，售后无忧。'
      }
    }
  },

  // 获取轮播图
  async getBanners() {
    await delay(200)
    return { code: 200, data: banners }
  },

  // 获取订单列表
  async getOrders(params = {}) {
    await delay()
    let result = [...orders]
    if (params.status !== undefined && params.status !== '') {
      result = result.filter(o => o.status === params.status)
    }
    return { code: 200, data: { list: result, total: result.length } }
  },

  // 获取订单详情
  async getOrderDetail(id) {
    await delay()
    const order = orders.find(o => o.id === id)
    if (!order) {
      return { code: 404, message: '订单不存在' }
    }
    return { code: 200, data: order }
  },

  // 获取地址列表
  async getAddresses() {
    await delay()
    return { code: 200, data: addresses }
  },

  // 创建订单
  async createOrder(data) {
    await delay(500)
    const now = new Date()
    const orderId = 'ORD' + now.getFullYear() + 
      String(now.getMonth() + 1).padStart(2, '0') + 
      String(now.getDate()).padStart(2, '0') + 
      String(now.getHours()).padStart(2, '0') +
      String(now.getMinutes()).padStart(2, '0') +
      String(now.getSeconds()).padStart(2, '0')
    
    const newOrder = {
      id: orderId,
      status: 0, // 待付款
      createTime: now.toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-'),
      payTime: null,
      items: data.items.map(item => ({
        productId: item.productId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      })),
      totalAmount: data.totalAmount,
      address: {
        name: data.address.name,
        phone: data.address.phone,
        address: `${data.address.province}${data.address.city}${data.address.district}${data.address.detail}`
      },
      remark: data.remark || ''
    }
    
    // 添加到订单列表开头
    orders.unshift(newOrder)
    
    return { code: 200, data: { orderId: newOrder.id } }
  },

  // 支付订单
  async payOrder(orderId) {
    await delay(500)
    const order = orders.find(o => o.id === orderId)
    if (!order) {
      return { code: 404, message: '订单不存在' }
    }
    if (order.status !== 0) {
      return { code: 400, message: '订单状态不正确' }
    }
    order.status = 1 // 待发货
    order.payTime = new Date().toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-')
    return { code: 200, message: '支付成功' }
  },

  // 确认收货
  async confirmReceive(orderId) {
    await delay(500)
    const order = orders.find(o => o.id === orderId)
    if (!order) {
      return { code: 404, message: '订单不存在' }
    }
    if (order.status !== 2) {
      return { code: 400, message: '订单状态不正确' }
    }
    order.status = 3 // 已完成
    return { code: 200, message: '确认收货成功' }
  },

  // 用户登录
  async login(data) {
    await delay(500)
    if (data.username === 'demo' && data.password === '123456') {
      return { code: 200, data: { token: 'mock_token_123456', user: mockUser } }
    }
    return { code: 401, message: '用户名或密码错误' }
  },

  // 用户注册
  async register(data) {
    await delay(500)
    return { code: 200, data: { token: 'mock_token_new', user: { ...mockUser, username: data.username } } }
  },

  // 获取用户信息
  async getUserInfo() {
    await delay()
    return { code: 200, data: mockUser }
  }
}

export default mockApi
