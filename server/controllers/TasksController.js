import Task from "../schemas/TaskSchema.js"
import User from "../schemas/UserSchema.js";

export const addTasks = async(req, res) =>{
    try {
            const { title, description, dueDate, type } = req.body;
            const task = await Task.create({ title, description, dueDate, type });
            const user = await User.findOneAndUpdate({ authToken: req.authToken }, { $push: { tasks: task } })
            if(!user){
                return res.status(404).json({ message: req.authToken})
            }
            return res.status(200).json({ message: "Task Added" });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const getTasks = async (req, res) => {
  try {

    const user = await User.findOne({ authToken: req.authToken }).populate("tasks");
    if(!user){
        return res.status(404).json({ message: "No user found" })
    }
    const tasks = user.tasks
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json({ message: "No task found" });
    }
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const editTask = async(req, res) => {
  try {
      const { id } = req.params;
      const { title, description, dueDate, type } = req.body;
      const taskDetails = { title, description, dueDate, type };
      const task = await Task.findByIdAndUpdate(id, taskDetails);
      if(!task){
        return res.status(400).json({ message: "No task found" })
      }
      return res.status(200).json({ message: "Task Updated" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }


}

export const deleteTask = async(req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findOneAndDelete({ _id: id })
    if(!task) {
      return res.status(404).json({ message: "No task found" })
    }
    return res.status(200).json({ message: "Deleted Successfully" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const editStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body
    const task = await Task.findByIdAndUpdate(id, { status: status });
    if (!task) {
      return res.status(400).json({ message: "No task found" });
    }
    return res.status(200).json({ message: "Status Updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};