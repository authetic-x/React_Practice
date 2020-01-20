// 让store中的state变为immutable，
// 这个方法可直接从redux中引入
import {combineReducers} from "redux-immutable"

import {reducer as headerReducer} from "../common/header/store"

const reducer = combineReducers({
    header: headerReducer,
});

export default reducer;