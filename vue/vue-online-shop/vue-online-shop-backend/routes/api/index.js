const express = require('express');
const router = express.Router(); //得到路由对象
const manufacturerController = require('../../controllers/manufacturer');

// product 1    manu 2 
router.get('/manufacturers',manufacturerController.all) //控制器
router.post('/manufacturers', manufacturerController.create)
// router.get('/product')
module.exports = router;
