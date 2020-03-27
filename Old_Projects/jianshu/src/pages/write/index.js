import React from 'react'
import {
    WriteWrapper,
    ListWrapper,
    EditorWrapper,
    ArticleList,
    TitleEditor,
    SaveWrapper,
    ContentEditor
 } from './style'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { getListData, editorChange } from './store/actionCreator'

class Write extends React.Component {
    getIndex(id) {
        for (let i = 0; i < this.props.articleList.length; i ++ ) {
            if (this.props.articleList[i].id == id) {
                return i;
            }
        }
    }

    componentDidMount() {
        this.props.getArticleList();
    }

    componentDidUpdate() {
        const id = this.props.match.params.id;
        if (!id) {
            this.props.history.push(`/write/${this.props.redirectId}`);
        } else {
            if (this.props.articleList.length !== 0) {
                this.props.initEditor(this.props.articleList[this.getIndex(id)]);
            }
        }
    }

    render() {
        const itemId = this.props.match.params.id;
        return (
            <WriteWrapper>
                <div className="sideBar">
                    <a href="/">回首页</a>
                </div>
                <ListWrapper>
                    <div className="new">
                        <span
                            onClick={this.props.handleNewArticle}
                        >新建文章</span>
                    </div>
                    <ArticleList>
                        {
    
                            this.props.articleList.map(item => {
                                return (
                                    <Link 
                                        to={`/write/${item.id}`}
                                        key={item.id}
                                    >
                                        <li 
                                            
                                            className={itemId == item.id ? 'active':null }
                                        >
                                            <span>{item.title}</span>
                                        </li>
                                    </Link>
                                    
                                )
                            })
                        }
                    </ArticleList>
                </ListWrapper>
                <EditorWrapper>
                    <TitleEditor 
                        ref={x => this.titleInput = x}
                        value={this.props.editorTitle}
                        onChange={this.props.handleTitleChange}
                    />
                    <SaveWrapper>
                        <li
                            onClick={this.handleDelete}
                        >删除</li>
                        <li
                            onClick={this.handleSave}
                        >保存</li>
                    </SaveWrapper>
                    <ContentEditor 
                        ref={x => this.contentInput = x}
                        value={this.props.editorContent}
                        onChange={this.props.handleContentChange}
                    />
                </EditorWrapper>
            </WriteWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['write', 'articleList']).toJS(),
    redirectId: state.getIn(['write', 'redirectId']),
    editorTitle: state.getIn(['write', 'editorTitle']),
    editorContent: state.getIn(['write', 'editorContent'])
});

const mapDispatchToProps = (dispatch) => ({
    getArticleList() {
        dispatch(getListData);
    },
    initEditor(data) {
        dispatch(editorChange(data))
    },
    handleTitleChange(e) {
        dispatch({
            type: 'change_title',
            data: e.target.value
        })
    },
    handleContentChange(e) {
        dispatch({
            type: 'change_content',
            data: e.target.value
        })      
    },
    handleNewArticle() {
        
    },
    handleSave() {
        
    },
    handleDelete() {

    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Write))