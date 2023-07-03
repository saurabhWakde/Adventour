import '../navbar/Navbar.css';
import React, { useState } from 'react';
import logo from '../navbar/logo/logo.png';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleaClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <navbar id="navbar">
      <logo id="logo">
        <img src={logo} alt="Logo" />
        <h2>Adventour.</h2>
      </logo>
      <navbaritems id="navitems">
        <a
          style={{ color: activeIndex === 0 ? 'white' : 'rgb(61,71,79)' }}
          className={activeIndex === 0 ? 'underline' : ''}
          onClick={() => handleaClick(0)}
        >
          <span>Discover</span>
        </a>
        <a
          style={{ color: activeIndex === 1 ? 'white' : 'rgb(61,71,79)' }}
          className={activeIndex === 1 ? 'underline' : ''}
          onClick={() => handleaClick(1)}
        >
          <span>Services</span>
        </a>
        <a
          style={{ color: activeIndex === 2 ? 'white' : 'rgb(61,71,79)' }}
          className={activeIndex === 2 ? 'underline' : ''}
          onClick={() => handleaClick(2)}
        >
          <span>Categorie</span>
        </a>
        <a
          style={{ color: activeIndex === 3 ? 'white' : 'rgb(61,71,79)' }}
          className={activeIndex === 3 ? 'underline' : ''}
          onClick={() => handleaClick(3)}
        >
          <span>About US</span>
        </a>
        <button>Get Started</button>
      </navbaritems>
    </navbar>
  );
};

export default Navbar;
