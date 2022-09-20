const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/user");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config-users");

router.post("/signup", multer, usersCtrl.signup);
router.post("/login", usersCtrl.login);

/** USER AUTHORITY */
//** every registred user can modify his own profile */
router.put("/:id", auth, multer, usersCtrl.UpdateUser);

//! ADMIN AUTHORITY */
//** only ADMIN  */
// router.get("/all", usersCtrl.findAllUsers);
router.get("/all", usersCtrl.findAllUsers);
router.get("/:id", usersCtrl.findAUser);
router.delete("/:id", auth, usersCtrl.deleteUser);

module.exports = router;
