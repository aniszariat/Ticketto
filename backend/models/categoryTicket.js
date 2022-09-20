const mongoose = require('mongoose')

const CategoryTicketSchema= mongoose.Schema({
    CategoryTicket :{
    type : String,
    required :true,
   
}
})

const CategoryTicket = mongoose.model('categoryticket',CategoryTicketSchema) // 
module.exports = CategoryTicket;