const Router = require('koa-router')
const router = new Router()
router.get('/v1/:id/classic/latest', async (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  ctx.body = {
    key: 'key22211'
  }
  throw new Error('API EXCEPTION')
})
module.exports = router