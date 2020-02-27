import axios from "axios"

export const getListData = (dispatch) => {
    axios.get('/api/blog/list').then(res => {
        dispatch({
            type: 'getArticleList',
            data: res.data.data
        })
    })
}

export const editorChange = (data) => ({
    type: 'init_editor',
    data: data
});