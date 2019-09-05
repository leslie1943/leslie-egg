const Subsription = require('egg').Subscription
const chalk = require('chalk');

module.exports = {
  schedule: {
    interval: '10s',
    type: 'all',
  },
  async task(ctx) {
    // const res = await ctx.curl('http://www.api.com/cache', {
    //   dataType: 'json'
    // })
    // console.info('res', res)
    console.info(chalk.green(`【${new Date()}】: this message from schedule [print_visited] task........`))
    console.info(chalk.green(`【${new Date()}】: this message will print every 1 minutes`))
  }
}
