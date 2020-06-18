const Router = require('koa-router');
const { TokenValidator } = require('../../validators/validator');
const router = new Router({
  prefix: '/v1/token',
});
router.post('/', async (ctx, next) => {
  const v = await new TokenValidator().validate(ctx);
  await next();
});
module.exports = router;
