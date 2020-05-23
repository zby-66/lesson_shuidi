const express = require('express');
const shop = express.Router();
const db = require('../db/db.js');
const Shop = require('../models/shop.js');

shop.get('/', async(req, res) => {
  Shop.find(
    { location : { $near : [ 115.950531,28.549066 ], $maxDistance: 2 } }//10公里 1 index 距离排序 
  ).limit(50).exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      res.json(doc);
      // callback(doc);
    });
})

shop.post('/', async(req, res) => {
  // const kfc = new Shop({
  //   name: '肯德基(莲塘店)',
  //   location: [115.950531,28.549066]
  // })
  const  fjnz = new Shop({
    name: '范家农庄时尚菜',
    location: [115.83478,28.71884]
  })
  
  fjnz
    .save((err, saved) => {
      res.json({
        status: 1,
        message: '添加成功'
      })
    })
})




module.exports =  (app) => {
  app.use('/shops', shop);
}