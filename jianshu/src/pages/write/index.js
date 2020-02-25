import React from 'react'
import {
    WriteWrapper,
    ListWrapper,
    EditorWrapper,
    ArticleList
 } from './style'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { getListData } from './store/actionCreator'

class Write extends React.Component {
    componentDidMount() {
        // this.props.getArticleList();
    }

    render() {
        const itemId = this.props.match.params.id;
        console.log(itemId);
        return (
            <WriteWrapper>
                <div className="sideBar">
                    <a href="/">回首页</a>
                </div>
                <ListWrapper>
                    <div className="new">
                        <span>新建文章</span>
                    </div>
                    <ArticleList>
                        {
    
                            this.props.articleList.map(item => {
                                return (
                                    <li 
                                        key={item.id}
                                        className={itemId == item.id ? 'active':null }
                                    >
                                        <span>{item.title}</span>
                                    </li>
                                )
                            })
                        }
                    </ArticleList>
                </ListWrapper>
                <EditorWrapper>
                    <span>Editor</span>
                </EditorWrapper>
            </WriteWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['write', 'articleList']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
    getArticleList() {
        dispatch(getListData);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Write))