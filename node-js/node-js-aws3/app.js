const express = require('express')
const app = express()
const cors = require('cors')
const config = require('config')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/uploads/', express.static('uploads'))


const mongoUri = "mongodb+srv://zelenkov:User12345@cluster0.ez58z.mongodb.net/app?retryWrites=true&w=majority"
////167.71.254.141/32 My IP Address

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(response=>{
        console.log("connected")
    })
    .catch(err=>{
        console.error(err)
    })
  

app.use((req, res, next) => {
    res.status(200).json({
        message: "It works"
    });
})



module.exports = app;