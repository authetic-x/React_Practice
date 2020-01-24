import React from 'react';
// import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import {HomeWrapper, 
        HomeLeft, 
        HomeRight
} from './style'

export default class Home extends React.Component {
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
            </HomeWrapper>
        )
    }
}