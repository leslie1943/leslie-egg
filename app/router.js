'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // require('./route/home')(app)
  // require('./route/user')(app)
  router.get('/', controller.home.index);
  // // 定义了一个路由地址, 对应的是controller下面的user文件里面的list方法
  // // console.info('YA TENG');
  router.get('/get', controller.user.list); // /controller/user.js ====> list()
};
