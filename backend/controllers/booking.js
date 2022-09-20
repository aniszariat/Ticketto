const Booking = require("../models/booking"); //student
const Event = require("../models/event"); // classRoom

exports.createBooking = async (req, res) => {
  console.log("req", req.body);
  const { Customer, TotalToPay, BookedEvent, BookedTickets } = req.body;
  // let { BookedTickets } = req.body;
  console.log("BookedTickets before parse", BookedTickets);
  // BookedTickets = JSON.parse(BookedTickets);

  try {
    let event = await Event.findById(req.params.evid);
    if (!event) {
      return res.status(404).send("evnet Not found !!! ");
    } else {
      let new_booking = new Booking({
        Customer, //: req.body.Customer,
        TotalToPay, //: req.body.TotalToPay,
        BookedTickets, //: JSON.parse(req.body.BookedTickets),
        BookedEvent, //: req.body.BookedEvent,
      });

      await new_booking.save();
      res.status(201).json({
        message: "successfully created booking !",
        booking: new_booking,
      });
      const bookedTicketsCat = new_booking.BookedTickets;
      // console.log("bookedTicketsCat", bookedTicketsCat);

      event.EventTickets.map((ticket) => {
        bookedTicketsCat.map((bookedTicket) => {
          if (ticket._id.toString().includes(bookedTicket.CatId)) {
            ticket.Available = ticket.Available - bookedTicket.Quantity;
          }
        });
      });

      await event.save();
      // console.log("event.EventTickets", event.EventTickets);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

// exports.findOneBooking = (req, res) => {
//   Booking.findOne({ _id: req.params.id })
//     .then((Booking) => res.status(200).json(Booking))
//     .catch((error) => res.status(404).json({ error }));
// };

/* 
exports.updateBooking = async (req, res) => {
  Booking.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

 */

/* 
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
  
  };
 */

/* 
exports.findAllBooking = (req, res) => {
  Booking.find()
    .then((Booking) => res.status(200).json(Booking))
    .catch((error) => res.status(400).json({ error }));
};
 */
