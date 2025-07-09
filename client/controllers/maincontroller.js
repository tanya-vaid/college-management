const axios = require("axios");
exports.home = async (req, res) => {
  res.render("home");
};

exports.login = async (req, res) => {
  res.render("login", { msg: req.flash('msg') })
;
};

exports.plogin = async (req, res) => {
  const user = req.body;
  const result = await axios.get(`http://localhost:3000/login/${user.email}`);
  const fuser = result.data;
  
  if (fuser != "") {
    if (user.password === fuser.password) {
      if (user.role === "admin") {
        res.render("admin/index", { fuser,student:undefined });
      } else if (user.role === "student") {
        
        res.render("student/index",{fuser});
      } else {
        res.render("faculty/index",{fuser});
      }
    } else {
      req.flash('msg', "Wrong credentials ...!")
      return res.redirect("/login");
    }
  } else {
    req.flash("msg", "User not found ...!");
    return res.redirect("/login");
    
  }
};

exports.logout = async (req, res) => {
  res.render("home");
};
