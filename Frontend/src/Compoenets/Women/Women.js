import React, { createContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useContext } from "react";
import Data from "../../Common/Data/Data";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import { getDataByCategory } from "../../Service/Api";


const WomentContext = createContext();
function Women(){
    const{handleAddToCart}=useContext(Context);
    const [womenData, setWomenData] = useState([]);

    useEffect(() => {
      getWomenDetails();
    },[])

    const getWomenDetails = async () =>
    {
      const WomenDetails = await getDataByCategory({category: 'Women'});
      setWomenData(WomenDetails.data);
    }

    
    return(
        <div >

            <WomentContext.Provider value={womenData}>
            <Container style={{justifyContent:'center', justifyContent:'space-evenly'}}> 
            <Row xs={1} md={4} >
            {womenData.map((data) => (
           <Col>
          <Card className="hover-card" style={{ width: '80%', margin: '40px' }}>
            <Link to={`/Checkout/${data._id}`}>
            <Card.Img variant="top" src= {`https://mydata-6mhq.onrender.com/${data.image} `} />
            </Link>
            <Card.Body>
              <Card.Title>{data.productName}</Card.Title>
              <Card.Text>{data.price}</Card.Text>
              <Card.Text>{data.type}</Card.Text>

              <button className="box" onClick={() => handleAddToCart(data ,1)}>
                    Add to Cart
                  </button>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </WomentContext.Provider>


        </div>

    );
}
export default Women;
