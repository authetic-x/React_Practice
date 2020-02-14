const http = require("http");

class myExpress {
    constructor() {
        this.routes = {
            all: [],
            get: [],
            post: []
        }
    }

    // 获取use等方法的参数信息，info{path, stack}
    register(path) {
        const info = {};
        if (typeof path === 'string') {
            info.path = path;
            info.stack = [].slice.call(arguments, 1);
        } else {
            info.path = '/';
            info.stack = [].slice.call(arguments);
        }
        return info;
    }

    use() {
        const info = this.register.apply(this, arguments);
        this.routes.all.push(info);
    }

    get() {
        const info = this.register.apply(this, arguments);
        this.routes.get.push(info);
    }

    post() {
        const info = this.register.apply(this, arguments);
        this.routes.post.push(info);
    }

    // 获取符合路由规则的所有中间件函数
    match(url, method) {
        let stack = [];
        if (url === '/favicon.ico') {
            return stack;
        }

        let curRoutes = [];
        // console.log(this.routes.all[0].stack);
        curRoutes = curRoutes.concat(this.routes.all);
        curRoutes = curRoutes.concat(this.routes[method]);
        curRoutes.forEach(routeInfo => {
            if (url.indexOf(routeInfo.path) === 0) {
                stack = stack.concat(routeInfo.stack);
            }
        });
        return stack;
    }

    // 核心next机制
    handle(req, res, stack) {
        const next = () => {
            const middleware = stack.shift();
            if (middleware) {
                middleware(req, res, next);
            }
        }
        next();
    }

    // http server的回调函数
    callback() {
        return (req, res) => {
            res.json = (data) => {
                res.setHeader('Content-type', 'application/json');
                res.end(
                    JSON.stringify(data)
                );
            }
            const url = req.url;
            const method = req.method.toLowerCase();
            const resultList = this.match(url, method);
            this.handle(req, res, resultList);
        }
    }

    listen(...args) {
        const server = http.createServer(this.callback());
        server.listen(...args);
    }
}

module.exports = () => {
    return new myExpress();
}