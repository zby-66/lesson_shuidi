const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { QRCodeModel, UserModel } = require('./models');
const QRCodeNode = require('qrcode');
const moment = require('moment');
const app = express();
const cors = require('cors')
const port = 8888;
const jwt = require('jsonwebtoken'); // token 前端每次自带token 传过来 
//登录的本质，   
// cookie uid  http 在头部都会带上 不能太长 
// 服务端  uid 你是谁了  decode  uid 
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


function decryptToken(token, secret) {
  try {
    let res = jwt.verify(token, secret);
    console.log(res, '----------------');
    return res;
  } catch(e) {
    return false;
  }
}


// jwt 生成token
function generateToken(data, secret) { 
  // 有效性  7200 
  let iat = Math.floor(Date.now() / 1000);   // 生成时间 
  let exp = Math.floor(Date.now() / 1000) + 60*60*24*15; // 有效期15天
  // jsonwebtoken  将一个json 对象，  web  token 
  let token = jwt.sign( // 给PC， 
    {
      data,
      iat,
      exp
    },
    secret
  );
  return token;
}
// 登录验证中间件 
const authenticated = async (req, res, next) => {
  console.log('判断登陆');
  const authorationToken = req.headers['authorization'];
  const decoded = decryptToken(authorationToken, 's3cret');
  if (!decoded) {
    res.send({
      code: 403,
      message: '请先登录'
    })
    return
  }
  // 已通过登录验证
  // 给请求对象加点料
  req.logged = true;
  req.user = {
    userId: decoded.data.userId,
    username: decoded.data.username,
    avatar: decoded.data.avatar,
    token: authorationToken
  }
  await next();
}


app.get('/qrcode/check', async (req, res) => {
  const { qrcodeId } = req.query;
  const qrcode = await QRCodeModel.findOne({ _id: qrcodeId });


  if (!qrcode) {
    res.send({
      code: 2241,
      message: '二维码不存在',
      data: null
    })
    return
  }


  res.send({
    code: 200,
    message: '查询二维码状态成功',
    data: {
      qrcodeId,
      scanned: qrcode.scanned,
      expired: moment() > moment(qrcode.expireAt),
      success: qrcode.status === 1,
      canceled: qrcode.status === -1,
      status: qrcode.status,
      userInfo: qrcode.userInfo
    }
  })
})


// 二维码生成接口
app.get('/qrcode/gene', async (req, res) => {
  // qrcode_id
  const qrcode = new QRCodeModel({
    createdAt: Date.now(),
    expireAt: moment(Date.now()).add(120, 's').toDate()
  })
  console.log(qrcode);
  await qrcode.save();


  let qrcodeData = {
    qrcodeId: qrcode._id,
    createdAt: qrcode.createdAt,
    expireAt: qrcode.expireAt
  }
  // base64
  const qrcodeUrl = await QRCodeNode.toDataURL(JSON.stringify(qrcodeData))
  res.send({
    code: 200,
    message: '生成二维码成功',
    data: {
      qrcodeUrl, 
      qrcodeId: qrcode._id
    }
  })


})
// authenticated ? 是什么？中间件函数 
// 用postmon 来模拟App, 扫这个码？ 扫码后跳转的url
app.post('/qrcode/scanned', authenticated, async(req, res) => {
    console.log('扫码后该做的....', req);
    let { qrcodeId } = req.body;
    const qrcode = await QRCodeModel.findOne({ _id: qrcodeId });


    if (!qrcode) {
      res.send({
        code: 2241,
        message: '二维码不存在',
        data: null
      })
      return;
    }


    await QRCodeModel.findOneAndUpdate({ _id: qrcodeId }, {
      scanned: true,
      userInfo: {
        username: req.user.username,
        avatar: req.user.avatar
      }
    })
    res.send({
      code: 200, 
      message: '扫描成功'
    })
});


// 手机点了 确定按钮后
app.post('/qrcode/confirm', authenticated, async (req, res) => {
  // status 1   
  // token 
  // token, qrcodeId
  const { qrcodeId } = req.body
  const qrcode = await QRCodeModel.findOne({ _id: qrcodeId });
  if (!qrcode) {
    res.send({
      code: 2241,
      message: '二维码不存在',
      data: null
    })
  }
  await QRCodeModel.findOneAndUpdate({ _id: qrcodeId }, {
    status: 1,
    userInfo: req.user
  })
  res.send({
    code: 200,
    message: '登录成功'
  })
})
// 手机点了取消
app.post('/qrcode/cancel', async (req, res) => {
  await QRCodeModel.findOneAndUpdate({ _id: qrcodeId }, {
    status: -1,
    
  })
  res.send({
    code: 304,
    message: '取消授权'
  })
})


app.post('/register', async (req, res) => {
  const { username, password } = req.body
  // console.log(username, password)
  if ((await UserModel.findOne({username, password}))) {
    res.send({
      code: 500,
      message: '用户名已被注册'
    })
    return
  }
  const user = new UserModel({
    username,
    password,
    avatar: 'https://usercontents.authing.cn/authing-avatar.png'
  })
  await user.save()
  res.send({
    code: 200,
    message: '注册成功'
  })
})
// 登录考的很多  cookie 有缺点， 特别是在多端时代， 第三方巨无霸App时代 
// jwt
app.post('/login', async(req, res) => {
  const { username, password } = req.body
  const user = await UserModel.findOne({
    username,
    password
  });
  if (!user) {
    res.send({
      code: 403,
      message: '用户名或明码不正确'
    })
    return;
  }
  // 分配令牌 token localstorage 
  // uid + 加密 -》 token   只有服务器才能解开
  const token = generateToken({userId: user._id, username, avatar: user.avatar}, "s3cret")
  res.send({
    code: 200,
    message: '登录成功',
    data: {
      _id: user._id,
      username,
      token
    }
  })
})


connect();
function listen() {
  app.listen(port);
  console.log('Express app started on port ' + port);
}


function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen)
  return mongoose.connect('mongodb://localhost:27017/scan-qrcode', {
    keepAlive: 1, 
    useNewUrlParser: true
  })
}