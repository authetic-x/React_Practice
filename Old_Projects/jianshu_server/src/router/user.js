const { login } = require("../controller/login");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const { getCookieExpire } = require("../util/utils");
const { set } = require("../db/redis");

const handleUserRouter = (req, res) => {
    const method = req.method;

    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body;
        const result = login(username, password);
        
        return result.then(data => {
            if (data.username) {
                const userId = `${Date.now()}_${Math.random()}`;
                req.session.username = data.username;
                req.session.realname = data.realname;
                set(userId, req.session);
                res.setHeader('Set-Cookie', `userId=${userId}; path=/; httpOnly; expires=${getCookieExpire()}`);
                return new SuccessModel("Login succeed");
            } else {
                return new ErrorModel("Login failed");
            }
        });
    }

    if (method === 'GET' && req.path === '/api/user/login-test') {
        if (req.session.username) {
            return Promise.resolve(new SuccessModel('Login succeed'));
        }
        return Promise.resolve(new ErrorModel('尚未登录'));
    }
}

module.exports = handleUserRouter;