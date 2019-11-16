const os = require('os');

let userName = os.userInfo().username;
// console.log(userName);

module.exports.userName = userName;
