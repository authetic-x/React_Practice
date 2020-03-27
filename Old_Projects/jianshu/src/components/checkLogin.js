import React from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

class CheckLogin extends React.Component {
    componentDidMount() {
        axios.get('/api/user/info').then(res => {
            if (res.status == 200) {
                if (res.data.errno === 0) {
                    this.props.handleLoginSuc();
                } else {
                    this.props.history.push("/sign_in")
                }
            }
        })
    }
    render() {
        return null;
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleLoginSuc: () => {
        dispatch({
            type: 'login',
            value: true,
        });
    }
})

export default connect(null, mapDispatchToProps)(withRouter(CheckLogin))