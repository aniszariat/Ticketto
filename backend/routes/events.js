const express = require("express");
const router = express.Router();
const eventsCtrl = require("../controllers/events");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config-events");

router.get("/", eventsCtrl.findAllEvents);
router.get("/:id", eventsCtrl.findAnEvent);
//** only registred users can create Events */
// router.post("/newEvent",/* auth,  multer,*/eventsCtrl.createEvent);
router.use(auth);
router.post("/newEvent", multer, eventsCtrl.createEvent);
//** only ADMIN and the registred CREATOR user of the event can modify it  */
router.put("/update/:id", multer, eventsCtrl.updateEvent);
//** only ADMIN the registred CREATOR user of the event can modify it  */
router.delete("/delete/:id", eventsCtrl.deleteEvent);

module.exports = router;
