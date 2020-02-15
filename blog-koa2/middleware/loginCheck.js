const { ErrorModel } = require("../model/resModel")

module.exports = async (ctx, next) => {
    if (ctx.session.username) {
        console.log('here')
        await next();
        return;
    }
    ctx.body = new ErrorModel('未登录')
}