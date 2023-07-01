import Admin from "./Admin";
import Table from 'react-bootstrap/Table';
import { deleteproductById, getdetails } from "../../Service/Api";
import { useEffect, useState } from "react";



function Showproduct(){
    const [Productdetails , setProductdetails]=useState([]);

    useEffect(() =>{
        getProductdetails();
        deleteProduct();
    }, []);

    const getProductdetails = async () =>{
        const result= await getdetails();
        setProductdetails(result.data);
    }

    const deleteProduct =async (id) =>{
      try {
        await deleteproductById(id);
        const updatedProducts = Productdetails.filter((product) => product._id !== id);
        setProductdetails(updatedProducts);
      } catch (error) {
        console.log('Error deleting product:', error);
      }
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
             <img style={{width:"4rem", height:"5rem"}} src={`https://mydata-rumz.onrender.com/${details.image}`} alt="" />
             <td>{details.productName}</td>
             <td>{details.productDescription}</td> 
             <td>{details.price}</td>  
             <td>
              <button onClick={() => deleteProduct(details._id)} > Delete </button>
             </td>

            </tr>
        ))}
       
      </tbody>
    </Table>

           
        </div>

    );
}
export default Showproduct;