import {fromJS} from 'immutable'

const defaultState = fromJS({
    articleList: [],
    redirectId: 0,
    editorTitle: '',
    editorContent: ''
});

export default (state=defaultState, action) => {
    switch(action.type) {
        case 'getArticleList':
            return state.merge({
                'articleList': fromJS(action.data),
                'redirectId': action.id
            });
        case 'init_editor':
            console.log(action.data)
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