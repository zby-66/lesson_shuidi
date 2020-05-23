export type Method = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT'
// & |:
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any //
  params?: any
}
