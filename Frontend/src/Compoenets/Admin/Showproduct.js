import Admin from "./Admin";
import Table from 'react-bootstrap/Table';
import { deleteproductById, getdetails, updatedProduct } from "../../Service/Api";
import { useEffect, useState } from "react";

function Showproduct() {
  const [Productdetails, setProductdetails] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editProductName, setEditProductName] = useState('');
  const [editProductDescription, setEditProductDescription] = useState('');
  const [editPrice, setEditPrice] = useState(0);

  useEffect(() => {
    getProductdetails();
  }, []);

  const getProductdetails = async () => {
    try {
      const result = await getdetails();
      setProductdetails(result.data);
    } catch (error) {
      console.log('Error retrieving product details:', error);
    }
  }

  const deleteProduct = async (id) => {
    try {
      await deleteproductById(id);
      const updatedProducts = Productdetails.filter((product) => product._id !== id);
      setProductdetails(updatedProducts);
    } catch (error) {
      console.log('Error deleting product:', error);
    }
  }

  const handleEditClick = (id) => {
    const product = Productdetails.find((details) => details._id === id);
    if (product) {
      setEditProductId(id);
      setEditProductName(product.productName);
      setEditProductDescription(product.productDescription);
      setEditPrice(product.price);
    }
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'editProductName':
        setEditProductName(value);
        break;
      case 'editProductDescription':
        setEditProductDescription(value);
        break;
      case 'editPrice':
        setEditPrice(value);
        break;
      default:
        break;
    }
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const update = {
        productName: editProductName,
        productDescription: editProductDescription,
        price: editPrice
      };
      const response = await updatedProduct(editProductId, update);
      const updatedProducts = Productdetails.map((product) =>
        product._id === editProductId ? response.data : product
      );
      setProductdetails(updatedProducts);
      setEditProductId(null);
      setEditProductName('');
      setEditProductDescription('');
      setEditPrice(0);
    } catch (error) {
      console.log('Error updating product:', error);
    }
  };
  

  return (
    <div>
      <Admin />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product Desciprion</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Productdetails.map((details, index) => (
            <tr key={index}>
              <img style={{ width: "4rem", height: "5rem" }} src={`https://mydata-rumz.onrender.com/${details.image}`} alt="" />
              <td>{details.productName}</td>
              <td>{details.productDescription}</td>
              <td>{details.price}</td>
              <td>
                <button onClick={() => deleteProduct(details._id)}>Delete</button>
                <button onClick={() => handleEditClick(details._id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {editProductId && (
        <form onSubmit={handleEditFormSubmit}>
          <label>
            Product Name:
            <input
              type="text"
              name="editProductName"
              value={editProductName}
              onChange={handleEditInputChange}
            />
          </label>
          <br />
          <label>
            Product Description:
            <input
              type="text"
              name="editProductDescription"
              value={editProductDescription}
              onChange={handleEditInputChange}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              name="editPrice"
              value={editPrice}
              onChange={handleEditInputChange}
            />
          </label>
          <br />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}

export default Showproduct;
