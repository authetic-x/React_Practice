// import * as cons from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4877/2747180bb64b9e07c82df7fbeab44e280bed94d2.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }, {
        id: 2,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4877/2747180bb64b9e07c82df7fbeab44e280bed94d2.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }],
    articleList: [{
        id: 1,
        title: '从头撸到脚，SpringBoot 就一篇全搞定！',
        abstract: '推荐阅读： 6大面试技能树：JAVA基础+JVM+算法+数据库+计算机网络+操作系统 2020年后想跳槽？MQ、ZK、Nginx、Kafk等分布...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18375227-526b21f01115a53a.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }, {
        id: 2,
        title: '从头撸到脚，SpringBoot 就一篇全搞定！',
        abstract: '推荐阅读： 6大面试技能树：JAVA基础+JVM+算法+数据库+计算机网络+操作系统 2020年后想跳槽？MQ、ZK、Nginx、Kafk等分布...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18375227-526b21f01115a53a.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }],
    recommendList: [{
        id: 1,
        content: '简书会员',
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
    }, {
        id: 2,
        content: '优先连载',
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
    }, {
        id: 3,
        content: '简书版权',
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
    }, {
        id: 4,
        content: '简书大学堂',
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
    }],
    showScroll: false,
    newPosition: 0,
    indexActive: true,
    timer: null
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'change_data':
            // update state
            // 注意从immutable引入普通js对象时，要调用fromJs()
            return state;
        case 'change_scrollShow_true':
            return state.set('showScroll', true);
        case 'change_scrollShow_false':
            return state.set('showScroll', false);
        case 'change_index':
            const indexActive = state.get('indexActive');
            return state.set('indexActive', !indexActive);
        case 'change_position':
            return state.set('newPosition', action.data)
        default:
            return state;
    }
}