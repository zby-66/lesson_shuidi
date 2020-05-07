function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function buildURL(url: string, params?: any) {
  if (!params) return url
  const parts: string[] = []
  Object.keys(params).forEach(key => {
    let val = params[key]
    if (val === null || val === undefined) {
      return
    }
    let values: string[] = []
    // 数组
    if (Array.isArray(val)) {
      key = key + '[]'
      values = val
    } else {
      // 数组
      values = [val]
    }
    // 一定是个数组
    values.forEach(v => {
      if (Object.prototype.toString.call(v) === '[object Date]') {
        // 类型断言 as 我比 ts 更了解 这个是什么类型
        // 确定一定是 Date
        v = ((v as unknown) as Date).toISOString()
      } else if (Object.prototype.toString.call(v) === '[object Object]') {
        v = JSON.stringify(v)
      }
      parts.push(encode(key) + '=' + encode(v))
    })
  })
  // keywords='海阔天空'
  // a=1
  let serializedParams = parts.join('&')
  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#')
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
export { buildURL }
