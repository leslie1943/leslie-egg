'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  /********* 使用 route 方式 分发路由  ***************
  ********** require('./route/home')(app) **********
  ********** require('./route/user')(app) **********
  **************************************************/

  router.get('/', controller.home.index);
  // /controller/user.js ====> list() 定义了一个路由地址, 对应的是controller下面的user文件里面的list方法
  router.get('/api/user/getUserList', controller.user.list);
  router.get('/api/user/getLoginUser', controller.user.login);
  router.post('/api/user/createUser', controller.user.createUser);
  router.post('/api/user/deleteUser', controller.user.deleteUser);
  router.post('/api/user/updateUser', controller.user.updateUser);

  // router.resources('user', '/api/user/getUserList', controller.user);

};
