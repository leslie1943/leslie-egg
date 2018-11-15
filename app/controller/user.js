const Controller = require('egg').Controller;

class UserController extends Controller{
    // 这个 list 方法就是 router.js 里的 controller.user.list 里面的 list
    async list(){
        const ctx = this.ctx;
        // console.info('YA TENG in Controller');
        // 此处将操作数据库, 所以调用的是 service 文件夹里的 user.js 文件里面的 list 方法.
        // 调用这个方法后, 会返回一个数据, 用 res 来接收
        let res = await ctx.service.user.list() // /service/user.js ====> list()

        // 将接收到返回的数据渲染出来
        ctx.body = res;
    }
}

module.exports = UserController;