const queryString = require("querystring");

const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");
const { get } = require("./src/db/redis");

// 处理 postData
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({});
            return;
        }
        if (req.headers["content-type"] !== 'application/json') {
            resolve({});
            return;
        }
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        });
        req.on('end', () => {
            if (!postData) {
                resolve({});
                return;
            }
            resolve(JSON.parse(postData));
        });
    })
    return promise;
}

const serverHandler = (req, res) => {
    res.setHeader('Content-type', "application/json");

    const url = req.url;
    req.path = url.split("?")[0];

    req.query = queryString.parse(url.split('?')[1]);

    // 处理cookie
    req.cookie = {};
    const cookieStr = req.headers.cookie || '';
    cookieStr.split(";").forEach((item) => {
        if (!item) return;
        const arr = item.split('=');
        req.cookie[arr[0].trim()] = arr[1].trim();
    });

    // 处理session
    if (!req.cookie.userId) {
        req.session = {};
    } else {
        get(req.cookie.userId).then(data => {
            req.session = data;
            getPostData(req).then(postData => {
                req.body = postData;
        
                // blog router
                const blogResult = handleBlogRouter(req, res);
                if (blogResult) {
                    blogResult.then(blogData => {
                        res.end(
                            JSON.stringify(blogData)
                        );
                    });
                    return;
                }
        
                // user router
                const userResult = handleUserRouter(req, res);
                if (userResult) {
                    userResult.then(userData => {
                        res.end(
                            JSON.stringify(userData)
                        );
                    });
                    return;
                }
        
                // 未命中返回404
                res.writeHead(404, {"Content-type": "text/plain"});
                res.write("404 not found\n");
                res.end();
            });
        });
        return;
    }

    getPostData(req).then(postData => {
        req.body = postData;

        // blog router
        const blogResult = handleBlogRouter(req, res);
        if (blogResult) {
            blogResult.then(blogData => {
                res.end(
                    JSON.stringify(blogData)
                );
            });
            return;
        }

        // user router
        const userResult = handleUserRouter(req, res);
        if (userResult) {
            userResult.then(userData => {
                res.end(
                    JSON.stringify(userData)
                );
            });
            return;
        }

        // 未命中返回404
        res.writeHead(404, {"Content-type": "text/plain"});
        res.write("404 not found\n");
        res.end();
    });
}

module.exports = serverHandler;