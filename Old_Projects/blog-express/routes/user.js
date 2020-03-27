const express = require("express");
const router = express.Router();

const {login} = require("../controller/login");
const { SuccessModel, ErrorModel } = require("../model/resModel");

router.post("/login", (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);
    const result = login(username, password);

    result.then(data => {
        if (data.username) {
            req.session.username = data.username;
            req.session.realname = data.realname;
            res.json(new SuccessModel("login suc"));
        } else {
            res.json(new ErrorModel("login failed"));
        }
    });
});

router.get("/session-test", (req, res) => {
    if (!req.session.num) {
        req.session.num = 0;
    }
    req.session.num++;
    res.json({
        requestNum: req.session.num
    });
})

module.exports = router;