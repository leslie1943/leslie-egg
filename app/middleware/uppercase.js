/* eslint-disable */

module.exports = (options, app) => {
  return async function uppercase(ctx, next) {
    for (let item in ctx.query) {
      ctx.query[item] = ctx.query[item] && ctx.query[item].toUpperCase()
    }
    await next()
  }
}