/* eslint-disable */
// ------------ ⏹ post ⏹ restful url   ------------
module.exports = app => {
  const { router, controller } = app;
  router.resources('posts', '/api/posts', controller.posts)
};