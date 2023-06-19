import axios from 'axios';

const url="http://localhost:5000";

export const addSignup =  async(userdata) => {
  return await  axios.post(`${url}/Signup`,userdata);
}


export const getSignup = async (email , password) =>{
  return await axios.get (`${url}/Login`, email , password)
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

