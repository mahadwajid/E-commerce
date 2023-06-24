import express from 'express';
import { createSignup } from '../controllers/Signup.js';

const router = express.Router();

router.post('/', createSignup);

export default router;
