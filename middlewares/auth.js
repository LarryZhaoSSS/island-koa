const basicAuth = require('basic-auth');
const jwt = require('jsonwebtoken');
class Auth {
  constructor(level) {
    this.level = level || 1;
    Auth.USER = 8;
    Auth.ADMIN = 16;
    Auth.SUPER_ADMIN = 32;
  }
  get m() {
    return async (ctx, next) => {
      // token 检测
      const userToken = basicAuth(ctx.req);
      let errMsg = 'token不合法';
      if (!userToken || !userToken.name) {
        throw new global.errs.Forbidden(errMsg);
      }
      let decode;
      try {
        decode = jwt.verify(userToken.name, global.config.security.secretKey);
      } catch (error) {
        if (error.name === 'TokenExpiredError') {
          errMsg = 'token 已过期 ';
        }
        throw new global.errs.Forbidden(errMsg);
      }
      if (decode) {
        if (decode.scope < this.level) {
          errMsg = '权限不足';
          throw new global.errs.Forbidden(errMsg);
        }
        ctx.auth = {
          uid: decode.uid,
          scope: decode.scope,
        };
      }
      await next();
    };
  }
}
module.exports = {
  Auth,
};
