const Router = require('koa-router');
const router = new Router({
  prefix: '/v1/classic',
});
const { Auth } = require('../../../middlewares/auth');
const { PositiveIntegerValidator } = require('../../validators/validator');

router.get('/latest', new Auth().m, async (ctx, next) => {
  ctx.body = {
    key: '11111',
  };
});
module.exports = router;
