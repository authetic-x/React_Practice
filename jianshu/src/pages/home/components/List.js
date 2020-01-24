import React from 'react';
import {connect} from 'react-redux'
import {ListItem, ListInfo, LoadMore} from '../style'
import {Link} from 'react-router-dom'

class List extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.list.map((item) => {
                        return (
                            <Link key={item.get('id')} to='/detail'>
                                <ListItem>
                                    <img className="list-pic" src={item.get('imgUrl')} alt="" />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('abstract')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={this.props.getMoreList}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
    }
}

// 映射事件处理函数到props
const mapDispatchToProps = (dispatch) => ({
    getMoreList() {
        
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(List);