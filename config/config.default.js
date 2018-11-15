'use strict';
const mongoose = require('mongoose');
/**
 * controller : 分发路由接口请求的文件夹
 * middleware ： 存放中间件的文件夹
 * model ： 定义数据类型的文件夹
 * service ： 操作数据库的文件存放的地方
 * view ： 存放一些需要服务器渲染的页面的.html或.tpl文件的地方
 * router.js :分配接口路由的文件
 */
module.exports = appInfo => {
  const config = exports = {
    security: {
      csrf: {
        enable: false
      }
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542268744967_8677';

  // add your config here
  config.middleware = [];

  exports.mongoose = {
    url: 'mongodb://127.0.0.1:27017/anqi',
    // url: 'mongodb://127.0.0.1:2714//anqi',
    options: {}
  }

  return config;
};
