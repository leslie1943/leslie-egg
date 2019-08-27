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
}

module.exports = SearchController;
