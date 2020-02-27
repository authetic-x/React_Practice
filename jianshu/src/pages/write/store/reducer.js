import {fromJS} from 'immutable'

const defaultState = fromJS({
    articleList: [{
        id: 0,
        title: 'Little Prince', 
        content: 'adedede'
    },{
        id: 1,
        title: 'Little Prince', 
        content: 'ahhahahahhahaha'
    }, {
        id: 2,
        title: 'Little Prince', 
        content: '12123213231'
    }],
    editorTitle: '',
    editorContent: ''
});

export default (state=defaultState, action) => {
    switch(action.type) {
        case 'getArticleList':
            return state.set('articleList', action.data);
        case 'init_editor':
            return state.merge({
                editorTitle: action.data.title,
                editorContent: action.data.content
            });
        case 'change_title':
            return state.set('editorTitle', action.data);
        case 'change_content':
            return state.set('editorContent', action.data);
        default:
            return state;
    }
}