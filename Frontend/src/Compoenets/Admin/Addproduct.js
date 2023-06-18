import React from "react";
import Admin from "./Admin";
import  { useState } from 'react';
import "../../Assessts/Addproduct.css";
import { adddetails } from "../../Service/Api";


function Addproduct(){
  const[details , setdetails]=useState({
    productName:" ",
    productDescription:" ",
    category:" ",
    price:" ",
    image:null
  })

   const {productName , productDescription ,category, price , image}=details;

   const handleChange =(event) =>{

    setdetails({...details , [event.target.name]: event.target.value});

   };

   const handleImageChange =(event)=>{
    setdetails({...details , [event.target.name]: event.target.files[0] });

   }

   const handleSubmit = async(event)=>{
    event.preventDefault();

    try{
      const formdata= new FormData();
      formdata.append('productName', productName);
      formdata.append('productDescription',productDescription);
      formdata.append('category',category);
      formdata.append('price', price);
      formdata.append('image', image);

      await adddetails(formdata);
      alert("data is saved");
    }
    catch(error){
      console.log("Error")
    }

   }


 
    return(
       
     <div>
        <Admin />
        <div id="Mn01" >
      <h2>Add Product</h2>
      <form >
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            name="productName"
            type="text"
            id="productName"
            value={productName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            name="productDescription"
            id="productDescription"
            value={productDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            name="category"
            type="text"
            id="category"
            value={category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            name="price"
            type="number"
            id="price"
            value={price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="images">Images:</label>
          <input
            name="image"
            type="file"
            id="images"
            onChange={handleImageChange}
            multiple
            required
          />
        </div>
        <button className="btnadd" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
        
     </div>

    );
}
export default Addproduct;