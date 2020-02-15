const fs = require("fs");
const path = require("path");

// 生成 writeStream
function createWriteStream(fileName) {
    const fullFileName = path.resolve(__dirname, "../", "../", "logs", fileName);
    const writeStream = fs.createWriteStream(fullFileName, {
        flags: 'a'
    });
    return writeStream;
}

// 写日志
function writeLog(writeStream, log) {
    writeStream.write(log+"\n");
}

const accessWriteStream = createWriteStream("access.log");
function access(log) {
    writeLog(accessWriteStream, log);
}

module.exports = {
    access 
}