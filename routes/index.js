const express = require("express")
const router = express.Router()


//login/Landing page
router.get('/', (req, res) => {
  res.render("home", {
    layout: "home"
  });
});

module.exports = router
