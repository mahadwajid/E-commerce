import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Compoenets/Home";
import About from "./Compoenets/About";
import Contact from "./Compoenets/Contact";
import Men from "./Compoenets/Men";
import Navbar from "./Compoenets/Navbar";
import { Routes, Route,useLocation } from 'react-router-dom';
// import Footer from "./Compoenets/Footer";
import Checkout from "./Compoenets/Checkout";
// import { createContext } from "react";
import Women from "./Compoenets/Women/Women";
import Data from "./Common/Data/Data";
import Jewllery from "./Compoenets/Jewllery/Jewllery";
import Payment from "./Compoenets/Payment/Payment";
import Login from "./Compoenets/Login/Login";
import Signup from "./Compoenets/Signup/Signup";
import Cart from "./Compoenets/Cart/Cart";
import Admin from "./Compoenets/Admin/Admin";
import Addproduct from "./Compoenets/Admin/Addproduct";
import Showproduct from "./Compoenets/Admin/Showproduct";


function App() {

  const [images ,setImages]= useState(Data);  

  const location = useLocation();


  // const deleteImage = (id) => {
  //   const updatedImages = images.filter((image) => image.id !== id);
  //   setImages(updatedImages);
  // };

  const showNavbar = !location.pathname.includes("/Admin");


 

  return (
    <div>
       {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/Jewllery" element={<Jewllery />} />
          <Route path="/men" element={<Men />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Checkout/:productId" element={<Checkout images={images} />} />
          <Route path="/Cart" element={<Cart />}  />
          <Route path="/Login" element={<Login />}  />
          <Route path="/Signup" element={<Signup />}  />
          <Route path="/Payment" element={<Payment />}  />
          <Route path="/Admin" element={<Admin />}  />
          <Route path="/Admin/Addproduct"  element={<Addproduct />} />
          <Route path="/Admin/Showproduct"  element={<Showproduct />} />
        </Routes>


    </div>
  );
}

export default App;

