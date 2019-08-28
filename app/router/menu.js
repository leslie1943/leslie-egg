// ------------ ⏹ menu ⏹ ------------
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/menu/list', controller.menu.list);
};