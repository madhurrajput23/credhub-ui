import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar_main'>
       <div className='navbar_logo'> 
       <img src='./images/Navbar-Logo.svg' alt='logo' />
       </div> 
       <div className='navbar_menu'>
        <div>HOME</div>
        <div>LOAN</div>
        <div>PRODUCT</div>
        <div>PARTNER WITH US</div>
        <div>LOCATE US</div>
       </div>
       <div className='navbar_buttons'>
        <button className='primary_outline_button'>Login</button>
        <button className='primary_button'>Request Demo</button>
       </div>
    
    </div>
  )
}

export default Navbar