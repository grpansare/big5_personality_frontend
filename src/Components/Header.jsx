import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {motion} from 'framer-motion'

// Import React Icons
import { FaArrowRight, FaBrain, FaEnvelope, FaHome, FaInfoCircle, FaSignInAlt, FaSmile, FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-gray-700">
        <Container>
       

<Navbar.Brand href="#home" className="font-semibold text-white font-mono d-flex align-items-center">
  <FaBrain className="me-2" size={28} /> {/* Add an icon with spacing */}
  Big Five Personality
</Navbar.Brand>
<Navbar.Toggle 
  aria-controls="responsive-navbar-nav" 
  style={{ color: 'white', borderColor: 'white' }} 
/>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <motion.div
      whileHover={{
        scale: 1.1, // Slightly enlarge on hover
       background: "linear-gradient(90deg, #43cea2, #185a9d)",
        color: "#fff", // Change text color to black
        transition: { duration: 0.3 }, // Smooth transition
      }}
      whileTap={{
        scale: 0.95, // Slight shrink on tap
        transition: { duration: 0.1 },
      }}
      className=" rounded" // Padding and rounded corners for background
    >
 <NavLink
    to="/"
    className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
    style={{
     // Light transparent background
      textDecoration: "none",
    }}
  >
        <FaHome className="me-2" /> Home
      </NavLink>
    </motion.div>
                 <motion.div
      whileHover={{
        scale: 1.1, // Slightly enlarge on hover
       background: "linear-gradient(90deg, #43cea2, #185a9d)",
        color: "#fff", // Change text color to black
        transition: { duration: 0.3 }, // Smooth transition
      }}
      whileTap={{
        scale: 0.95, // Slight shrink on tap
        transition: { duration: 0.1 },
      }}
      className=" rounded" // Padding and rounded corners for background
    >
 <NavLink
    to="/about"
    className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
    style={{
     // Light transparent background
      textDecoration: "none",
    }}
  >
                <FaInfoCircle className="me-2" /> About the test
              </NavLink>
              </motion.div>
              
    <motion.div
      whileHover={{
        scale: 1.1, // Slightly enlarge on hover
       background: "linear-gradient(90deg, #43cea2, #185a9d)",
        color: "#fff", // Change text color to black
        transition: { duration: 0.3 }, // Smooth transition
      }}
      whileTap={{
        scale: 0.95, // Slight shrink on tap
        transition: { duration: 0.1 },
      }}
      className=" rounded" // Padding and rounded corners for background
    >
     <NavLink
                  to="/"
                    className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
          style={{
     // Light transparent background
      textDecoration: "none",
    }}
  >

    
                Take  the test
                <FaArrowRight className="ms-2" />
              </NavLink>
              </motion.div>

               <motion.div
      whileHover={{
        scale: 1.1, // Slightly enlarge on hover
       background: "linear-gradient(90deg, #43cea2, #185a9d)",
        color: "#fff", // Change text color to black
        transition: { duration: 0.3 }, // Smooth transition
      }}
      whileTap={{
        scale: 0.95, // Slight shrink on tap
        transition: { duration: 0.1 },
      }}
      className=" rounded" // Padding and rounded corners for background
    >
 <NavLink
    to="/about"
    className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
    style={{
     // Light transparent background
      textDecoration: "none",
    }}
  >
                <FaSignInAlt className="me-2" /> Login
              </NavLink>
              </motion.div>
               <motion.div
      whileHover={{
        scale: 1.1, // Slightly enlarge on hover
       background: "linear-gradient(90deg, #43cea2, #185a9d)",
        color: "#fff", // Change text color to black
        transition: { duration: 0.3 }, // Smooth transition
      }}
      whileTap={{
        scale: 0.95, // Slight shrink on tap
        transition: { duration: 0.1 },
      }}
      className=" rounded" // Padding and rounded corners for background
    >
     <NavLink
    to="/contact"
    className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
    style={{
     // Light transparent background
      textDecoration: "none",
    }}
  >
    <FaEnvelope className="me-2" />
    Contact Us
  </NavLink>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
