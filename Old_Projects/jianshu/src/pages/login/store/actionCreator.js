import axios from "axios"

export const login = (account, password) => {
    return (dispatch) => {
        axios.post('/api/user/login', {
            username: account,
            password: password
        }).then(res => {
            const data = res.data;
            if (data.errno !== 0) {
                dispatch({
                    type: 'login',
                    value: false,
                });
            } else {
                dispatch({
                    type: 'login',
                    value: true,
                });
            }
        })
    }
}