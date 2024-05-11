import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config({
    path:"../config/.env"
})


const isAuthenticated = async (req,res,next) => {
    try{
        const {token} = req.cookies;
        console.log(token);
        if(!token){
            return res.status(401).json({
                message:"User Not Authenticated",
                success:false,
            })
        }
        const decode = await jwt.verify(token,process.env.TOKEN_SECRET);
        console.log(decode);
        req.user = decode.userID;
        next();
    } catch(error){
        console.log(error);
    }
}

export default isAuthenticated