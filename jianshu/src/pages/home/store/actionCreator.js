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

