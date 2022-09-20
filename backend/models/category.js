const mongoose = require('mongoose')
const CategorySchema= mongoose.Schema({
    CategoryCreator:{
        type:mongoose.Schema.Types.ObjectId, ref:'User',
        required:true,
    },
    CategoryEvent :{
    type : String,
    required :true},
    CategoryEventBg :{ type:String, required:false}
})

const Category = mongoose.model('category',CategorySchema) // 
module.exports = Category;