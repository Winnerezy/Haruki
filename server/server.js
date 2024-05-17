import express from "express"
import mongoose from "mongoose"
import { signIn, signUp } from "./controllers/AuthControllers.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import multer from "multer"
import {  getProfile } from "./controllers/ProfileController.js"
import { verifyToken } from "./middleware/VerifyToken.js"
import { addTasks } from "./controllers/TasksController.js"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(cors({origin: "http://localhost:5173", credentials: true}))
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

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})