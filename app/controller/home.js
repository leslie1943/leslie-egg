'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    // console.info('this.ctx.helper', this.ctx.helper)
    this.ctx.logger.debug('print logger debug')
    this.ctx.logger.info('print logger info')
    this.ctx.logger.warn('print logger warn')
    this.ctx.logger.error('print logger error')
    console.info('this.app.config.env:', this.app.config.env.toUpperCase())

    // render template.
    const template = `<div
    style="width:vmin;height:100vh;
    padding-top:20px;
    background-color:rgb(217, 236, 255);
    text-align:center;
    font-size:14px;">
    <p>Hi, ${this.ctx.userName}</p>
    <span></span>Your device is <span style="color:pink;"> ${this.ctx.isIOS ? 'IOS' : 'Not IOS'} </span> </span>
    <div>Your device is ${this.ctx.uerAgent}</div>
    <div><a style="display: inline-block;
        line-height: 1;
        text-decoration:none;
        white-space: nowrap;
        cursor: pointer;
        background: #409eff;
        border: 1px solid #dcdfe6;
        color: white;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;" 
        href="/api/forbid/list">Test middleware</a></div>
    </div>`
    console.info('______this.ctx.isIOS______: ', this.ctx.isIOS);
    // 🚀🚀🚀 this place can be retrived different msg from server side.
    console.info('______this.ctx.userName______: ', this.ctx.userName);
    this.ctx.body = template;
  }
}
module.exports = HomeController;
