/* eslint-disable */

const Controller = require('egg').Controller;

class MenuController extends Controller {
  async list() {
    console.info('appNum:', this.app.appNum)
    console.info('Controller level');
    const ctx = this.ctx;
    // 此处将操作数据库, 所以调用的是 service 文件夹里的 menu.js 文件里面的 list 方法.
    // 调用这个方法后, 会返回一个数据, 用 res 来接收
    const res = await ctx.service.menu.list();
    console.info(res);
    ctx.body = res;
  }
}
module.exports = MenuController;
