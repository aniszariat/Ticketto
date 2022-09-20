const mongoose=require('mongoose')
const newsSchema=mongoose.Schema({

 NewsCreator:{
        type:mongoose.Schema.Types.ObjectId, ref:'User',
        required:true,
    },
 TitleNewsPost:{type:String,required:true},
 DateNews:{type:Date, required:true},
 NewsObject:{type:String,required:true},
 NewsBodyPost:{type:String,required:true},
 PosterNews :{ type:String, required:false}
   
})

const News = mongoose.model('news',newsSchema)

module.exports = News;