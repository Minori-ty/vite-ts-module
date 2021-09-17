import Requests from './request'
import { BASE_URL } from './config'

const Request = new Requests({
    baseURL: BASE_URL,
    interceptors: {
        requestInterceptor: (config) => {
            console.log('请求成功拦截')
            return config
        },
        requestInterceptorCatch: (error) => error,
        responseInterceptor: (config) => config,
        responseInterceptorCatch: (error) => error,
    },
})
export default Request
