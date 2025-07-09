const exress = require("express");
const router = exress.Router();
const {
  student_register,
  student_edit,
  student_viewall,
  student_view,
  student_delete,
  pstudent_register, pstudent_edit, pstudent_delete,pstudent_view,student_eno,student_email,subject_eno,pstudent_change_password} = require("../controllers/studentcontroller");

router.get("/student_register", student_register);

router.get("/student_edit", student_edit);

router.get("/student_view/:email", student_view);

router.get("/student_viewall", student_viewall);

router.get("/student_delete", student_delete);

router.post("/student_register", pstudent_register);

router.get("/student_eno/:eno", student_eno);

router.get("/student_email/:email", student_email);

router.get("/subject_eno/:eno", subject_eno);

router.post("/student_edit", pstudent_edit);

router.post("/student_view/:eno", pstudent_view);

router.post("/student_change_password", pstudent_change_password);

router.post("/student_delete/:eno", pstudent_delete);
module.exports = router;
