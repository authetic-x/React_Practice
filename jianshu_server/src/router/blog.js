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
        const listData = getList(author, keyword);

        return new SuccessModel(listData);
    }

    // get blog list
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const article = getDetail(id);

        return new SuccessModel(article);
    }

    // create a blog
    if (method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.body);

        return new SuccessModel(data);
    }

    // update a blog
    if (method === 'POST' && req.path === '/api/blog/update') {
        const ok = updateBlog(id, req.body);
        
        if (ok) {
            return new SuccessModel('Update blog success');
        } else {
            return new ErrorModel('Update blog failed');
        }
    }

    // delete a blog
    if (method === 'POST' && req.path === '/api/blog/del') {
        const ok = delBlog(id);
        
        if (ok) {
            return new SuccessModel('Delete blog success');
        } else {
            return new ErrorModel('Delete blog failed');
        }
    }
}

module.exports = handleBlogRouter;