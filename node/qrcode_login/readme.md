1. node 插入一条qrcode 记录

PC端扫码登陆方案，并需要传递哪些信息

1. 头条懂车帝， 比较复杂的业务考题
   jwt(cookie session) 轮询怎么做 mongodb 二维码（node) 扫码登陆
   URL 浏览器 发生了什么
2. node 前端 登陆 api 的业务分开理解
   

1. 二维码 一段信息的图片  node qrcode 生成
2. 微信APP 
   - 手机APP 微信等已经登陆了 有cookie（token）存在
  头像 id 用户名 放到 二维码里 等待着头像 id 用户名 （发送Ajax请求获取）
  1. 二维码里 一开始存在在数据库给的 qrcode_id time 初始变量 expires node , qrcode
  2. 手机扫码时， 已登录， token，（cookie） 把token 给 二维码，并触发一个ajax post 请求 ，到服务端， token qrcode_id 解析出来用户user_id
  3. 数据库 得到二维码信息 登陆中 获得 user信息 token 也传给PC页面 也登陆成功了
   - 扫一下 APP里的用户头像 id 登陆状态都获取了 传到了PC端
   - 结果是PC站登陆了
  服务器端要认识你是谁， token oauth 代替  cookie