const login = (username, passwd) => {
    if (username === 'Miles' && passwd === '123') {
        return true;
    }
    return false;
}

module.exports = {
    login
}