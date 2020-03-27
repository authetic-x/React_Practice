import styled from 'styled-components';
import LogoPic from "../../static/logo.png"

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #eee;
`

export const Logo = styled.div`
    position: absolute;
    left: 50px;
    top: 56px;
    width: 100px;
    height: 45px;
    background: url(${LogoPic});
    background-size: cover;
`

export const LoginBox = styled.div`
    width: 400px;
    margin: 100px auto;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    padding: 50px 50px 30px;
    border-radius: 4px;
    box-sizing: border-box;
`

export const Title = styled.h4`
    padding: 10px;
    font-weight: 400;
    margin: 0 auto 50px;
    color: #969696;
    .normal-title {
        text-align: center;
        font-size: 18px;
    }
    .normal-title a, b {
        padding: 10px;
        text-decoration: none;
        color: #969696;
    }
    .normal-title .active {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
    
`

export const Form = styled.div`
    margin-bottom: 20px;
`

export const Input = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #c8c8c8;
    margin-bottom: 0;
    background-color: hsla(0,0%,71%,.1);
    box-sizing: border-box;
    padding: 4px 12px;
    border-radius: 4px 4px 0 0;

    &.middle {
        border-top: 0;
        border-radius: 0;
    }

    &.restyle {
        border-top: 0;
        border-radius: 0 0 4px 4px;
        margin-bottom: 20px;
    }
`

export const Button = styled.div`
    width: 100%;
    height: 38px;
    line-height: 38px;
    background: #3194d0;
    color: #fff;
    border-radius: 25px;
    margin: 10px auto;
    text-align: center;
    font-size: 18px;
    cursor: pointer;

    &.sign-up {
        background: #42c02e;
    }
`