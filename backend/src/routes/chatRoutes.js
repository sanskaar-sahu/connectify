import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware";

const router = Router();


router.get('/token' , protectRoute , )


export default router;