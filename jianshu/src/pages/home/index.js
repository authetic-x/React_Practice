import React from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import {HomeWrapper, 
        HomeLeft, 
        HomeRight,
        BackTop
} from './style'
import { connect } from 'react-redux';
import {getHomeInfo} from './store/actionCreator';

class Home extends React.Component {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img 
                        className="banner-img"
                        src="https://upload.jianshu.io/admin_banners/web_images/4877/2747180bb64b9e07c82df7fbeab44e280bed94d2.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
                        alt=""
                    />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        // this.props.changeHomeData();
        this.bindEvents();
    } 

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll']),
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 200) {
            dispatch({
                type: 'change_scrollShow_true',
            });
        } else {
            dispatch({
                type: 'change_scrollShow_false',
            });
        }
    }
});


export default connect(mapStateToProps, mapDispatch)(Home); 