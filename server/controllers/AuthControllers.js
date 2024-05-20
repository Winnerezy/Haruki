import jwt from "jsonwebtoken"
import User from "../schemas/UserSchema.js"
import dotenv from "dotenv"
import bcrypt from "bcrypt";
dotenv.config({ path: "./.env" });

const saltRounds = 10

export const signUp = async(req, res) => {
    try {
        const { firstname, lastname, dateOfBirth, email, password } = req.body
        let hashPassword;
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({ message: "Email already in use" })
        }
        try {
          hashPassword = await bcrypt.hash(password, saltRounds)
        } catch (error) {
           return res.status(400).json({ message: error.message })
        }
       
        let userData = { firstname, lastname, dateOfBirth, email, password: hashPassword };
        const num = Math.ceil(Math.random() * 1000 + 1)
        const token = jwt.sign(num, process.env.SECRET_KEY, {})
        userData.authToken = token
        await User.create(userData)
        return res.status(201).json({ message: "Created Successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const signIn = async(req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res
            .status(404)
            .json({ message: "User not registered" });
        }

        const match = bcrypt.compare(password, existingUser.password)
        
        if (!match) {
           return res.status(400).json({ message: "Incorrect email and password combination" }); 
        }
        return res.status(200).json(existingUser);
        
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
} 

export const logout = async(req, res)=> {
    try {
        const authToken = req.headers["authorization"]
        if(!authToken){
            return res.status(200).json({ message: "Not logged in" })
        }
         await User.findOneAndDelete({ authToken: authToken })
         return res.status(200).json({ message: "Sucessfully logged out" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}