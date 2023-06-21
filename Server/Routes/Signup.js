import express from 'express';
import { createSignup, getSignup} from '../controllers/Signup.js';


const router= express.Router();

router.post("/Login",getSignup);

router.post("/Signup", createSignup);

export default router;