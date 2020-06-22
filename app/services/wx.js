const util = require('util');
class WXManager {
  static async codeToToken() {
    const url = util.format(
      global.config.wx.loginUrl,
      global.config.wx.appId,
      global.config.wx.appSecret,
      code
    );
    const result = await axios.get(url);
    if (result.status !== 200) {
      throw new global.errs.AuthFailed('openid 获取失败');
    }
    const errcode = result.data.errcode;
    if (errcode !== 0) {
      throw new global.errs.AuthFailed('openid 获取失败' + errcode);
    }
  }
}
