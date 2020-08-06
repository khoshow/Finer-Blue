const express = require("express")
const exphbs = require("express-handlebars")
const path = require('path');

const app = express()

//handlebars
app.engine(".hbs", exphbs({extname: ".hbs"}))
app.set("view engine", ".hbs")

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',  require("./routes/index"))

app.listen(process.env.PORT || 3000, (res, req)=>{
  console.log("App running at port 3000");
})
