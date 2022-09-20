const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const bookingCtrl = require("../controllers/booking");

//le middleware d'authentification pour sécuriser les routes dans les API. De cette façon, seules les requêtes authentifiées seront gérées.

//* every registred user can make a booking and modify
//***the id refers to the event that the user want to assist
router.use(auth);
router.post("/newBooking/:evid", bookingCtrl.createBooking);
//router.get("/oneBooking/:bookingId", bookingCtrl.findOneBooking);
module.exports = router;
