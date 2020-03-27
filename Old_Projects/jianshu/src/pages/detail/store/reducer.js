import {fromJS} from 'immutable';

const defaultState = fromJS({
    title: '一个SpringBoot问题就干趴下了？我却凭着这份PDF文档吊打面试官.',
    content: '一个SpringBoot问题就干趴下了？我却凭着这份PDF文档吊打面试官.',
});

export default (state=defaultState, action) => {
    switch(action.type) {
        case 'page_content':
            state.merge({
                title: action.data.title,
                content: action.data.content,
            });
            return state;
        default:
            return state;
    }
}