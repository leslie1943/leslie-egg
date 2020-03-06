const Subsription = require('egg').Subscription
const chalk = require('chalk');

module.exports = app => {
  return {
    schedule: {
      interval: '10s',
      type: 'all',
    },
    async task(ctx) {
      // const res = await ctx.curl('https://epro-ps231.test.viewchain.net/epro//api/base/logo', {
      //   dataType: 'json'
      // })
      // if (res.data.status == 1) {
      //   console.info(chalk.green(`【${new Date()}】:call epro service success!`))
      //   console.info(chalk.green(`【${new Date()}】:the result is! ${res.data.result}`))
      // } else {
      //   console.info(chalk.red(`【${new Date()}】:call epro service fail!`))
      // }
      ctx.app.appNum = ctx.app.appNum + 1
      console.info(chalk.green(`【${new Date()}】: ctx.app.appNum ${ctx.app.appNum}`))
      console.info(chalk.green(`【${new Date()}】: this message from schedule [print_visited] task........`))
      console.info(chalk.green(`【${new Date()}】: this message will print every 10 seconds`))
    }
  }
}
