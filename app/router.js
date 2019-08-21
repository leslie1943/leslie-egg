'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  // 在这里可以注册app级别的变量和插件
  app.appNum = Math.floor(Math.random() * 100)

  /**** 
    // 🏳‍🌈 before start
    app.beforeStart(() => {
      console.info('Life cycle before start...')
    })

    // 🏳‍🌈 will ready
    app.ready(() => {
      console.info('Life cycle will ready...')
    })
   ****/

  const { router, controller } = app;

  /** ******* 使用 route 方式 分发路由  ***************
  ********** require('./route/home')(app) **********
  ********** require('./route/user')(app) **********
  **************************************************/

  /** *************** 调用层级  *********************
  🚀🚀🚀🚀🚀🚀🚀 [ 1:router.js ] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 2:controller] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 3: service  ] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 4: model    ] 🚀🚀🚀🚀🚀🚀🚀
  **************************************************/

  // 🌅🌅🌅 在路由中使用中间件, 以 api/menu/lis t为例 🌅🌅🌅
  const forbidIp = app.middleware.forbidIp({
    blacklist: ['127.0.0.1']
  })

  // ⏹ home ⏹
  router.get('/', controller.home.index);
  // /controller/user.js ====> list() 定义了一个路由地址, 对应的是controller下面的user文件里面的list方法

  // ------------ ⏹ user ⏹ api ------------
  router.get('/api/user/getUserList', controller.user.list);
  router.get('/api/user/getLoginUser', controller.user.login);
  router.post('/api/user/createUser', controller.user.createUser);
  router.post('/api/user/deleteUser', controller.user.deleteUser);
  router.post('/api/user/updateUser', controller.user.updateUser);

  // ------------ ⏹ menu ⏹ api 注意 get/post ------------
  router.get('/api/menu/list', controller.menu.list);

  // ------------ ⏹ forbid ⏹ 测试指定路由中使用中间件 ------------
  router.get('/api/forbid/list', forbidIp, controller.forbid.list); // 🌅🌅🌅

  // ------------ ⏹ post ⏹ restful url   ------------
  router.resources('posts', '/api/posts', controller.posts)

};
