import { AxiosRequestConfig } from './type/index'
import xhr from './xhr'
import { buildURL } from './helpers/url'
// xmlhttprequest
function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}
function processConfig(config: AxiosRequestConfig) {
  // url
  // data
  // params
  config.url = transformUrl(config)
}
function transformUrl(config: AxiosRequestConfig) {
  return buildURL(config.url, config.params)
}
export default axios
