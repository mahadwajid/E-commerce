import axios from 'axios';

const url="https://mydata-6mhq.onrender.com";

export const addSignup =  async(userdata) => {
   console.log(userdata);
  return await  axios.post(`${url}/Signup`,userdata);
}


export const getSignup = async (details) =>{
  return await axios.post (`${url}/Login`, details)
}

export const adddetails = async (formdata)=>{
  return await axios.post(`${url}/Admin/Addproduct`,formdata);
}

export const getdetails = async () =>{
  return await axios.get(`${url}/Admin/Showproduct`);
}

export const getDataByCategory = async (category) =>{
  return await axios.post(`${url}/Men/category`, category);
}

export const  getproductById = async (productId) =>{
  return await axios.get(`${url}/Checkout/${productId}`);
}

