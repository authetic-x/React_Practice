import React from 'react';
import {connect} from 'react-redux';
import {LoginWrapper, LoginBox, Input, Button, Logo, Title, Form} from './style';
import {actionCreator} from './store';
import {Redirect, Link} from 'react-router-dom';

function SignIn(props) {
    const {loginStatus} = props;
    let account, password;
    if (!loginStatus) {
        return (
            <LoginWrapper>
                <Link to='/'><Logo/></Link>
                <LoginBox>
                    <Title>
                        <div className="normal-title">
                            <a id='sign_in' href="/sign_in" className="active">登录</a>
                            <b>&bull;</b>
                            <a href="/sign_up" id='sign_up'>注册</a>
                        </div>
                    </Title>
                    <Form>
                        <Input placeholder='账号' ref={(input) => {account = input}}/>
                        <Input  
                            className='restyle'
                            type='password'
                            placeholder='密码' 
                            ref={(input) => {password = input}}
                        />
                        <Button 
                            onClick={() => props.login(account, password)}
                            onKeyPress={(e) => props.handleKeyPress(account, password, e)}
                        >
                            登录
                        </Button>
                    </Form>
                </LoginBox>
            </LoginWrapper>
        );
    } else {
        return <Redirect to='/' />
    }
}

const mapProps = (state) => ({
    loginStatus: state.getIn(['login', 'login']),
})

const mapDispatch = (dispatch) => ({
    login(accountEle, passwordEle) {
        dispatch(actionCreator.login(accountEle.value, passwordEle.value));
    },
    handleKeyPress(accountEle, passwordEle, event) {
        if (event.keyCode === 13) {
            dispatch(actionCreator.login(accountEle.value, passwordEle.value));
        }
    }
});

export default connect(mapProps, mapDispatch)(SignIn);