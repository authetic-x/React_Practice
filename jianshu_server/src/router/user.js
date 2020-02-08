const { loginCheck } = require("../controller/login");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleUserRouter = (req, res) => {
    const method = req.method;

    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body;
        const res = loginCheck(username, password);
        
        return res.then(data => {
            if (data.username) {
                return new SuccessModel("Login succeed");
            } else {
                return new ErrorModel("Login failed");
            }
        });
    }
}

module.exports = handleUserRouter;