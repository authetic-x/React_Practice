const {exec} = require("../db/mysql");

const login = (username, passwd) => {
    const sql = `
        select username, realname from users 
        where username='${username}' and password='${passwd}'
    `;

    return exec(sql).then(rows => {
        return rows[0] || {};
    })
}

module.exports = {
    login
}