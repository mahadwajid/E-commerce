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
        console.log("Product added successfully");

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

export const getProductByCategory = async (req, res) => {
    const {category} = req.body;
    console.log(category)
    try {
      const Menproduct = await ProductModel.find();
      const filterProduct = Menproduct.filter((item) => item.category === category)
        console.log(filterProduct);
      res.json(filterProduct);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  export const getProductById = async (req , res) =>{
    try{
        const prId = req.params.productId;
        const product = await ProductModel.findById(prId);
        console.log(product);
        if(!product){
            return res.status(404).json({message:'Product Not found'});
        }
        res.json(product);
    }catch(error){
        console.log('Error retriving product details:',error );
        res.status(500).json({message:'Internal server error'});
    }
  };

  export const deleteProduct = async (req , res) => {
    try{
        const{productId} = req.params;
        await ProductModel.findByIdAndDelete(productId);
        res.json({ message: 'Delete Successfully' });
    }catch (error) {
        res.status(500).json({error:'Internal Server Errror'});
    }
  }