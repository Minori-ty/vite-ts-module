import Requests from './request'
import { BASE_URL } from './config'

const Request = new Requests({
    baseURL: BASE_URL,
    interceptors: {
        requestInterceptor: config => {
            console.log('请求成功拦截')
            return config
        },
        requestInterceptorCatch: error => {
            console.log('请求错误')
            return error
        },
        responseInterceptor: config => {
            console.log('响应拦截成功')
            return config
        },
        responseInterceptorCatch: error => {
            console.log('响应失败')
            return error
        },
    },
})
export default Request
