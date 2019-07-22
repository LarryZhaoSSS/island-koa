const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app
    InitManager.initLoadRouters()
    InitManager.loadHttpException()
  }
  static initLoadRouters () {
    // path config
    const apiDirecotry = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirecotry, { visit: whenLoadModule })
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }
  static loadHttpException () {
    const errors = require('./http-exception')
    global.errs = errors
  }
}
module.exports = InitManager