import React from 'react';
import {DetailWrapper, Header, Content} from './style'
import {connect} from 'react-redux';
import {getData} from './store/actionCreator';
import {withRouter} from 'react-router-dom';

class Detail extends React.Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content>
                    <img src="https://upload-images.jianshu.io/upload_images/1179389-f92d10af103644b2.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"/>
                    {this.props.content}
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        // this.props.getDetail(this.props.match.params.id);
    }
}

const mapProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
});

const mapDispatch = (dispatch) => ({
    getDatail(pageId) {
        const action = getData(pageId);
        dispatch(action);
    } 
});

export default connect(mapProps, mapDispatch)(withRouter(Detail));