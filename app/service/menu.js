const Service = require('egg').Service;

class MenuService extends Service {
  // 这个 list 方法被 controller 调用.
  // /controller/user =======> ctx.service.user.list()
  async list() {
    const ctx = this.ctx;
    // /model/menu.js 定义的 model.
    return ctx.model.Menu.find();
  }
}
module.exports = MenuService;
