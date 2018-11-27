'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '<div style="text-align:center;"><h1>Hi, YOU GUY</h1></div>';
  }
}
module.exports = HomeController;
