const Router = require('koa-router');
const router = new Router({
  prefix: '/v1/classic',
});
const { Auth } = require('../../../middlewares/auth');
const { PositiveIntegerValidator } = require('../../validators/validator');

router.get('/latest', new Auth(8).m, async (ctx, next) => {
  ctx.body = ctx.auth.uid;
});
module.exports = router;
