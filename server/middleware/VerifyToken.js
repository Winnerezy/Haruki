import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config({ path: "./.env" });

export const verifyToken = (req, res, next)=> {
    const authorization = req.headers["authorization"]
    if (!authorization) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    const tokenParts = authorization.split(" ");
    if(tokenParts.length !== 2 && tokenParts[0] === "Bearer") {
        return res.status(400).json({ message: "Invalid token format" })
    }
    const authToken = tokenParts[1]
    jwt.verify(authToken, process.env.SECRET_KEY, {}, (err)=> {
        if(err){
            return res.status(400).json({ message: "Invalid token" })
        }
        req.authToken = authToken
        next();
    })
}