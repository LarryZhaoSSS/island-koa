const catchError = async (ctx, next)=> {
  try {
    await next()
  } catch (error) {
    ctx.body = '服务器有问题'
  }
}
module.exports = catchError