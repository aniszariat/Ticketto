const Event = require("../models/event");

exports.createEvent = async (req, res) => {
  console.log("req.body", req.body);
  console.log("req.file", req.file);
  const {
    Title,
    DateEvent,
    Duration,
    Description,
    AdresseEvent,
    EventTeaser,
    CategoryEvent,
    EventCreator,
  } = req.body;
  let { EventTickets } = req.body;
  EventTickets = JSON.parse(EventTickets);

  const PosterEvent = req.file
    ? `${req.protocol}://${req.get("host")}/images/eventsImg/${
        req.file.filename
      }`
    : "";
  let new_event = new Event({
    Title,
    // Artiste:req.body.Artiste,
    DateEvent,
    EventCreator,
    Duration,
    Description,
    AdresseEvent,
    EventTickets,
    EventTeaser,
    // EventCreator: req.auth.userId,
    CategoryEvent,
    // AvailableTickets: req.body.AvailableTickets,
    PosterEvent,
  });
  try {
    new_event = await new_event.save();
    res
      .status(201)
      .json({ message: "successfully created event !", event: new_event._doc });
  } catch (error) {
    res.status(400).json({ error });
    console.error(error);
  }
};

exports.updateEvent = async (req, res) => {
  let { EventTickets } = req.body;
  EventTickets = JSON.parse(EventTickets);
  Event.findById(req.params.id)
    .then((event) => {
      if (!event)
        return res.status(400).json({
          message: "Event doesn't exist",
        });
      const { EventCreator } = event;
      const { userId } = req.auth;
      if (EventCreator?.toString() !== userId)
        return res.status(400).json({
          message: "You're not allowed to update someone else's event",
        });
      const updates = req.file
        ? {
            ...req.body,
            EventTickets,
            PosterEvent: `${req.protocol}://${req.get(
              "host"
            )}/images/eventsImg/${req.file.filename}`,
          }
        : { ...req.body, EventTickets };
      Event.findByIdAndUpdate(req.params.id, {
        ...updates,
        _id: req.params.id,
      }).then((updatedevent) =>
        res.status(201).json({ message: "Succefully updated Event !" })
      );
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteEvent = (req, res) => {
  // Event.findByIdAndDelete(req.params.id)
  Event.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Successfully deleted!" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllEvents = (req, res) => {
  Event.find()
    .then((Event) => res.status(200).json(Event))
    .catch((error) => res.status(400).json({ error }));
};

// exports.findAllEvents = (req, res) => {
//   const { userid } = req.headers;
//   const isAdmin = userid === process.env.admin_id;
//   console.log("....", process.env.admin_id, userid);
//   Event.find(!isAdmin ? { EventCreator: userid } : {})
//     .then((Event) => res.status(200).json(Event))
//     .catch((error) => res.status(400).json({ error }));
// };

exports.findAnEvent = (req, res) => {
  Event.findOne({ _id: req.params.id })
    .then((Event) => res.status(200).json(Event))
    .catch((error) => res.status(404).json({ error }));
};
