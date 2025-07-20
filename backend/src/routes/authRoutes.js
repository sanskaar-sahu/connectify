import { Router } from "express";
import { login, logout, onboard, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();


router.get("/", (req,res)=>{
    res.send("Hi Welcome to user routes")
})


router.post("/login" , login )

router.post("/signup" , signup)

router.post("/logout" , logout)

router.post("/onboarding" , protectRoute ,  onboard)

router.get('/me' , protectRoute , (req,res)=>{
    res.status(200).json({success : true , user : req.user});
});

export default router;