module.exports = (options, app) => {
  return async function forbidIp(ctx, next) {
    // 屏蔽列表
    const ids = options.blacklist
    // 客户端ip
    const clinetIp = ctx.request.ip
    // console.info('clinetIp', clinetIp)

    const isForbidIp = ids.some(val => {
      if (val === clinetIp) {
        return true
      }
      return false
    })

    if (isForbidIp) {
      console.info('This message from middleware [forbidIp]: Your IP is in black list.')
      ctx.status = 403
      ctx.body = `
      <div style="height:100vh;width:100vw;background-color:rgb(0, 0, 0);">
        <h1 style="padding-top:20px;text-align:center;color:red;">Your IP has been forbidden to access!</h1>
        <div style="text-align:center;">
          <a style="display: inline-block;
            line-height: 1;
            text-decoration:none;
            white-space: nowrap;
            cursor: pointer;
            background: #409eff;
            border: 1px solid #dcdfe6;
            color: white;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            transition: .1s;
            font-weight: 500;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;" 
            href="/">Back</a>
          </div>
          <div style="text-align:center;margin-top:20px;">
            <img style="width:50vw;height:80vh;" src="/public/image/destination.jpg" />
          </div>
      </div>`
    } else {
      await next()
    }
  }
}