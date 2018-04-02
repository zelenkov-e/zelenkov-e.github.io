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
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${content} `;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "zelenkovzhenya@gmail.com",
      pass: "20101986"
    }
  });

  let mailOptions = {
    from: "zelenkovzhenya@gmail.com",

    to: email,
    subject: "Node contact request",
    text: "Hello world?",

    html: content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(3000, function() {
  console.log("listen port 3000");
});
