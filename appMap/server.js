const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config.js");
const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");

const app = express(),
  DIST_DIR = path.join(__dirname, "dist"),
  PORT = 3000,
  compiler = webpack(config);
// app.use(bodyParser());
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.get("*", (req, res, next) => {
  const filename = path.join(DIST_DIR, "index.html");

  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
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
    subject: "contact request",
    text: "Hello world?",

    html: content
    // html: "hello"
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(PORT);
