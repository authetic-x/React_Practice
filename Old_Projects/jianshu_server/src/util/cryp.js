const crypto = require("crypto");

const SECERT_KEY = "dhiu#de7&";

function md5(content) {
    let md5 = crypto.createHash("md5");
    return md5.update(content).digest('hex');
}

function genPassword(password) {
    const str = `password=${password}&key=${SECERT_KEY}`;
    return md5(str);
}

