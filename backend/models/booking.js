const mongoose = require("mongoose");

const eventBookedTicketsSchema = mongoose.Schema({
  Category: { type: String, required: true },
  Quantity: { type: Number, required: true },
  Amount: { type: Number, required: true },
  CatId: { type: String, required: true },
});

const bookingSchema = mongoose.Schema({
  Customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //! l'utilsateur authentifié /
  BookedTickets: [eventBookedTicketsSchema],
  TotalToPay: { type: Number, required: true },
  BookedEvent: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  // BookingDate: { type: Date },
});

const Booking = mongoose.model("booking", bookingSchema); // Booking modele

module.exports = Booking;
