const express = require("express")
const exphbs = require("express-handlebars")
const path = require('path');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");



const app = express()

dotenv.config({path: './config/config.env'})


app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))



//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',  require("./routes/index"))
app.use('/About',  require("./routes/index"))
app.use('/Services',  require("./routes/index"))
app.use('/Contact',  require("./routes/index"))
app.use('/Why Us',  require("./routes/index"))
app.use('/Confirmation',  require("./routes/index"))

app.use("/send",  require("./routes/index"))

app.listen(process.env.PORT || 8080, (res, req)=>{
  console.log("App running at port 8080");
})
