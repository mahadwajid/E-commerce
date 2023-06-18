import Data from "../../Common/Data/Data";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { createContext, useContext, useState } from "react";
import { Context } from "../Context";


const JewlleryContext=createContext();

function Jewllery(){

    const{handleAddToCart}=useContext(Context);

    const[Jewllerydata,setJewllerydata]=useState(Data);
    const Jewllery = Jewllerydata.filter(item => item.id >=17 && item.id <= 24)


    return(
        <div>
            <JewlleryContext.Provider value={Jewllery}>
            <Container style={{justifyContent:'center', justifyContent:'space-evenly'}}> 
            <Row xs={1} md={4} >
            {Jewllery.map((data) => (
           <Col>
          <Card style={{ width: '80%', margin: '40px' }}>
            <Card.Img variant="top" src={data.imageUrl} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.price}</Card.Text>
              <Card.Text>{data.type}</Card.Text>

              <button className="box" onClick={() => handleAddToCart(data, 1)}>
                    Add to Cart
                  </button>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </JewlleryContext.Provider>

        </div>

    );
}
export default Jewllery;