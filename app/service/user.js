const Service = require('egg').Service;

class UserService extends Service {
    // 这个 list 方法被 controller 调用.
    // /controller/user =======> ctx.service.user.list()
    async list(){
        const ctx = this.ctx;
        // return ctx.model.User.find({"name":"suzhen"}); // /model/user.js 定义的 model.
        return ctx.model.User.find()
    }
}

module.exports = UserService;