const mongoose = require("mongoose");

const eventTicketsSchema = mongoose.Schema({
  Category: { type: String, required: true },
  Quantity: { type: Number, required: true },
  Available: { type: Number, required: true },
  Price: { type: Number, required: true },
});
const eventSchema = mongoose.Schema({
  Title: { type: String, required: true },
  //Artist:{type:String, required:false},
  DateEvent: { type: Date, required: true },
  Duration: { type: Number, required: true },
  Description: { type: String, required: true },
  AdresseEvent: { type: String, required: true },
  CategoryEvent: { type: mongoose.Schema.Types.String, ref: "Category" },
  /*  enum : ['Concert Musical','spectacle de variétés','one-man-show','Vernissage'] */
  PosterEvent: { type: String, required: false },
  EventTickets: [eventTicketsSchema],
  EventTeaser: { type: String, required: false },
  EventCreator: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //! l'utilsateur authentifié /
  //AvailableTickets :{type :Number,}
});

const Event = mongoose.model("event", eventSchema); // Event modele

module.exports = Event;
