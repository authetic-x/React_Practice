const mysql = require("mysql");
const {MYSQL_CONF}  = require("../config/db");

// 下面这两行语句只要有模块引入就会运行？
// 单例？
const con = mysql.createConnection(MYSQL_CONF);

con.connect();

function exec(sql) {
    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }); 
}

const escape = mysql.escape;

module.exports = {
    exec,
    escape
}