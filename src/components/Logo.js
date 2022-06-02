import React from "react";
import '../App.css';
import logo from '../img/logo.png';

function Logo () {
  return (
    <div className='logo-contenedor'>
      <img 
        src={logo}
        className='logo'
        alt='Logo' />
    </div>
  )
};

export default Logo;