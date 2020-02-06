const { login } = require("../controller/login");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleUserRouter = (req, res) => {
    const method = req.method;

    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, passwd } = req.body;
        const ok = login(username, passwd);
        
        if (ok) {
            return new SuccessModel('login succeed');
        } else {
            return new ErrorModel('login failed');
        }
    }
}

module.exports = handleUserRouter;