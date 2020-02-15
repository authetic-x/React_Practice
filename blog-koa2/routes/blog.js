const router = require("koa-router")()
const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
} = require("../controller/blog")
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/blog');

router.get('/detail', async (ctx, next) => {
    const id = ctx.query.id;
    const result = await getDetail(id);
    ctx.body = new SuccessModel(result);
})

router.get('/list', async (ctx, next) => {
    let author = ctx.query.author;
    const keyword = ctx.query.keyword;
    if (ctx.query.isAdmin === '1') {
        if (!ctx.session.username) {
            ctx.body = new ErrorModel('未登录')
            return;
        }
        author = ctx.session.username;
    }
    const result = await getList(author, keyword);
    ctx.body = new SuccessModel(result);
});

router.post('/new', loginCheck, async (ctx, next) => {
    const {title, content, author} = ctx.request.body;
    const blogData = {
        title,
        content,
        author
    }
    const result = await newBlog(blogData);
    ctx.body = new SuccessModel(result)
})

router.post('/update', loginCheck, async (ctx, next) => {
    const id = ctx.query.id
    const {title, content} = ctx.request.body
    const blogData = {
        id,
        title,
        content
    }
    const ok = await updateBlog(blogData)
    if (ok) {
        ctx.body = new SuccessModel('update suc')
    } else {
        ctx.body = new ErrorModel('update failed')
    }
})

router.post('/delete', loginCheck, async (ctx, next) => {
    const id = ctx.query.id;
    const author = ctx.session.username
    const ok = await delBlog(id, author)
    if (ok) {
        ctx.body = new SuccessModel('delete suc')
    } else {
        ctx.body = new ErrorModel('delete failed')
    }
})

module.exports = router;