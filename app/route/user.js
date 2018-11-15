
module.exports = app => {
    app.router.get('/get', app.controller.user.list);
  };