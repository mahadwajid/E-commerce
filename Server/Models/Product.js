import mongoose from "mongoose";

const ProductStructure = mongoose.Schema({
    productName:String,
    productDescription:String,
    category:String,
    price:Number,

    image:{
       type:String,
    }
})

const ProductModel = mongoose.model ("Productdeatil",ProductStructure);
export default ProductModel;