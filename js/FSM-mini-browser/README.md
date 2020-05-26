## CORS
响应头：
- Access-Control-Allow-Origin： origin | *
- Access-Control-Expose-Headers:

```js
res.writeHeader(200, {
  'X-foo': 'xxabcdsf',
  'Access-Control-Expose-Headers': 'X-foo'
})
```
- Access-Control-Max-Age: preflight 请求的结果能够被缓存多久
  - 简单请求：用 html 标签能够构造出来的请求
  - 非简单：1，预检请求(preflight: OPSTIONS) 试探允不允许允许 2：真实的请求
```js
axios({
  url: 'api.com/get',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    name: '123',
    pwd: '456'
  }
})
```

头条
- Access-Control-Allow-Credentials: true
  - 后端：拿不到，前端传过来的，cookie
  - 前端：const xhr = new Xmlhttprequest(); xhr.withCredentials = true

- Access-Control-Allow-Methods: 
- Access-Control-Allow-Headers: 


## JSONP
1. 流程
2. 封装成 Promise
3. JSONP 后端返回的是什么