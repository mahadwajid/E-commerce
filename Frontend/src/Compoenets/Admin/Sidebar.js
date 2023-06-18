import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Sidebar(props){
    return (
        <>
        <Offcanvas show={props.show} onHide={props.close}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* <button onClick={handleAddProduct} >Add Products </button> */}
            <Link to="/Admin/Addproduct">Add Product</Link>
            <div>
            <Link to="/Admin/Showproduct">Show Product</Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );

};
export default Sidebar;