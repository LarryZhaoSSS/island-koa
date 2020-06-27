const Router = require('koa-router');
const { Flow } = require('../../models/flow');
const router = new Router({
  prefix: '/v1/classic',
});
const { Auth } = require('../../../middlewares/auth');
const { PositiveIntegerValidator } = require('../../validators/validator');

router.get('/latest', new Auth().m, async (ctx, next) => {
  const flow = await Flow.findOne({
    order: [['index', 'DESC']],
  });
  console.log('------latest----');
  console.log(flow);
  ctx.body = flow;
});
module.exports = router;
