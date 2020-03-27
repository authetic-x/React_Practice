import {INIT_LIST_ACTION} from "./actionTypes"
import axios from "axios"

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

export const getTodoList = () => {
    return (dispatch) => {
        axios.get("").then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        });
    }   
}