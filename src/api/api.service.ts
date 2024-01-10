import axios from '@/api/axios.config'

const ApiService = {
  get: async (path: string, params?: string) => {
    const { data } = await axios.get(path, { params })

    return data
  },
  post: async (path: string, params?: Object, headers: any = {}) => {
    const { data } = await axios.post(path, params, {
      headers,
    })

    return data
  },
  put: async (path: string, params?: Object, headers: any = {}) => {
    const { data } = await axios.put(path, params, {
      headers,
    })

    return data
  },
  delete: async (path: string, params?: string | Object) => {
    const { data } = await axios.delete(path, { params })

    return data
  },
}

export default ApiService
