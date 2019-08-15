const Router = require('koa-router')
const {RegisterValidator} = require('../../validators/validator')
const router = new Router({
  prefix:"/v1/user"
})
router.get('/test', async ctx => {
  ctx.body={"1111":"222"}
})
router.post('/register', async (ctx)=>{
  const v = new RegisterValidator().validate(ctx)
})
router.get('/v1/latest', async (ctx, next) => {
  ctx.body = {
    key: '11111'
  }
})
module.exports = router