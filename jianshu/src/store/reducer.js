// 让store中的state变为immutable，
// 这个方法可直接从redux中引入
import {combineReducers} from "redux-immutable";

import {reducer as headerReducer} from "../common/header/store";
import {reducer as homeReducer} from "../pages/home/store/";
import {reducer as detailReducer} from '../pages/detail/store';
import {reducer as loginReducer} from '../pages/login/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer,
});

export default reducer;