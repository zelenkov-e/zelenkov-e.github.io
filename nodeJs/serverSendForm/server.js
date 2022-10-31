var express = require('express');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var app = express();
app.use(bodyParser());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/home.html');
});

app.post('/', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var message = req.body.message;
  var content = `
                <h1>У вас новое сообщение с сайта:</h1>
                 <ul>
                    <li>Клиент: ${name}</<li> 
                    <li>почта: ${email}</<li> 
                    <li>телефон: ${phone}</<li>
                    <li>сообщение: ${message}</<li>
                 </ul>
                 `;
  var response = `
                <h1>У вас новое сообщение с сайта :</h1>
                 <p>
                    Сообщение получено
                 </p>
                 `;

  let transporter = nodemailer.createTransport({
    //прослойка  - котор высылает письма
    service: 'gmail',
    auth: {
      user: 'zelenkovzhenya@gmail.com',
      pass: '****', //real password
    },
  });

  let mailOptions = {
    // from: email,
    to: 'zelenkovzhenya@gmail.com', // куда будет приходить
    subject: 'Письмо с сайта',
    // text: 'Hello world?',
    html: content,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  let mailAnswerOptions = {
    from: 'zelenkovzhenya@gmail.com',
    to: email,
    subject: 'Письмо с сайта Пямятники',
    html: response,
  };

  transporter.sendMail(mailAnswerOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(3000, function() {
  console.log('listen port 3000');
});
