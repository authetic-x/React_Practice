import {fromJS} from 'immutable'

const defaultState = fromJS({
    articleList: [{
        id: 1,
        title: 'Little Prince', 
        content: 'ahhahahahhahaha'
    }]
});

export default (state=defaultState, action) => {
    switch(action.type) {
        case 'getArticleList':
            return state.set('articleList', action.data);
        default:
            return state;
    }
}