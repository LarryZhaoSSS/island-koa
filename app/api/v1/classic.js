const Router = require('koa-router')
const router = new Router()
router.get('/v1/1/classic/latest', async (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  if(true) {
    const error = new global.errs.ParameterException()
    throw error
  }
 
})
router.get('/v1/latest', async (ctx,next)=>{
  ctx.body = {
    key:'11111'
  }
})
module.exports = router