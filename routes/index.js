const express = require("express")
const router = express.Router()

const sendMail = require("../mail/sendEmail")

//login/Landing page
router.get('/', (req, res) => {
  res.render("home", {
    layout: "main"
  });
});

//About Page
router.get('/About', (req, res) => {
  res.render("about", {
    layout: "main"
  });
});

//Why Us
router.get('/Why Us', (req, res) => {
  res.render("whyUs", {
    layout: "main"
  });
});

//Services page
router.get('/Services', (req, res) => {
  res.render("services", {
    layout: "main"
  });
});

//Contact Page
router.get('/Contact', (req, res) => {
  res.render("contact", {
    layout: "main"
  });
});

router.get('/Confirmation', (req, res) => {
  res.render("confirmation", {
    layout: "main"
  });
});

router.post("/send", sendMail) 

module.exports = router
