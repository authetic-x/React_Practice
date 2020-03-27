import React from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import Carousel from './components/Carousel';
import {HomeWrapper, 
        HomeLeft, 
        HomeRight,
        BackTop,
} from './style';
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
                    <Carousel />
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