const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const bookingCtrl = require("../controllers/bookingT");

//le middleware d'authentification pour sécuriser les routes dans les API. De cette façon, seules les requêtes authentifiées seront gérées.

//* every registred user can make a booking and modify
//***the id refers to the event that the user want to assist

router.post("/:evid", auth, bookingCtrl.createBooking);

//!! ADMIN eventCreator and Booking owner
router.get("/", auth, bookingCtrl.findAllBooking);
router.get("/:id", auth, bookingCtrl.findABooking);
router.delete("/:id", auth, bookingCtrl.deleteBooking);
router.put("/:id", auth, bookingCtrl.updateBooking);

module.exports = router;
