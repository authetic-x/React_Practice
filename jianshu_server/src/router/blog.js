const { getList, 
        getDetail,
        newBlog,
        updateBlog,
        delBlog } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
    const method = req.method;
    const id = req.query.id || '';

    // get blog list
    if (method === 'GET' && req.path === '/api/blog/list') {  
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        
        const res = getList(author, keyword);
        return res.then(listData => {
            return new SuccessModel(listData);
        }).catch(err => {
            return new ErrorModel(err);
        });
    }

    // get blog detail
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const res = getDetail(id);

        return res.then(article => {
            return new SuccessModel(article);
        }).catch(err => {
            return new ErrorModel(err);
        });
    }

    // create a blog
    if (method === 'POST' && req.path === '/api/blog/new') {
        req.body.author = "Miles";
        const res = newBlog(req.body);
        return res.then(data => {
            return new SuccessModel(data);
        });
    }

    // update a blog
    if (method === 'POST' && req.path === '/api/blog/update') {
        const res = updateBlog(id, req.body);
        
        return res.then(ok => {
            if (ok) {
                return new SuccessModel('Update succeed');
            } else {
                return new ErrorModel('Update failed');
            }
        })
    }

    // delete a blog
    if (method === 'POST' && req.path === '/api/blog/del') {
        const author = 'Miles';
        const res = delBlog(id, author);
        
        return res.then(ok => {
            if (ok) {
                return new SuccessModel("Delete succeed");
            } else {
                return new ErrorModel("Article had been deleted already");
            }
        });
    }
}

module.exports = handleBlogRouter;