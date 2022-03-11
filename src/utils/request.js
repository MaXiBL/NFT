import axios from 'axios'
import { baseUrl } from "@/utils/config";
import { store } from '../store/index'

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000
})

instance.interceptors.request.use((function (config) {
  config.headers.common['x-wallet-addr'] = store.state.ConnectWalletID;
  return config
}))

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
