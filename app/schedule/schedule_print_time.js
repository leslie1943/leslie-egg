/* eslint-disable */
const Subsription = require('egg').Subscription
const chalk = require('chalk');

class SchedulePrintTime extends Subsription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '10s', // 10s间隔
      type: 'all' // 指定所有的worker都需要执行
    }
  }
  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    console.info(chalk.blue(`【${new Date()}】: this message from schedule task [print_time]........`))
    console.info(chalk.blue(`【${new Date()}】: this message will print every 10 seconds `))
  }
}

module.exports = SchedulePrintTime