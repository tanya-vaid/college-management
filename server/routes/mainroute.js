const exress = require("express");
const router = exress.Router();
const { login, } = require("../controllers/maincontroller");



router.get("/login/:email", login);

module.exports = router;
