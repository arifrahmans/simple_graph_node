import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: { type: String, required: true }
});

export default mongoose.model('User', userSchema);