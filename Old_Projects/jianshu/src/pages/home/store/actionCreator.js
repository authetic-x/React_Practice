import axios from 'axios'

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('api/home.json').then((res) => {
            const data = res.data.data;
            const action = {
                type: 'change_data',
                data: data,
            };
            dispatch(action);
        });
    }
};

export const initArticleList = () => {
    return (dispatch) => {
        axios.get('api/blog/list').then(res => {
            const data = res.data.data;
            const action = {
                type: 'get_article_list',
                data: data
            };
            dispatch(action);
        })
    }
}