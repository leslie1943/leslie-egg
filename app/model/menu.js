module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const MenuSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String },
    parentId: { type: String },
  });
  // model(参数1,参数2,参数3)
  // 参数1 是在 service 里调用名字 [User | Menu]
  // 参数3 是数据表中需要操作的名字
  // 现在要操作的是名字叫 anqi 里面的叫 menus 的表
  return mongoose.model('Menu', MenuSchema, 'menus');
};
