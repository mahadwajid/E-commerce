import express from 'express';
import { createSignup, getSignup} from '../controllers/Signup.js';


const router= express.Router();

router.get("/",getSignup);

router.post("/", createSignup );

export default router;