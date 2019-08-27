'use strict';
const chalk = require('chalk');
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    // console.info('this.ctx.helper', this.ctx.helper)
    this.ctx.logger.debug('print logger debug')
    this.ctx.logger.info(chalk.white.bgCyan.bold('print logger info'))

    this.ctx.logger.warn('print logger warn')
    this.ctx.logger.error('print logger error')
    console.info('this.app.config.env:', chalk.white.bgCyan.bold(this.app.config.env.toUpperCase()))

    const prefixHref = ` <div style="margin-top:10px;"><a style="display: inline-block;line-height: 1;text-decoration:none;white-space: nowrap;cursor: pointer;background: #409eff;border: 1px solid #dcdfe6;color: white;-webkit-appearance: none;text-align: center;box-sizing: border-box;outline: none;margin: 0;transition: .1s;font-weight: 500;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;padding: 12px 20px;font-size: 14px;border-radius: 4px;" `
    const suffixHref = `</a></div>`

    // render template.
    const template = `<div style="width:vmin;height:100vh; padding-top:20px; background-color:rgb(217, 236, 255); text-align:center; font-size:14px;">
      <p>Hi, ${this.ctx.userName}</p>
      <span></span>Your device is <span style="color:pink;"> ${this.ctx.isIOS ? 'IOS' : 'Not IOS'} </span> </span>
      <div>Your device is ${this.ctx.uerAgent}</div>
      ${prefixHref} href="/api/forbid/list">Test middleware${suffixHref}
      ${prefixHref} href="/api/search/?type=bing&q=vue">Test external rediect 1${suffixHref}
      ${prefixHref} href="/api/search/?type=baidu&q=vue">Test external rediect 2${suffixHref}
    </div>`
    console.info('______this.ctx.isIOS______: ', chalk.black.bgCyan(this.ctx.isIOS));
    // 🚀🚀🚀 this place can be retrived different msg from server side.
    console.info('______this.ctx.userName______: ', chalk.yellow.bgCyan.bold(this.ctx.userName));
    this.ctx.body = template;
  }
}
module.exports = HomeController;
