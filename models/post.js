import mongoose from 'mongoose';

let postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

export default mongoose.model('Post', postSchema);