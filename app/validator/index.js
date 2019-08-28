// ⏹⏹ 👮‍‍‍‍‍‍👮‍♂️自定义校验规则 ⏹⏹
module.exports = app => {
  app.validator.addRule('jsonRule', (rule, value) => {
    try {
      JSON.parse(value)
    } catch (err) {
      return 'must be json string.'
    }
  })
};