const dotenv = require("dotenv");


dotenv.config({path: './config/config.env'})


const sgMail = require("@sendgrid/mail");
const path = require("path");


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const contactUs = (req, res, next) => {


const msg = {

  from: 'khoshow.developer@gmail.com', // Use the email address or domain you verified above
  
  "personalizations": [
    {
      "to": [
        {
          "email": "ashuli@finerblue.com"
        }
        
       
        
      ],
      "cc": [
        {
          "email": "khoshow.official@gmail.com"
        }
      ],
     
    }
  ], 
  
 
  subject: "FinerBlue got a query from " + req.body.name,
  html: `<h2> Name:  </h2> ` +req.body.name + 
         `<h2><br> Phone:  </h2>`  +req.body.messageSubject+
         `<h2><br> Email:  </h2>`  +req.body.email+
         `<h2><br> Message: </h2> `  +req.body.message
  
};

//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
 
    if (error.response) {
      console.error(error.response.body)
    }
   
  }

 
  res.render("confirmation", {
    pageTitle: "Message Sent",
    messageSent: "Message has been sent succesfully"
  });
})();

};

 module.exports = contactUs;