const exress = require("express");
const router = exress.Router();
const { login, logout,home,plogin } = require("../controllers/maincontroller");

router.post("/login", plogin);

router.get("/logout", logout);

router.get("/",  home);


router.get("/login",  login);


 
module.exports = router;
