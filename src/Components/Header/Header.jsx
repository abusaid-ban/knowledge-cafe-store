import React from 'react';
import './Header.css';
import image from '../../Images/client.png'

const Header = () => {
    return (
        <nav className='header'>
      <h2 >Knowledge Store</h2>
      <div>
     <img src={image} alt="" />
      </div>
     
           
        </nav>
    );
};

export default Header;