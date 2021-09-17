import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { RequestInterceptor, RequestConfig } from './request.d'

class Request {
    instance: AxiosInstance
    interceptors?: RequestInterceptor
    showLoading: boolean

    constructor(config: RequestConfig) {
        this.showLoading = config.showLoading ?? true
        this.instance = axios.create(config)
        this.interceptors = config.interceptors

        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )

        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )

        this.instance.interceptors.request.use(
            config => {
                console.log('不会被覆盖的拦截器')
                return config
            },
            error => {
                return error
            }
        )

        this.instance.interceptors.response.use(
            config => {
                return config
            },
            error => {
                return error
            }
        )
    }

    request<T>(config: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            this.instance
                .request<any, T>(config)
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    get<T>(config: AxiosRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: 'get' })
    }

    post<T>(config: AxiosRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: 'post' })
    }
}

export default Request
