const Booking = require("../models/bookingT"); //student
const Event = require("../models/event"); // classRoom

exports.createBooking = async (req, res) => {
  let event = await Event.findById(req.params.evid);
  if (!event) {
    res.status(404).send("evnet Not found !!! ");
  } else {
    let new_booking = new Booking({
      ...req.body,
      EventId: event._id,
      EventTitle: event.Title,
      dateBooking: new Date(),
      UserId: req.auth.userId,
    });

    try {
      if (event.AvailableTickets >= req.body.BookedTicketsNumber) {
        event.AvailableTickets -= req.body.BookedTicketsNumber;
      } else {
        new_booking.BookedTicketsNumber = event.AvailableTickets;
        event.AvailableTickets = 0;
      }
      await event.save();
      await new_booking.save();
      res
        .status(201)
        .json({ message: "successfully created !", booking: new_booking });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
};

exports.updateBooking = async (req, res) => {
  Booking.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteBooking = async (req, res) => {
  Booking.findById(req.params.id)
    .then((booking) => {
      if (!JSON.stringify(booking.UserId).includes(req.auth.userId)) {
        res.status(401).send("not Allowed !");
      } else {
        let event = Event.findById(booking.EventId);
        event.AvailableTickets += booking.BookedTicketsNumber;
        event.save();
        Booking.findByIdAndDelete(booking._id)
          .then(() =>
            res.status(200).json({ message: "Successfully deleted booking!" })
          )
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(404).send("Booking NOT Found !"));
  /* 
  let booking = await Booking.findById(req.params.id);
  console.log(JSON.stringify(booking.UserId).includes(req.auth.userId));
   console.log(req.auth.userId, typeof(req.auth.userId));
   console.log( JSON.stringify(booking.UserId), typeof(JSON.stringify(booking.UserId)));
  */
  /*
  try {
    if ( ! JSON.stringify(booking.UserId).includes(req.auth.userId) ) {
      res.status(401).send("not Allowed !");
    } else {
      let event = Event.findById(booking.EventId)
      event.AvailableTickets += booking.BookedTicketsNumber;
      event.save()
      Booking.findByIdAndDelete(booking._id)
        .then(() => res.status(200).json({ message: "Successfully deleted booking!" }))
        .catch((error) => res.status(400).json({ error }));
    }
  } catch (error) {
    res.status(400).send("Booking NOT Found !");
  }
  */
};

exports.findAllBooking = (req, res) => {
  Booking.find()
    .then((Booking) => res.status(200).json(Booking))
    .catch((error) => res.status(400).json({ error }));
};

exports.findABooking = (req, res) => {
  Booking.findOne({ _id: req.params.id })
    .then((Booking) => res.status(200).json(Booking))
    .catch((error) => res.status(404).json({ error }));
};
