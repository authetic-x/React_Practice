import axios from "axios"

export const getListData = (dispatch) => {
    axios.get('/api/blog/list?isAdmin=1').then(res => {
        const data = res.data.data;
        dispatch({
            type: 'getArticleList',
            data: data,
            id: data[0].id
        })
    })
}

export const editorChange = (data) => ({
    type: 'init_editor',
    data: data
});