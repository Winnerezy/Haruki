import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        default: "Not Started"
    },
    dueDate: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export default mongoose.model("Task", TaskSchema)