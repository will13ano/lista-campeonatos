import axios from 'axios'

const baseConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60 * 1000,
}

const axiosInstance = axios.create(baseConfig)

axiosInstance.interceptors.request.use(config => {
  const newConfig = config

  newConfig.headers.Authorization = `Bearer ${import.meta.env.VITE_API_TOKEN}`

  return newConfig
})

export default axiosInstance
