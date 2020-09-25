const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SendPi);

const sendMail = (req, res, next)=>{

const name = req.body.name;
const emailAdd = req.body.email;
const messageSubject = req.body.messageSubject;
const message = req.body.message

const output = `
<h2>Sender: </h2> ${name}
<br>
<h2>EmailID: </h2> ${emailAdd}
<br>
<h2>Subject: </h2> ${messageSubject}
<br>
<h2>Message: </h2> ${message}
`


  const msg = {
    to: 'contact@finerblue.com',
    from: 'khoshow.developer@gmail.com', // Use the email address or domain you verified above
    subject:"New contact: "+ name + " has a subject: " + messageSubject,
    text: 'Hello',
    html: output
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
    }finally{
      res.redirect("/Confirmation")
    }
  })();
}

module.exports = sendMail