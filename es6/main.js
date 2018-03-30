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
  // console.log(req.body.name, req.body.email, req.body.phone, req.body.message);
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

  let transporter = nodemailer.createTransport({
    host: "zelenkov-e.github.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "zelenkovzhenya@gmail.com", // generated ethereal user
      pass: "zelenkovzhenya20101986" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" <zelenkovzhenya@gmail.com>', // sender address
    to: "zelenkov5111917@yandex.ru", // list of receivers
    subject: "Node contact request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  // res.end(JSON.stringify(req.body));
});

app.listen(3000, function() {
  console.log("listen port 3000");
});
