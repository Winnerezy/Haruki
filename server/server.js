import express from "express"
import mongoose from "mongoose"
import { signIn, signUp } from "./controllers/AuthControllers.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import multer from "multer"
import {  getProfile } from "./controllers/ProfileController.js"
import { verifyToken } from "./middleware/VerifyToken.js"
import { addTasks, deleteTask, editStatus, editTask, getTask, getTasks } from "./controllers/TasksController.js"

export const app = express()
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin:
      "*",
    credentials: true,
  })
);
const PORT = process.env.PORT
const URL = process.env.URL
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

connect();
async function connect() {
    try {
        await mongoose.connect(URL)
        console.log("MongoDB connected!")
    } catch (error) {
       console.log('Error', error) 
    }

}


app.post('/sign-up', signUp)
app.post('/sign-in', signIn)
app.post('/add-task', verifyToken, addTasks)
app.get('/profile', verifyToken, getProfile)
app.get('/get-tasks', verifyToken, getTasks)
app.get("/get-task/:id", verifyToken, getTask);
app.put("/edit-task/:id", verifyToken, editTask);
app.put("/edit-status/:id", verifyToken, editStatus);
app.delete('/delete-task/:id', verifyToken, deleteTask);

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})
