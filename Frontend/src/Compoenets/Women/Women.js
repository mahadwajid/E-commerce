import React, { createContext, useState } from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useContext } from "react";
import Data from "../../Common/Data/Data";
import { Context } from "../Context";


const WomentContext = createContext();
function Women(){
    const{handleAddToCart}=useContext(Context);
    const [womenData, setWomenData] = useState (Data);
    const women = womenData.filter(item => item.id >=13 && item.id <= 16)
    return(
        <div >

            <WomentContext.Provider value={women}>
            <Container style={{justifyContent:'center', justifyContent:'space-evenly'}}> 
            <Row xs={1} md={4} >
            {women.map((data) => (
           <Col>
          <Card style={{ width: '80%', margin: '40px' }}>
            <Card.Img variant="top" src={data.imageUrl} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
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
