const express = require("express");
const router = express.Router();
const { getList, 
        getDetail,
        updateBlog,
        delBlog,
        newBlog } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const loginCheck = require("../middleware/loginCheck");

// 获取文章详情
router.get("/detail", loginCheck, (req, res) => {
    const id = req.query.id;
    const result = getDetail(id);
    result.then(data => {
        res.json(new SuccessModel(data));
    });
});

// 获取文章列表
router.get('/list', (req, res) => {
    let author = req.query.author;
    const keyword = req.query.keyword;
    if (req.query.isAdmin === '1') {
        if (!req.session.username) {
            res.json(new ErrorModel("hadn't login"));
            return;
        }
        author = req.session.username;
    }
    const result = getList(author, keyword);
    result.then(data => {
        res.json(new SuccessModel(data));
    });
});

// 新建博客
router.post('/new', loginCheck, (req, res) => {
    const blogData = {
        author: req.body.author,
        content: req.body.content,
        title: req.body.title
    }
    const result = newBlog(blogData);
    result.then(insertId => {
        if (insertId) {
            res.json(new SuccessModel({insertId}));
        } else {
            res.json(new ErrorModel('new blog failed'));
        }
    });
});

// 更新博客
router.post("/update", loginCheck, (req, res) => {
    const blogData = {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content
    };
    const result = updateBlog(blogData);
    result.then(isUpdate => {
        if (isUpdate) {
            res.json(new SuccessModel("Update suc"));
        } else {
            res.json(new ErrorModel("Update failed"));
        }
    });
});

// 删除博客
router.post("/delete", loginCheck, (req, res) => {
    const id = req.body.id;
    const result = delBlog(id);
    result.then(isDel => {
        if (isDel) {
            res.json(new SuccessModel("Delete suc"));
        } else {
            res.json(new ErrorModel("Delete failed"));
        }
    });
})

module.exports = router;