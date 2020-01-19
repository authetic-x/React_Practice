import * as cons from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    focused: false,
});

export default (state = defaultState, action) => {
    if (action.type === cons.SEARCH_FOCUS) {
        return state.set("focused", true);
    }
    if (action.type === cons.SEARCH_BLUR) {
        return state.set("focused", false);
    }
    return state;
}