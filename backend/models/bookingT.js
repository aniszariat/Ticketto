const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  dateBooking: { type: Date, required: true },
  EventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  EventTitle: {
    type: mongoose.Schema.Types.String,
    ref: "Event",
    required: false,
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  CategoryTicket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryTicket",
  },
  BookedTicketsNumber: Number,
});

// const Booking = mongoose.model("bookingT", bookingSchema);

// module.exports = Booking;
