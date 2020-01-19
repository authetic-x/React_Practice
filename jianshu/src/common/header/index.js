import React from 'react';
import {CSSTransition} from "react-transition-group"
import {connect} from "react-redux"
import * as actionCreator from './store/actionCreator'

import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch,
    Addition, Button, SearchWrapper
} from "./style";

class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left d">下载app</NavItem>
                    <NavItem className="right">登录</NavItem>
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
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <i 
                            className={this.props.focused ? 'focused iconfont' : 'iconfont'}
                        >
                            &#xe617;
                        </i>
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
}

// state指store里的私有数据
// 将store中的相关数据映射到此组件的props中
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
    }
}

// 映射事件处理函数到props
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.searchFocus());
        }, 
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        }
    }
}

// 映射
export default connect(mapStateToProps, mapDispatchToProps)(Header);