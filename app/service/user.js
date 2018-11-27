const Service = require('egg').Service;

class UserService extends Service {
    // 这个 list 方法被 controller 调用.
    // /controller/user =======> ctx.service.user.list()
    async list(){
        const ctx = this.ctx;
        // return ctx.model.User.find({"name":"suzhen"}); // /model/user.js 定义的 model.
        return ctx.model.User.find()
    }

    async login(con){
        const ctx = this.ctx;
        // console.info('con');
        console.info(con);
        // return ctx.model.User.find({"name":"suzhen"}); // /model/user.js 定义的 model.
        return ctx.model.User.findOne(con).then(res =>{
            console.info(res);
            if(res){
                return {success: true, status: 1, msg: "OK"}
            }else{
                return {success: false, status: -1, msg: "ERROR"}
            }
        }).catch(err =>{
            return {success:false,err:err}
        })
    }
}

module.exports = UserService;