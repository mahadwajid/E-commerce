import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { createContext, useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import { getDataByCategory } from "../../Service/Api";

const JewlleryContext=createContext();

function Jewllery(){

    const{handleAddToCart}=useContext(Context);

    const[Jewllerydata,setJewllerydata]=useState([]);

    useEffect(() =>{
     getJewllerydetails();
    },[]);

    const getJewllerydetails = async () =>{
      const Jewllerydetails= await getDataByCategory({category:'Jewllery'});
      setJewllerydata(Jewllerydetails.data);

    }



    // const Jewllery = Jewllerydata.filter(item => item.id >=17 && item.id <= 24)


    return(
        <div>
            <JewlleryContext.Provider value={Jewllery}>
            <Container style={{justifyContent:'center', justifyContent:'space-evenly'}}> 
            <Row xs={1} md={4} >
            {Jewllerydata.map((data) => (
           <Col>
          <Card className="hover-card" style={{ width: '80%', margin: '40px' }}>
            <Link to={`/Checkout/${data._id}`}>
           
            <Card.Img variant="top"  src={`https://mydata-6mhq.onrender.com/${data.image}`}  />

            </Link>
            <Card.Body>
              <Card.Title>{data.productName}</Card.Title>
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