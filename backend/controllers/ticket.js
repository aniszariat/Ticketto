const Ticket = require('../models/ticket');
const Event = require('../models/event')

exports.createTicket = async (req, res) => {
    let new_ticket = new Ticket(req.body);
    let event = await Event.findById(req.body.EventId)
    try {
        new_ticket.ticketQuantity = event.AvailableTickets
        new_ticket = await new_ticket.save();
        res.status(201).json({ message: "successfully created Ticket !", ticket: new_ticket._doc });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.updateTicket = async (req, res) => {
    Ticket.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.deleteTicket = (req, res) => {
    Ticket.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Successfully deleted!' }))
        .catch(error => res.status(400).json({ error }));
};


exports.findAllTickets = (req, res )=> {
    Ticket.find()
      .then(Ticket => res.status(200).json(Ticket))
      .catch(error => res.status(400).json({ error }));
  };

  exports.findATicket = (req, res) => {
    Ticket.findOne({ _id: req.params.id })
      .then(Ticket => res.status(200).json(Ticket))
      .catch(error => res.status(404).json({ error }));
  };