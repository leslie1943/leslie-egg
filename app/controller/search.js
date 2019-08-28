'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  async index() {
    const ctx = this.ctx;
    console.info(ctx.query);
    const type = ctx.query.type
    const q = ctx.query.q || 'vue'
    if (type === 'bing') {
      ctx.redirect(`http://cn.bing.com/search?q=${q}`)
    } else {
      ctx.redirect(`https://www.baidu.com/s?wd=${q}`)
    }

    const template = `<div
    style="width:vmin;height:100vh;
    padding-top:20px;
    background-color:rgb(217, 236, 255);
    text-align:center;
    font-size:14px;">
    <div>Test external redirect.</div>
    </div>`
    ctx.body = template
  }

  // check json rule
  async checkRuleJson() {
    const ctx = this.ctx;
    let msg = ''
    try {
      /*
        validate的第一个参数是一个对象,
        其中 Key 是要校验的属性, userName, 从请求参数中获取.
        其中 value 是自定义的校验规则, 在局部定义或者在全局中定义('json'在router.js中定义)
      */
      ctx.validate({ userName: 'jsonRule' }, ctx.query)
      msg = 'The property [userName] of ctx.query have checked passed .'
      console.info(msg)
    } catch (err) {
      msg = 'The property [userName] of ctx.query have checked failed.'
      console.info(err)
    }
    ctx.body = { status: 1, success: true, msg: msg }
  }

  // check json rule
  async checkRuleString() {
    const ctx = this.ctx;
    let msg = ''
    try {
      /*
        validate的第一个参数是一个对象,
        其中 Key 是要校验的属性, userName, 从请求参数中获取.
        其中 value 是自定义的校验规则, 在局部定义或者在全局中定义('json'在router.js中定义)
      */
      ctx.validate({ company: 'string' }, ctx.query)
      msg = 'The property [company] of ctx.query have checked passed .'
      console.info(msg)
    } catch (err) {
      msg = 'The property [company] of ctx.query have checked failed.'
      console.info(err)
    }
    ctx.body = { status: 1, success: true, msg: msg }
  }
}

module.exports = SearchController;
