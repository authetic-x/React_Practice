import axios from 'axios';

export const getData = (pageId) => {
    return (dispatch) => {
        axios.get('/api/page?id=' + String(pageId)).then((res) => {
            const data = res.data;
            dispatch({
                type: 'page_content',
                data: data,
            });
        });
    }
}