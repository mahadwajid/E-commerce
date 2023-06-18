import ProductModel from "../Models/Product.js";

export const addProduct =async( req , res) =>{
    const{productName, productDescription ,category , price ,image}= req.body;
    try{
        const newProduct = new ProductModel({
            productName,
            productDescription,
            category,
            price,
            image: req.file.path,
        });

        const savedProduct = await newProduct.save();

        console.log(savedProduct);

        res.json({Response:true , message:'Product Added Successfully '});
        console.loq("Product added successfully");

    }
    catch(error){
        console.error(error);
    }
}

export const getProduct = async (req , res) =>{
    try{
        const productData = await ProductModel.find();
        res.json(productData);
        console.log(productData);
    }catch(error){
        console.log("Not found any data");
    }
}

export const getMenCategory = async (req, res) => {
    try {
      const Menproduct = await db.ProductModel.find({category: 'Men'});
  
      res.status(200).json(Menproduct);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  