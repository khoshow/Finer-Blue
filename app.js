const express = require("express")
const exphbs = require("express-handlebars")
const path = require('path');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");


const app = express()

dotenv.config({path: './config/config.env'})
//handlebars
app.engine(".hbs", exphbs({extname: ".hbs"}))
app.set("view engine", ".hbs")

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',  require("./routes/index"))
app.use('/About',  require("./routes/index"))
app.use('/Services',  require("./routes/index"))
app.use('/Contact',  require("./routes/index"))
app.use('/Why Us',  require("./routes/index"))


app.use("/send", require("./mail/sendEmail"))

app.listen(process.env.PORT || 3000, (res, req)=>{
  console.log("App running at port 3000");
})
