import styled from "styled-components"
import LogoPic from "../../static/logo.png"

export const HeaderWrapper = styled.div`
    z-index: 1;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    display: block;
    width: 100px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${LogoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    display: block;
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
        cursor: pointer;
    }
    &.active {
        color: #ea6f5a;
    }
    &.d:hover {
        background: #eee;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        #color: 999;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #666;
    }
    &.focused {
        width: 240px;
    }

    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }

    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    z-index: 10;
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px; 
    cursor: pointer;

    .spin {
        display: block;
        float: left;
        font-size: 13px;
        margin-right: 2px;
        transition: all .15s ease-in;
        transform-origin: center center;
    }
`

export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    float: left;
    display: block;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #777;
    color: #787878;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 10px;
`

export const Addition = styled.div`
    position: absolute;
    height: 56px;
    top: 0;
    right: 0;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ea6f5a;
    }
    &.writing {
        color: #fff;
        background: #ea6f5a;
    }
`;

export const UserCenter = styled.div`
    float: right;
    width: 80px;
    height: 56px;
    position: relative;
    margin-right: 12px;

    &:hover {
        background: #f5f5f5;
    }

    .avatar {
        display: block;
        cursor: pointer;
        width: 40px;
        height: 40px;
        position: absolute;
        margin: 8px 24px 8px 16px;
    }

    .avatar:before {
        position: absolute;
        content: '';
        top: 18px;
        right: -14px;
        border-top: 6px solid #999;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
    }

    .avatar img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
`

export const DropMenu = styled.ul`
    display: block;
    z-index: 1000;
    position: absolute;
    list-style: none;
    top: 100%;
    min-width: 160px;
    text-align: left;
    background: #fff;
    padding: 5px 0;
    border-radius: 0 0 4px 4px;
    font-size: 14px;
    border: 1px solid rgba(0,0,0,.15);
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    border-color: transparent;
    background-clip: padding-box;

    li {
        line-height: 20px;
    }

    li a {
        display: block;
        padding: 10px 20px;
        text-align: center;
        line-height: 30px;
        text-decoration: none;
        background-color: transparent;
        cursor: pointer;
        font-weight: 400px;

    }

    a:visited {
        color: #000;
    }

    li a:hover {
        background: #f5f5f5;
    }
`