# vue-upload-big-file

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


- vue 实现上传文件的细节
    无论是前端还是后端， 传输文件， 特别是大文件，有可能发生丢失文件的情况，网速，服务器处理文件上传超时，如何避免丢失呢？
    hash，文件名 并不是唯一的， 不同名的图片 内容一样， 针对文件内容进行哈希计算
    hash 前端算一个， 单向
    后端拿到内容算hash
    前后一样，则上传成功
    不一样，重传。

- html5特性你怎么理解， localStorage ...
    web  workers 优化我们的前端性能， 将要花大量时间的，复杂的，放到一个新的线程中去计算， 文件上传通过哈西计算， 文件没有问题

- es6 哪些特性， 你怎么用的
    函数的参数赋默认值

- 给用户感知，用户体验的核心