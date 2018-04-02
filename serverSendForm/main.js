var express = require("express");
var bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

var app = express();
app.use(bodyParser());

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/news", function(req, res) {
  res.sendFile(__dirname + "/news.html");
});

app.post("/", function(req, res) {
  // create perems 'output'
  //req.body - use method bodyParser
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact details</h3>
  <ul>  
    <li>name:${req.body.name}</li>
    <li>name:${req.body.email}</li>
    <li>name:${req.body.phone}</li>
  <ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
    `;
  //nodemailer
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      //email from
      user: "zelenkovzhenya@gmail.com",
      pass: "20101986"
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "zelenkovzhenya@gmail.com", // sender address
    // to: "zelenkov5111917@yandex.ru", // list of receivers
    to: `${req.body.email}`, // list of receivers
    subject: "Node contact request", // Subject line
    text: "Hello world?", // plain text body
    //transmit ottput - where are our methods  req.body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
//our PORT
app.listen(3000, function() {
  console.log("listen port 3000");
});
