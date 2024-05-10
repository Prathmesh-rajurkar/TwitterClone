import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";


dotenv.config({
    path:".env",
})

databaseConnection()
const app = express();

// middleware
app.use(express.urlencoded({
    extended:true
}))

app.use(express.json());
app.use(cookieParser());

// API
app.use("/api/v1/user",userRoute)

app.get("/home",(req, res) =>{
    res.status(200).json({
        message:"coming from backend...."
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`);
})