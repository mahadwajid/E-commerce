import React from "react";
import { Nav, Dropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./../Assessts/Style.css";
import logo from '../Images/Logos/image.png';
import {FiShoppingCart} from 'react-icons/fi';
import { BiLogIn } from 'react-icons/bi';
import img from '../Images/Logos/image9.png'

function Navbar() {


  return (
    <div className="container-fluid">
      <Link to='/'>
      <img  src={img} alt="Logo"  className="logo-image"  />
      </Link>
      <Nav className="me-auto">
        <ul id="Lin-1">
          <NavLink className="navbarLink" to='/'>Home</NavLink>
          <Dropdown>
            <Dropdown.Toggle as={NavLink} className="navbarLink">
              Product
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/men'>Men</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/women'>Women</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/Jewllery'>Jewllery</Dropdown.Item>
              {/* Add more category items as needed */}
            </Dropdown.Menu>
          </Dropdown>
          <NavLink className="navbarLink" to='/contact'>Contact</NavLink>
          <NavLink className="navbarLink" to='/about'>About</NavLink>
        </ul>
      </Nav>


      <div  className="navbarLink">
        <Link to='/Login'>
          <button >   <BiLogIn /> Login</button>
        </Link>

        </div>

        <div>
        <Link to='/cart'>
          <FiShoppingCart  size={30} />
        </Link>
      </div>

      <div>
      <NavLink className="navbarLink" to='/Admin'>ADMIN</NavLink>
      </div>




    </div>
  );
}

export default Navbar;
