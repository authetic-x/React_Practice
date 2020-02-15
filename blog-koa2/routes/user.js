const router = require('koa-router')()
const {
    login
} = require('../controller/login')
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')

router.prefix('/api/user')

router.post('/login', async (ctx, next) => {
    const {
        username,
        password
    } = ctx.request.body
    const result = await login(username, password)
    if (result.username) {
        ctx.session.username = result.username
        ctx.session.realname = result.realname
        ctx.body = new SuccessModel('login suc')
    } else {
        ctx.body = new ErrorModel('login failed')
    }
})

router.get('/session-test', async (ctx, next) => {
    if (!ctx.session.viewCount) {
        ctx.session.viewCount = 0;
    }
    ctx.session.viewCount++;
    ctx.body = {
        viewCount: ctx.session.viewCount
    }
})

module.exports = router