const Router = require('koa-router')
const router = new Router()
const { PositiveIntegerValidator } = require('../../validators/validator')
router.get('/v1/:id/classic/latest', async (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  
  const v = new PositiveIntegerValidator().validate(ctx)
  const id = v.get('path.id')
  ctx.body = id
 await next()
})
router.get('/v1/latest', async (ctx,next)=>{
  ctx.body = {
    key:'11111'
  }
})
module.exports = router