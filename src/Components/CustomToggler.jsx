import React, { useState } from 'react';
import './CustomToggler.css'

const CustomToggler = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-toggler" onClick={toggleMenu}>
      <div className={`bar bar-top ${isOpen ? 'open' : ''}`}></div>
      <div className={`bar bar-middle ${isOpen ? 'open' : ''}`}></div>
      <div className={`bar bar-bottom ${isOpen ? 'open' : ''}`}></div>
    </div>
  );
};

export default CustomToggler;
