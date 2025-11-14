import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h3>StayHealthy <i style={{color:'#2190FF'}} className="fa fa-user-md"></i><span>.</span></h3>
          <br/>
          <div className="social__icon">
            <i style={{color:'#2190FF'}} className="fa fa-facebook-official"></i>
            <i style={{color:'#2190FF'}} className="fa fa-instagram"></i>
            <i style={{color:'#2190FF'}} className="fa fa-youtube-play"></i>
            <i style={{color:'#2190FF'}} className="fa  fa-twitter"></i>
          </div>
        </div>
        <div class="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div class="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div class="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2023. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer