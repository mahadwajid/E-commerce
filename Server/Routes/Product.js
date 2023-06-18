import express from "express";
import multer from 'multer';
import {addProduct, getMenCategory, getProduct} from "../controllers/Product.js";


const router=express.Router();

const storage = multer.diskStorage({
    destination:function(req , file , cb){
        cb(null ,'./images/');
    },
    filename:function (req ,file, cb){
        cb(null , Date.now() + '-' + file.originalname);
    },
});

const upload= multer({storage : storage});

router.post('/',upload.single('image'), addProduct );

router.get('/', getProduct);

router.get('/',getMenCategory);

export default router;