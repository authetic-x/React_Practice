import React from 'react';
import {connect} from 'react-redux';
import {LoginWrapper, LoginBox, Input, Button, Logo, Title, Form} from './style';
import {actionCreator} from './store';
import {Redirect, Link} from 'react-router-dom';

function SignUp(props) {
    const {loginStatus} = props;
    let account, password;
    if (!loginStatus) {
        return (
            <LoginWrapper>
                <Link to='/'><Logo/></Link>
                <LoginBox>
                    <Title>
                        <div className="normal-title">
                            <a href="/sign_in" id='sign_in'>登录</a>
                            <b>&bull;</b>
                            <a href='/sign_up' id='sign_up' className="active">注册</a>
                        </div>
                    </Title>
                    <Form>
                        <Input placeholder='账号' ref={(input) => {account = input}}/>
                        <Input  
                            className='middle'
                            type='password'
                            placeholder='密码' 
                            ref={(input) => {password = input}}
                        />
                        <Input  
                            className='restyle'
                            type='password'
                            placeholder='确认密码' 
                            ref={(input) => {password = input}}
                        />
                        <Button 
                            className="sign-up"
                            onClick={() => props.login(account, password)}
                        >
                            注册
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

export default connect(mapProps, mapDispatch)(SignUp);