const express = require("express")
const router = express.Router()


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




module.exports = router
