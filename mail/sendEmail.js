const nodemailer = require("nodemailer");
var mailgun = require('mailgun-js');
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res){
  const output = `
  <p>You Have a new Forms Entry</p>
  <h3>Title: ${req.body.messageSubject}</h3>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;
const title = `${req.body.messageSubject}`

  var api_key = process.env.api_key;
  var domain = process.env.domain;
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: process.env.from,
    to: process.env.to,
    subject: "Data entry from FinerBlue contact-form",
    html: output
  };

  mailgun.messages().send(data, function (error, body) {
    if(error){
      console.log(error);
    }else{
      res.render("contact");
    }
  });

});

module.exports = router;
