import mongoose from 'mongoose';

let commentSchema = new mongoose.Schema ({
    postId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    message : {
        type : String,
        required : true
    },
});

export default mongoose.model('Comment', commentSchema);