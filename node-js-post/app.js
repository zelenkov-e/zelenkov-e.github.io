const express = require('express')
const bodyParser = require("body-parser");

const app = express()

const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get("/register", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/register.html");
});

app.post("/register", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function (request, response) {
  response.send("Главная страница");
});

app.listen(3000);


// const http = require("http");

// http.createServer(function (request, response) {

//   response.setHeader("Content-Type", "text/html; charset=utf-8;");

//   if (request.url === "/") {
//     response.statusCode = 302; // временная переадресация
//     // на адрес localhost:3000/newpage
//     response.setHeader("Location", "/newpage");
//   }
//   else if (request.url == "/newpage") {
//     response.write("New address");
//   }
//   else {
//     response.statusCode = 404; // адрес не найден
//     response.write("Not Found");
//   }
//   response.end();
// }).listen(3000);
