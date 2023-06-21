import Admin from "./Admin";
import Table from 'react-bootstrap/Table';
import { getdetails } from "../../Service/Api";
import { useEffect, useState } from "react";



function Showproduct(){
    const [Productdetails , setProductdetails]=useState([]);

    useEffect(() =>{
        getProductdetails();
    }, []);

    const getProductdetails = async () =>{
        const result= await getdetails();
        setProductdetails(result.data);
    }

    return(
        <div>
            <Admin />

         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Product Desciprion</th>
          <th>Price </th>
        </tr>
      </thead>
      <tbody>
        {Productdetails.map((details , index)=>(
            <tr>
             <img style={{width:"4rem", height:"5rem"}} src={`https://mydata-6mhq.onrender.com/${details.image}`} alt="" />
             <td>{details.productName}</td>
             <td>{details.productDescription}</td> 
             <td>{details.price}</td>  

            </tr>
        ))}
       
      </tbody>
    </Table>

           
        </div>

    );
}
export default Showproduct;