(function(modules) {
  function require(moduleId) {
    // 
    var module = {
      exports: {}
    }
    // 模块导出的东西 都在 exports 这个属性上面
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      require
    )
    // 知道 模块导出了什么东西
    return module.exports
  }
  // 入口文件
  return require('./src/index.js');
})({
  './a.js': function(module, exports, require) {
    console.log(module);
    module.exports = function (params) {
      console.log('a execut');
      return 'a';
    }
  },
  './b.js': function(module, exports, require) {
    // 需要 module.exports
    module.exports = function (params) {
      console.log('b');
    }
  },
  './src/index.js':function(module, exports, require) {
    // 需要 require
    const a = require('./a.js');
    const b = require('./b.js');
    console.log(a())
    b();
  },
})