import React from 'react';
import {connect} from 'react-redux'
import {ListItem, ListInfo} from '../style'

class List extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className="list-pic" src={item.get('imgUrl')} alt="" />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('abstract')}</p>
                                </ListInfo>
                            </ListItem>
                        );
                    })
                }
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
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);