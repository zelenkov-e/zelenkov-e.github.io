const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./routes");

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});

// const http = require('http')
// const app = require('./app')
// const config = require('config')

// const port = config.get('port') || 3000
// const server = http.createServer(app)


// server.listen(port)