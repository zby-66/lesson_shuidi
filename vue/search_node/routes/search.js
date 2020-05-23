const express = require('express');
const search = express.Router();
const PostModel = require('../models/post');
search.get("/:keyword", (req, res) => {
  const keyword = req.params.keyword;
  // console.log(keyword);
  //  mongoose  mongodb 复杂的查询
  // 执行复杂数据查询 migration 
  PostModel
    .find({  // sql 
      $text: {
        $search: keyword
      }
    })
    .exec((err, posts) => {
      res.json(posts)
    })

})

module.exports = search