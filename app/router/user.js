/* eslint-disable */
// ------------ ⏹ user ⏹  ------------
module.exports = app => {
  // console.info('I am in router file')
  const { router, controller } = app;
  router.get('/api/user/getUserList', controller.user.list);
  router.get('/api/user/getLoginUser', controller.user.login);
  router.post('/api/user/createUser', controller.user.createUser);
  router.post('/api/user/deleteUser', controller.user.deleteUser);
  router.post('/api/user/updateUser', controller.user.updateUser);
};