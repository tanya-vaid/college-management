const axios = require('axios')
const { json } = require('express')
const stu={name:"",email:"",password:"",address:"",course:"",streme:""}
exports.pstudent_register = async (req, res) => {
  const student = req.body
  await axios.post("http://localhost:3000/admin/student/student_register",student)
res.render('admin/index',{student})
}

exports.student_register = async (req, res) => {
  res.render('admin/student_register')
};

exports.student_edit = async (req, res) => {
  res.render('admin/student_edit',{stu})
}

exports.change_password = async (req, res) => {
  res.render("admin/change_password", { msg: req.flash('msg') });
};

exports.pchange_password = async (req, res) => {
  const pp = req.body
  const password = pp.password
  const cpassword = pp.cpassword 
  if (password != cpassword)
  {
    req.flash('msg', "passwords does not match")
    return res.redirect('/admin/change_password')
  }
  else {
    await axios.post("http://localhost:3000/admin/change_password", pp);
     req.flash("msg", "password changed sucessfully");
     return res.redirect("/admin/change_password");
  }
};




exports.student_edit_eno = async (req, res) => {
   const eno = req.body.eno;
  const result = await axios.get(
       `http://localhost:3000/admin/student/student_eno/${eno}` );
  const stu = result.data
   res.render('admin/student_edit',{stu:stu})
}

exports.pstudent_edit = async (req, res) => {
  const stu = req.body
   await axios.post(
    "http://localhost:3000/admin/student/student_edit",stu);

  res.redirect('/admin/student_viewall')
}

exports.student_viewall = async (req, res) => {
  const stu = await axios.get(
    `http://localhost:3000/admin/student/student_viewall`
  );

  res.render("admin/student_viewall", { stu: stu });
  
}


exports.student_view = async (req, res) => {
  res.render('admin/student_view', {
    stu:{
      id: "",
    name: "",
    email: "",
    address: "",
    course: "",
    streme: "",
    eno: ""
  }
 })
  
}

exports.pstudent_view = async (req, res) => {
   const eno = req.body.eno;
   const result = await axios.get(
     `http://localhost:3000/admin/student/student_eno/${eno}`
   );
   const stu = result.data;
 
  res.render("admin/student_view", { stu: stu });
}