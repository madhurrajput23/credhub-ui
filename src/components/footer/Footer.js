import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer_main'>
      <div className='footer_logo_box'>
        <div className='footer_logo'>
          <img src='./images/footer_logo.svg' alt='logo'/>
        </div>
        <div className='footer_logo_title'>Credhub</div>
      </div>
      <div className='footer_content'>
        <div className='footer_content_left'>
          <div className='footer_content_left_list'>
            <div>Company</div>
            <div>About us</div>
            <div>News and Media</div>
            <div>Contact us</div>
          </div>

          <div className='footer_content_left_list'>
            <div>Link</div>
            <div>Terms of use</div>
            <div>Privacy Policy</div>
            <div>Site Map</div>
          </div>

          <div className='footer_content_left_list'>
            <div>Our Solution</div>
            <div>Commercial</div>
            <div>Non-Commercial</div>
            <div>Featured Solution</div>
          </div>
        </div>
        <div className='footer_content_right'></div>
        
      </div>
      <div className='footer_copyright'>Copyright © Credhub All Rights Reserved.</div>
    </div>
  )
}

export default Footer