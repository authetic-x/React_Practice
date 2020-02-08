const {exec} = require("../db/mysql");

const loginCheck = (username, passwd) => {
    const sql = `
        select username, realname from users 
        where username='${username}' and password='${passwd}'
    `;

    return exec(sql).then(rows => {
        console.log(rows);
        return rows[0] || {};
    })
}

module.exports = {
    loginCheck
}