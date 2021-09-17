import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptor<T = AxiosResponse> {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorCatch?: (error: any) => any
    responseInterceptor?: (res: T) => T
    responseInterceptorCatch?: (error: any) => any
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: RequestInterceptor<T>
    showLoading?: boolean
}
