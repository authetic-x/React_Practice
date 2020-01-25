import React from 'react';
import {CSSTransition} from "react-transition-group"
import {connect} from "react-redux"
import {Link} from 'react-router-dom';
import * as actionCreator from './store/actionCreator'
 
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch,
    Addition, Button, SearchWrapper, SearchInfo, 
    SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, 
    SearchInfoList
} from "./style";

// 可将组件升级为函数形式的无状态组件，可提升性能
class Header extends React.Component {
    render() {
        const {list, handleInputFocus} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left d">下载app</NavItem>
                    {
                        this.props.login ? 
                        <NavItem className="right" onClick={this.props.logout}>退出</NavItem> : 
                        <Link to='/login'><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={() => {handleInputFocus(list)}}
                                onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <i 
                            className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}
                        >
                            &#xe617;
                        </i>
                        {this.getListArea(this.props)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont">&#xe6e5;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

    getListArea() {
        const {focused, list, page, mouseIn} = this.props;
        const jsList = list.toJS();
        const pageList = [];
        for (let i = page*5; i < (page+1)*5; i ++ ) {
            if (i === jsList.length) break;
            pageList.push(
            <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
            );
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={this.props.handleMouseChange}
                    onMouseLeave={this.props.handleMouseChange}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => {this.props.handlePageChange(this.spinIcon)}}
                        >
                            <i 
                                ref={(icon) => {this.spinIcon = icon}}
                                className="iconfont spin">&#xe851;
                            </i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }
}

// state指store里的私有数据
// 将store中的相关数据映射到此组件的props中
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login']),
    }
}

// 映射事件处理函数到props
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (!list.size) && dispatch(actionCreator.getList());
            dispatch(actionCreator.searchFocus());
        }, 
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        },
        handleMouseChange() {
            dispatch(actionCreator.mouseChange());
        },
        handlePageChange(spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + '360deg)';
            dispatch(actionCreator.pageChange());
        },
        logout() {
            dispatch(actionCreator.logout());
        }
    }
}

// 映射
export default connect(mapStateToProps, mapDispatchToProps)(Header);