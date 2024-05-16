import express from "express"
<<<<<<< HEAD
import mongoose from "mongoose"
import { signIn, signUp } from "./controllers/AuthControllers.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import multer from "multer"
import {  getProfile } from "./controllers/ProfileController.js"
import { verifyToken } from "./middleware/VerifyToken.js"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(cors({origin: "http://localhost:5173", credentials: true}))
const PORT = process.env.PORT
const URL = process.env.URL
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

connect()
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

app.get('/profile', verifyToken, getProfile)
=======
import dotenv from "dotenv"

dotenv.config({path: "./.env"})
const app = express()

const PORT = process.env.PORT

app.get('/', (req, res)=> {
    res.send("Hello")
})

>>>>>>> 61e6fe2dac5617ea3fd0b7a85cd0d917d6de8f34
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})