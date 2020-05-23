import { AxiosRequestConfig } from './type/index'
export default function xhr(config: AxiosRequestConfig) {
  const { url, method = 'GET' } = config
  const request = new XMLHttpRequest()
  request.open(method, url, true)
  request.send()
}
