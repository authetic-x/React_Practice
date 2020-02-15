const http = require('http')

//整个koa2的核心
function compose(middlewareList) {
    return function(ctx) {
        // 相当于调用next
        // next就相当于整个中间件函数的触发器
        function dispatch(i) {
            const fn = middlewareList[i];
            try {
                return Promise.resolve(
                    fn(ctx, dispatch.bind(null, i+1))
                )
            } catch(err) {
                return Promise.reject(err)
            }
        }
        return dispatch(0)
    }
}

class LikeKoa2 {
    constructor() {
        this.middlewareList = []
    }

    use(fn) {
        this.middlewareList.push(fn)
    }

    createContext(req, res) {
        const ctx = {
            req,
            res
        }
        ctx.query = req.query
        return ctx
    }

    callback() {
        const fn = compose(this.middlewareList)

        return (req, res) => {
            const ctx = this.createContext(req, res)
            fn(ctx)
        }
    }

    listen(...args) {
        const server = http.createServer(this.callback)
        server.listen(args)
    }
}

module.exports = LikeKoa2