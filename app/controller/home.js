'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.info('this.ctx.isIOS: ', this.ctx.isIOS);
    // 🚀🚀🚀 this place can be retrived different msg from server side.
    console.info('this.ctx.userName: ', this.ctx.userName);
    this.ctx.body = `<div style="text-align:center;font-size:14px;"><p>Hi, ${this.ctx.userName}</p>
    Your device is <span style="color:pink;"> ${this.ctx.isIOS ? 'IOS' : 'Not IOS'} </span>
    <div>Your device is ${this.ctx.uerAgent}</div>
    </div>`;
  }
}
module.exports = HomeController;
