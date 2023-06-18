import axios from 'axios';

const url="http://localhost:5000";

export const addSignup =  async(userdata) => {
  return await  axios.post(`${url}/Signup`,userdata);
}




export const getSignup = async (details) =>{
  return await axios.get (`${url}/Login`, details)
}

export const adddetails = async (formdata)=>{
  return await axios.post(`${url}/Admin/Addproduct`,formdata);
}

export const getdetails = async () =>{
  return await axios.get(`${url}/Admin/Showproduct`);
}

export const getMenData = async () =>{
  return await axios.get(`${url}/men`);
}
