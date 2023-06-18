import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import {GrMenu} from 'react-icons/gr';
import Button from 'react-bootstrap/Button';
import Sidebar from './Sidebar';
import Addproduct from './Addproduct';
function Adminnavbar(){



  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(


      
         <div>
              <Navbar bg="dark" variant="dark">
        <Container>
        <Button  style={{width:"3rem" ,backgroundColor:"transparent", border:"none"}}  onClick={handleShow}>
          < GrMenu style={{border:'1px solid white' , backgroundColor:'white', marginLeft:'-9rem'}}  size={30} />
          </Button>
          <Navbar.Brand href="#home">MK COLLECTION</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#DashBoard">DashBoard</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <Nav.Link href="#Status">Status</Nav.Link>
          </Nav>
          {show && (
              <Sidebar show = {show} close= {handleClose} />
          )}
        </Container>
      </Navbar>
         </div>

    );

}
export default Adminnavbar;