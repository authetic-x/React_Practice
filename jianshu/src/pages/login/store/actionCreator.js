export const login = (account, password) => {
    return (dispatch) => {
        if (account === 'Miles' && password === '123') {
            dispatch({
                type: 'login',
                value: true,
            });
        } else {
            dispatch({
                type: 'login',
                value: false,
            });
        }
    }
}