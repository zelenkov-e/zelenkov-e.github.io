const http = require('http');
const greeting = require('./greeting');

http
  .createServer(function(request, response) {
    response.end('hello Node');
  })
  .listen(3000, '127.0.0.1', function() {
    //     console.log('sever listen 3000 port');
    console.log(greeting);
  });
