const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: "titleA",
            content: 'contentA',
            createTime: 1580954674858,
            author: 'miles'
        },
        {
            id: 2,
            title: "titleA",
            content: 'contentA',
            createTime: 1580954674858,
            author: 'miles'
        }
    ]
}

const getDetail = (id) => {
    return {
        id: id,
        title: "titleA",
        content: 'contentA',
        createTime: 1580954674858,
        author: 'miles'
    }
}

const newBlog = (blogData = {}) => {
    // ...

    return {
        id: 3,
    }
}

const updateBlog = (id, blogData) => {
    // ...

    return true;
}

const delBlog = (id) => {
    // ...
    
    return true;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}