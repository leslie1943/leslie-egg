'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = `<div style="text-align:center;"><h1>Hi, YOU GUY</h1>
    You device is ${this.ctx.isIOS ? 'IOS' : 'Not IOS'}
    </div>`;
  }
}
module.exports = HomeController;
