const Controller = require('egg').Controller;

const utils_tool = require('../utils/index');
class UserController extends Controller {
  // 这个 list 方法就是 router.js 里的 controller.user.list 里面的 list
  async list() {
    const ctx = this.ctx;
    // 🚀-------------------------------------------------------🚀
    // 🚀-------------------------------------------------------🚀
    // 使用 ctx.queries获取 GET 请求的所有 参数
    // or
    // console.info((ctx.queries.id)[0]);
    // 🚀-------------------------------------------------------🚀
    // https://eggjs.org/zh-cn/basics/controller.html
    // 🚀-------------------------------------------------------🚀

    // 此处将操作数据库, 所以调用的是 service 文件夹里的 user.js 文件里面的 list 方法.
    // 调用这个方法后, 会返回一个数据, 用 res 来接收
    const res = await ctx.service.user.list(); // /service/user.js ====> list()
    console.info(res);

    // 将接收到返回的数据渲染出来
    ctx.body = res;
  }
  async createUser(data) {
    const ctx = this.ctx;
    // 使用 ctx.request.body 获取 POST 请求的所有 参数
    console.info(this.ctx.request.body);
    const req_param = this.ctx.request.body;
    const res = await ctx.service.user.createUser({
      _id: ctx.app.mongoose.Types.ObjectId(utils_tool.objectId()),
      // _id: ctx.app.mongoose.Types.ObjectId('123456789012'),
      name: req_param.name,
      password: req_param.password,
    });
    ctx.body = res;
  }

  async deleteUser(data) {
    const ctx = this.ctx;
    // 使用 ctx.request.body 获取 POST 请求的所有 参数
    console.info(this.ctx.request.body);
    const req_param = this.ctx.request.body;
    const res = await ctx.service.user.deleteUser(req_param);
    ctx.body = res;
  }

  async updateUser(data) {
    const ctx = this.ctx;
    // 🚀-------------------------------------------------------🚀
    // 🚀-------------------------------------------------------🚀
    // 使用 ctx.request.body 获取 POST 请求的所有 参数
    // 🚀-------------------------------------------------------🚀
    // 🚀-------------------------------------------------------🚀

    // ❌❌❌
    // ❌一个常见的错误是把 ctx.request.body 和 ctx.body 混淆，后者其实是 ctx.response.body 的简写
    // ❌❌❌

    console.info(this.ctx.request.body);
    const req_param = this.ctx.request.body;
    const res = await ctx.service.user.updateUser(req_param);
    ctx.body = res;
  }

  async login() {
    const ctx = this.ctx;
    console.info(ctx.query);

    // 使用 ctx.query 获取 GET 请求的所有 参数
    const param = {
      name: ctx.query.name,
      password: ctx.query.password,
    };

    // 此处将操作数据库, 所以调用的是 service 文件夹里的 user.js 文件里面的 list 方法.
    // 调用这个方法后, 会返回一个数据, 用 res 来接收
    const res = await ctx.service.user.login(param); // /service/user.js ====> list()
    // if(res.name == con.name && res.password == con.password){
    //     console.info("find correct");
    //     return true;
    // }
    // console.info(res);

    // 将接收到返回的数据渲染出来
    ctx.body = res;
  }
}

module.exports = UserController;
