import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min: 8,
        required: true
    },
    profilePicture: {
        type: String
    },
    authToken: {
        type: String,
        required: true
    }
},{ timestamps: true })

export default mongoose.model('User', UserSchema)