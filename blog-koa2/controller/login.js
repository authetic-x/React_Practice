const {exec} = require("../db/mysql");
const {genPassword}  = require("../util/cryp");

const login = async (username, passwd) => {
    // passwd = genPassword(passwd);

    const sql = `
        select username, realname from users 
        where username='${username}' and password='${passwd}'
    `;

    const rows = await exec(sql);
    return rows[0];
}

module.exports = {
    login
}