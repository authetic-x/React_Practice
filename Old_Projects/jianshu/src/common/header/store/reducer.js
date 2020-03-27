import * as cons from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 0,
    totalPage: 1,
    mouseIn: false,
    mouseEnter: false,
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case cons.SEARCH_FOCUS:
            return state.set("focused", true);
        case cons.SEARCH_BLUR:
            return state.set("focused", false);
        case cons.GET_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage,
            });
        case cons.MOUSE_CHANGE:
            const isMouseIn = state.get('mouseIn');
            return state.set("mouseIn", !isMouseIn);
        case cons.MOUSE_ENTER:
            return state.set('mouseEnter', true);
        case cons.MOUSE_LEAVE:
            return state.set('mouseEnter', false);
        case cons.PAGE_CHANGE:
            const totalPage = state.get('totalPage');
            const newPage = (state.get('page') + 1) % totalPage;
            return state.set('page', newPage);
        default:
            return state;
    }
}