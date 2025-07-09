const exress = require("express");
const router = exress.Router();

const {student_register, pstudent_register, student_edit,student_edit_eno,student_viewall,pstudent_edit,student_view,pstudent_view,change_password,pchange_password} = require('../controllers/admincontroller')


router.get('/student_register', student_register)
router.get("/student_viewall", student_viewall);
router.get("/student_view", student_view);
router.get('/student_edit',student_edit)
router.post('/student_register',pstudent_register)
router.post('/student_edit_eno', student_edit_eno)
router.post("/student_edit", pstudent_edit);
router.post("/student_view", pstudent_view);
router.get('/change_password', change_password)
router.post("/change_password", pchange_password);
module.exports = router