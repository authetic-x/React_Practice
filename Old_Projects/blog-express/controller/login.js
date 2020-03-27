const {exec} = require("../db/mysql");
const {genPassword}  = require("../util/cryp");

const login = (username, passwd) => {
    // passwd = genPassword(passwd);

    const sql = `
        select username, realname from users 
        where username='${username}' and password='${passwd}'
    `;

    return exec(sql).then(rows => {
        return rows[0] || {};
    });
}

module.exports = {
    login
}