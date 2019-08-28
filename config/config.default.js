'use strict';
const mongoose = require('mongoose');
const path = require('path')
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
        enable: false,
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542268744967_8677';


  /**
   * 该 forbidIp 指向与 app/middleware 中的 forbidIp.js
   * 因此需要注意大小写
   * 然后下面的 exports.forbidIp = {}; forbidIp中间件的名字也需要一样的 
   * exports.forbidIp 里面的对象就是中间件的ip配置了 
   */
  // exports.forbidIp = {
  //   // 属性为middleware的 options
  //   blacklist: ['192.168.1.12', '127.0.0.1']
  // }
  // // add your middleware here
  // config.middleware = ['forbidIp'];

  // 🌅🌅🌅 如果要在路由中使用中间件,需要将上述代码写在router.js文件而不是config.default.js里 🌅🌅🌅

  // 🚀🚀🚀🚀🚀 全局使用中间件 🚀🚀🚀🚀🚀
  config.middleware = ['printIp'];

  exports.mongoose = {
    url: 'mongodb://127.0.0.1:27017/anqi',
    options: {},
  };

  config.logger = {
    dir: path.join(appInfo.baseDir, 'logs')
  }

  config.session = {
    key: 'visited',
    maxAge: 10000, // 毫秒
    httpOnly: true,
    encrypt: true,
    renew: true // 每次访问页面都会给session会话延长时间
  }



  return config;
};
