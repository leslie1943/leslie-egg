'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  console.info('app', app.ua)

  /********* 使用 route 方式 分发路由  ***************
  ********** require('./route/home')(app) **********
  ********** require('./route/user')(app) **********
  **************************************************/

  /***************** 调用层级  *********************
  🚀🚀🚀🚀🚀🚀🚀 [ 1:router.js ] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 2:controller] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 3: service  ] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 4: model    ] 🚀🚀🚀🚀🚀🚀🚀
  **************************************************/

  router.get('/', controller.home.index);
  // /controller/user.js ====> list() 定义了一个路由地址, 对应的是controller下面的user文件里面的list方法

  // ------------ user api ------------
  router.get('/api/user/getUserList', controller.user.list);
  router.get('/api/user/getLoginUser', controller.user.login);
  router.post('/api/user/createUser', controller.user.createUser);
  router.post('/api/user/deleteUser', controller.user.deleteUser);
  router.post('/api/user/updateUser', controller.user.updateUser);

  // ------------ menu api 注意 get/post ------------
  router.get('/api/menu/list', controller.menu.list);
  // router.resources('user', '/api/user/getUserList', controller.user);

};
