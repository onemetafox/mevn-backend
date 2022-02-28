import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    phone: String,
    password: String,
    createdAt: {
        type:Date,
        default: Date.now,
        required: "Must have create date - default value is the current date"
    }
});

export default mongoose.model('Users', userSchema, 'users');