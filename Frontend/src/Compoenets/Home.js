import React from "react";
import img from '../Images/Logos/image10.png'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import '../Assessts/Home.css';


function Home() {

    const images = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1555529669-2269763671c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            title: 'MENS WEAR',
        },

        {
            imageUrl: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
            title: 'WOMENS',
        },

        {
            imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            title: 'JEWELLERY',
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1517278862943-719c3d4315b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', title: 'FACE PRODCUTS',
        },

    ];



    return (
        <div>


            <div className="front-page">
                <div className="right-section">
                    <img src={img} alt="Your Image" />
                    <div className="text-overlay">
                        <h2 className="split-text">
                            <span>DISCOVER</span>
                            <span>YOUR PERFECT</span>
                            <span>PURCHASE</span>
                        </h2>

                        <button className="btt"> EXPLORE MORE
                            <span></span>
                        </button>



                    </div>
                </div>
            </div>


            <div>
                <h1 style={{ textAlign: "center", position: 'relative', top: '4vh' }}>
                    PRODUCTS CATALOG
                </h1>
            </div>


            <div>
                <Container className="cont">
                    <Row xs={1} md={4}>
                        {images.map((image, idx) => (
                            <Col key={idx}>
                                {image.title === "MENS WEAR" ? (
                                    <Link to="/men" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Card className="hover-card" style={{ width: '80%', margin: '40px' }}>
                                            <Card.Img variant="top" src={image.imageUrl} style={{ height: '300px' }} />
                                            <Card.Body>
                                                <Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }} >{image.title}</Card.Title>
                                                <Card.Text>{image.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                ) : image.title === "WOMENS" ?  (
                                    
                                    <Link to='/Women' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Card className="hover-card" style={{ width: '80%', margin: '40px' }}>
                                        <Card.Img variant="top" src={image.imageUrl} style={{ height: '300px' }} />
                                        <Card.Body>
                                            <Card.Title>{image.title}</Card.Title>
                                            <Card.Text>{image.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                ):(
                                    <Link to='/Jewllery' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Card className="hover-card" style={{ width: '80%', margin: '40px' }}>
                                        <Card.Img variant="top" src={image.imageUrl} style={{ height: '300px' }} />
                                        <Card.Body>
                                            <Card.Title>{image.title}</Card.Title>
                                            <Card.Text>{image.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                )
                                
                                
                                
                                }
                            </Col>
                        ))}
                    </Row>
                </Container>



            </div>

  


            <div className="letter">

            <div className="subscribe">
                <h2 className="subscribe__title">Let's keep in touch</h2>
                <p className="subscribe__copy">Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
                <div className="form">
                    <input type="email" className="form__email" placeholder="Enter your email address" />
                    <button className="form__button">Send</button>
                </div>
                <div className="notice">
                    <input type="checkbox" />
                    <span className="notice__copy">I agree to my email address being stored and uses to recieve monthly newsletter.</span>
                </div>
            </div>



            </div>




            <Footer />

        </div>
    )
}
export default Home;