const util = require('util');
const { User } = require('../models/user');
const { generateToken } = require('../../core/util');
const { Auth } = require('../../middlewares/auth');
const axios = require('axios');
class WXManager {
  static async codeToToken(code) {
    const url = util.format(
      global.config.wx.loginUrl,
      global.config.wx.appId,
      global.config.wx.appsecret,
      code
    );
    console.log(url);
    const result = await axios.get(url);
    console.log(result);
    if (result.status !== 200) {
      throw new global.errs.AuthFailed('openid 获取失败');
    }
    const errcode = result.data.errcode;
    const errmsg = result.data.errmsg;
    if (errcode) {
      throw new global.errs.AuthFailed(`openid 获取失败:${errmsg}` + errcode);
    }
    let user = await User.getUserByOpenid(result.data.openid);
    if (!user) {
      user = await User.registerByOpenid(result.data.openid);
    }
    return generateToken(user.id, Auth.USER);
  }
}
module.exports = {
  WXManager,
};
