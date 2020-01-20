import * as cons from './constants';
import axios from 'axios';
import {fromJS} from 'immutable'

const changeList = (data) => ({
    type: cons.GET_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 5),
});

export const searchFocus = () => ({
    type: cons.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type: cons.SEARCH_BLUR,
});

export const mouseChange = () => ({
    type: cons.MOUSE_CHANGE,
});

export const pageChange = () => ({
    type: cons.PAGE_CHANGE,
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
           const data = res.data;
           const action = changeList(data.data);
           dispatch(action);
        });
    }  
};