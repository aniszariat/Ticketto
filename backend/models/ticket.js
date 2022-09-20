const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    ticketNumber:{type : Number, required:true},
    ticketPrice:{type : Number, required:true},
    ticketQuantity :{type :Number,required:false},
    CategoryEvent:{
        type:mongoose.Schema.Types.String, ref:'Category',
        required:true,
    },
    EventId:{
        type:mongoose.Schema.Types.ObjectId, ref:'Event',
        required:true,
    },
    CategoryTicket:{
        type:mongoose.Schema.Types.String, ref:'CategoryTicket',
        required:true,
    },
    PosterTicket :{ type:String, required:false},
});

const Ticket = mongoose.model('ticket',ticketSchema)

module.exports = Ticket;