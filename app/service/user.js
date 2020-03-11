/* eslint-disable */
const Service = require('egg').Service;

class UserService extends Service {
  // 这个 list 方法被 controller 调用.
  // /controller/user =======> ctx.service.user.list()
  async list() {
    const ctx = this.ctx;
    return ctx.model.User.find();
  }

  async login(con) {
    const ctx = this.ctx;
    console.info(con);
    return ctx.model.User.findOne(con).then(res => {
      console.info(res);
      if (res) {
        return { success: true, status: 1, msg: 'OK', result: res };
      }
      return { success: false, status: -1, msg: 'ERROR', result: res };

    }).catch(err => {
      return { success: false, status: -1, msg: 'ERROR', result: err };
    });
  }

  async createUser(param) {
    const ctx = this.ctx;
    return ctx.model.User.findOne(param).then(res => {
      if (res && res._id) {
        return { success: false, status: -1, msg: 'This id has been existed!' };
      } else {
        console.info('res', res)
        return ctx.model.User.create(param).then(res => {
          return { success: true, status: 1, msg: 'OK', result: res };
        }).catch(err => {
          return { success: false, status: -1, msg: 'ERROR', result: err };
        });
      }
    })

  }

  async deleteUser(param) {
    const ctx = this.ctx;
    return ctx.model.User.deleteOne(param).then(res => {
      return { success: true, status: 1, msg: 'OK', result: res };
    }).catch(err => {
      return { success: false, status: -1, msg: 'ERROR', result: err };
    });
  }
  //
  async updateUser(param) {
    const ctx = this.ctx;
    return ctx.model.User.updateOne({ _id: param._id }, param).then(res => {
      return { success: true, status: 1, msg: 'OK', result: res };
    }).catch(err => {
      return { success: false, status: -1, msg: 'ERROR', result: err };
    });
  }
}

module.exports = UserService;
