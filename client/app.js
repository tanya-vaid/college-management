const express = require("express");
const app = express();
require("dotenv").config();
const axios = require("axios");
const mr = require('./routes/mainroutes')
const ar = require('./routes/adminroutes')
const sr = require('./routes/studentroutes')
const port = process.env.PORT || 9000;
const session = require('express-session')
const flash = require('connect-flash')
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(session({
  secret: 'tanyavaid',
  cookie: { maxAge: 60000 },
  saveUninitialized: false,
  resave:false
}))

app.use(flash())
app.use('/',mr)
app.use('/admin', ar)
app.use('/student',sr)



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
