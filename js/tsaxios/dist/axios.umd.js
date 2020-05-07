(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.axios = factory());
}(this, (function () { 'use strict';

  function xhr(config) {
      var url = config.url, _a = config.method, method = _a === void 0 ? 'GET' : _a;
      var request = new XMLHttpRequest();
      request.open(method, url, true);
      request.send();
  }
  //# sourceMappingURL=xhr.js.map

  function encode(val) {
      return encodeURIComponent(val).
          replace(/%40/gi, '@').
          replace(/%3A/gi, ':').
          replace(/%24/g, '$').
          replace(/%2C/gi, ',').
          replace(/%20/g, '+').
          replace(/%5B/gi, '[').
          replace(/%5D/gi, ']');
  }
  function buildURL(url, params) {
      if (!params)
          return url;
      var parts = [];
      Object.keys(params).forEach(function (key) {
          var val = params[key];
          if (val === null || val === undefined) {
              return;
          }
          var values = [];
          // 数组
          if (Array.isArray(val)) {
              key = key + '[]';
              values = val;
          }
          else {
              // 数组
              values = [val];
          }
          // 一定是个数组
          values.forEach(function (v) {
              if (Object.prototype.toString.call(v) === '[object Date]') {
                  // 类型断言 as 我比 ts 更了解 这个是什么类型
                  // 确定一定是 Date
                  v = v.toISOString();
              }
              else if (Object.prototype.toString.call(v) === '[object Object]') {
                  v = JSON.stringify(v);
              }
              parts.push(encode(key) + '=' + encode(v));
          });
      });
      // keywords='海阔天空'
      // a=1
      var serializedParams = parts.join('&');
      if (serializedParams) {
          var hashmarkIndex = url.indexOf('#');
          if (hashmarkIndex !== -1) {
              url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
      }
      return url;
  }
  //# sourceMappingURL=url.js.map

  // xmlhttprequest
  function axios(config) {
      processConfig(config);
      xhr(config);
  }
  function processConfig(config) {
      // url
      // data
      // params
      config.url = transformUrl(config);
  }
  function transformUrl(config) {
      return buildURL(config.url, config.params);
  }
  //# sourceMappingURL=axios.js.map

  return axios;

})));
//# sourceMappingURL=axios.umd.js.map
