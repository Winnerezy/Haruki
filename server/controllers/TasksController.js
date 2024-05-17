import Task from "../schemas/TaskSchema.js"
import User from "../schemas/UserSchema.js";

export const addTasks = async(req, res) =>{
    try {
            const { title, description, } = req.body;
            const task = await Task.create({ title, description });
            const user = await User.findOne({ authToken: req.authToken })
            if(!user){
                return res.status(404).json({ message: "No user founded" })
            }
            user.tasks = task
            return res.status(200).json({ message: "Task Added" });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}