'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // ⏹ 在这里可以注册app级别的变量和插件 ⏹
  app.appNum = Math.floor(Math.random() * 100)

  // ⏹ 调用定时任务 ⏹
  app.beforeStart(async () => {
    await app.runSchedule('schedule_print_time')
    await app.runSchedule('schedule_print_visited')
  })

  const { router, controller } = app;
  /** *************** 调用层级  *********************
  🚀🚀🚀🚀🚀🚀🚀 [ 1:router.js ] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 2:controller] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 3: service  ] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 4: model    ] 🚀🚀🚀🚀🚀🚀🚀
  **************************************************/

  // ⏹ 👮‍‍‍‍‍‍👮‍♂️自定义校验规则 拆分模块分发 ⏹
  require('./validator/index')(app); // 🎃

  //  ------------ ⏹ home ⏹  ------------
  router.get('/', controller.home.index);
  router.redirect('/home/index', '/', 302);   // ⏹ 内部重定向, 起始路由, 重定向路由, action code. ⏹

  // 🎃🎃 使用 route 方式 分发路由 🎃🎃
  require('./router/user')(app); // 🎃
  require('./router/menu')(app);
  require('./router/posts')(app); // restful resource api
  require('./router/forbid')(app); // 指定路由使用中间件 

  //  ⏹ 使用中间件将某一类请求的参数都大写 ⏹ 
  router.get('/api/search', app.middlewares.uppercase(), controller.search.index)
  router.get('/api/search/ruleJson', controller.search.checkRuleJson)
  router.get('/api/search/ruleString', controller.search.checkRuleString)
};
