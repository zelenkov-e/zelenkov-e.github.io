const http = require('http');
// const greeting = require('./greeting');
const user = require('./user');
// const date = require('./currentDate');
// const date = require('./currentDate');
const date = require('./currentDate');
const Admin = require('./admin');
let yauheni = new Admin('Yauheni', 33);

http
  .createServer(function(request, response) {
    response.end('hello Node');
  })
  .listen(3000, '127.0.0.1', function() {
    console.log('sever listen 3000 port');
    // console.log(greeting);
    yauheni.sauHi();
    // console.log(date.currentDate);
    // console.log(date.getMessage(user.userName));
  });
