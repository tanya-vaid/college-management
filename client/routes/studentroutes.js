const exress = require("express");
const router = exress.Router();
const {
    view_subjects,
    view_details,
    change_subjects,
    change_password,
    pchange_password
} = require("../controllers/studentcontroller");



router.get("/change_subjects", change_subjects);

router.get("/view_subjects", view_subjects);

router.get("/view_details", view_details);

router.get("/student_change_password",change_password)
router.post("/student_change_password", pchange_password);

module.exports = router;
