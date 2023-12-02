const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const UPLOAD_URL = "https://customs.gov.by/baza-dannykh-vvezyennogo-avtotransporta/?ajax_1=y&query=WVWZZZ1KZAW311048";

const app = express();
app.use(cors());

app.get("/", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/customs", urlencodedParser, function (req, res) {
  console.log("req params", req.params);
  axios
    .post(UPLOAD_URL, req.body)
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      }
    })
    .catch((err) => {
      console.log("Error making the request");
      res.send(err);
    });
});

app.listen(8080);
