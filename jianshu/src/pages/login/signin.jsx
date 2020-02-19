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
                            <Link to='/sign_in'>
                                <a id='sign_in' className="active">登录</a>
                            </Link>
                            <b>&bull;</b>
                            <Link to='/sign_up'>
                                <a id='sign_up'>注册</a>
                            </Link>
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
                        <Button onClick={() => props.login(account, password)}>
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
    }
});

export default connect(mapProps, mapDispatch)(SignIn);