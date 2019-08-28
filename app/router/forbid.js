// ------------ ⏹ forbid ⏹ 测试指定路由中使用中间件 ------------
module.exports = app => {
  const { router, controller } = app;
  // 🌅🌅🌅 在路由中使用中间件 🌅🌅🌅
  const forbidIp = app.middleware.forbidIp({
    blacklist: ['127.0.0.1']
  })
  router.get('/api/forbid/list', forbidIp, controller.forbid.list); // 🌅🌅🌅
};