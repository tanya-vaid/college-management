const express = require("express");
const app = express();
const cors = require("cors");

const ar  = require("./routes/adminroute");
const sr  = require("./routes/studentroute");
const mr = require('./routes/mainroute')
const con = require("./database/dbconfig");
require("dotenv").config();

const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/admin", ar);
app.use("/admin/student", sr);
app.use("/", mr);




const init = async () => {
  try {
    await con.authenticate();
    console.log("connected to database");
    con.sync();
  } catch (error) {
    console.log("some error occured");
  }
};

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
init();
