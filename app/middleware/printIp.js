/* eslint-disable */

module.exports = (options, app) => {
  return async function printIp(ctx, next) {
    /**
     *  --------------------- ctx.request ---------------------
      { 
        method: 'GET',
        url: '/api/menu/list',
        header:
        { 
          'host': '127.0.0.1:7001',
          'connection': 'keep-alive',
          'upgrade-insecure-requests': '1',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,',
          'referer': 'http://127.0.0.1:7001/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7' 
        }
      }
     */
    const clinetIp = ctx.request.ip
    console.info('--------------------------------------------------------')
    console.info('This message from global middleware [printIp]', clinetIp)
    console.info('This message from global middleware [printIp]', new Date())
    await next() // 🚀🚀🚀 DO NOT FORGET!!!
  }
}