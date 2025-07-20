import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js"
import userRouter from './routes/userRoutes.js'
import chatRouter from "./routes/chatRoutes.js"
import { connectDB } from "./lib/db.js";
import cookieParser from 'cookie-parser'
dotenv.config();

const app = express();
//middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))   

app.use(cookieParser())
const PORT = process.env.PORT || 3000;


app.get("/" , (req, res) => {
    res.send("Hello World!")
})

app.use('/api/auth' , authRouter);
app.use('/api/user' , userRouter);
app.user('/api/chat' , chatRouter);

app.listen(PORT , async ()=>{
    await connectDB();
    console.log("Connected to server at port " + PORT)
})