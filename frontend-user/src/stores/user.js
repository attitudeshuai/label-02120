import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/api'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || '')
  const userInfo = ref(null)

  const isLoggedIn = computed(() => !!token.value)

  async function login(data) {
    const res = await api.login(data)
    if (res.code === 200) {
      token.value = res.data.token
      userInfo.value = res.data.user
      localStorage.setItem('token', res.data.token)
      return { success: true }
    }
    return { success: false, message: res.message }
  }

  async function register(data) {
    const res = await api.register(data)
    if (res.code === 200) {
      token.value = res.data.token
      userInfo.value = res.data.user
      localStorage.setItem('token', res.data.token)
      return { success: true }
    }
    return { success: false, message: res.message }
  }

  async function fetchUserInfo() {
    if (!token.value) return
    const res = await api.getUserInfo()
    if (res.code === 200) {
      userInfo.value = res.data
    }
  }

  function logout() {
    token.value = ''
    userInfo.value = null
    localStorage.removeItem('token')
  }

  return {
    token,
    userInfo,
    isLoggedIn,
    login,
    register,
    fetchUserInfo,
    logout
  }
})
