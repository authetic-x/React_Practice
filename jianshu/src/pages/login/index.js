import React from 'react';
import {connect} from 'react-redux';
import {LoginWrapper, LoginBox, Input, Button} from './style';
import {actionCreator} from './store';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
    render() {
        const {loginStatus} = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => {this.account = input}}/>
                        <Input  
                            type='password'
                            placeholder='密码' 
                            ref={(input) => {this.password = input}}
                        />
                        <Button onClick={() => this.props.login(this.account, this.password)}>
                            登录
                        </Button>
                    </LoginBox>
                </LoginWrapper>
            );
        } else {
            return <Redirect to='/' />
        }
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

export default connect(mapProps, mapDispatch)(Login);