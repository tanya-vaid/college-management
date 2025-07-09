var stu = {}

const axios = require('axios')
exports.view_subjects = async (req, res) => {
     const eno = req.query.eno;
     const result = await axios.get(
       `http://localhost:3000/admin/student/subject_eno/${eno}`
     );
     const stuu = result.data;
    console.log(stuu);
    console.log(stu)
     res.render("student/student_view_subjects", { stu: stuu, fuser: stu });
}

exports.view_details = async (req, res) => { 
    const email = req.query.email
     const result = await axios.get(
       `http://localhost:3000/admin/student/student_email/${email}`
     );
      stu = result.data;
    console.log(stu)
    res.render('student/student_view_details',{stu:stu,fuser:stu})
};

exports.change_subjects = async (req, res) => { };

exports.change_password = async (req, res) => {
    res.render('student/student_change_password',{fuser:stu,msg:req.flash('msg')})
};

exports.pchange_password = async (req, res) => {
  const pp = req.body;
  const password = pp.password;
    const cpassword = pp.cpassword;
    
    
    console.log(pp)
    
  if (password != cpassword) {
    req.flash("msg", "passwords does not match");
    return res.redirect("/student/student_change_password");
  } else {
    await axios.post("http://localhost:3000/admin/student/student_change_password", pp);
    req.flash("msg", "password changed sucessfully");
    return res.redirect("/student/student_change_password");
  }
};



