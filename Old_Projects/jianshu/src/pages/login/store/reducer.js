// import * as cons from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    loginStatus: false,
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'login':
            return state.set('loginStatus', action.value);
        case 'logout':
            return state.set('login', false);
        default:
            return state;
    }
}