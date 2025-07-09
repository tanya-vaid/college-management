const exress = require("express");
const router = exress.Router();
const {
  change_password,pchange_password
} = require("../controllers/admincontroller");

router.get("/changepassword", change_password);
router.post("/change_password", pchange_password);

 
module.exports = router;
