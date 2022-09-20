const mongoose=require('mongoose')
const commentSchema=mongoose.Schema({
    DateComment:{type:Date, required:true},
    CommentSubject:{type:String,required:true},
    CommentBody:{type:String,required:true},
    UserId:{
        type:mongoose.Schema.Types.ObjectId, ref:'User',
        required:true,
    }
})

const Comment = mongoose.model('comment',commentSchema)

module.exports = Comment;