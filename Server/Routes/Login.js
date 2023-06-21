import express from 'express';
import { getSignup} from '../controllers/Signup.js';


const router= express.Router();

router.post("/",getSignup);

export default router;