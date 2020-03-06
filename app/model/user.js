module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      required: true,
      auto: true, // 自动创建 类型为 [ObjectId] 的 _id
    },
    name: { type: String },
    password: { type: String },
  });
  // model(参数1, 参数2, 参数3) 参数3是你数据表中需要操作的表的名字
  // 比如我现在要操作的是名字叫 anqi 里面的叫 users 的表
  return mongoose.model('User', UserSchema, 'users');
};
