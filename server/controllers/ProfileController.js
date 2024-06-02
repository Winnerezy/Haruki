import User from "../schemas/UserSchema.js"

export const getProfile = async(req, res) => {
    try {
           const user= await User.findOne({ authToken: req.authToken });
           if (!user) {
             return res.status(400).json({ message: "No logged in" });
           }
           return res.status(200).json(user); 
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}