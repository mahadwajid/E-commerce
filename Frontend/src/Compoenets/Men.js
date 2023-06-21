import React, { useContext, useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../Assessts/Style.css";
// import { ProductContext } from "../App";
import Footer from "./Footer";
import { Context } from "./Context";
// import img from '../Images/Logos/image11.png';
import { getDataByCategory } from '../Service/Api';

function Men() {
  const { deleteImage, handleAddToCart, cartItems } = useContext(Context);

  const [menProductData, setMenProductData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getMenProductDetails();
  }, []);

  const getMenProductDetails = async () => {
    const menData = await getDataByCategory({category: 'Men'});
    setMenProductData(menData.data);
  };

  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center' }}>MENS</h1>
      </div>


      <Container className="cont">
        <Row xs={1} md={4}>
          {menProductData.map((image) => (
            <Col key={image._id}>
              <Card className="hover-card" style={{ width: '80%', margin: '40px' }}>
                <Link to={`/Checkout/${image._id}`}>
                  <Card.Img variant="top" src={`https://mydata-6mhq.onrender.com/${image.image}`} style={{ width: '100%', height: 'auto' }} />
                </Link>
                <Card.Body>
                  <Card.Title>{image.productName}</Card.Title>
                  <Card.Text>{image.price}</Card.Text>
                  
                  <button className="box" onClick={() => handleAddToCart(image, 1)}>
                    Add to Cart
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Men;
