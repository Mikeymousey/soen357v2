import React from 'react';
import medisafeLogo from '../../assets/medisafeLogo.png';
import './footer.css';

const Footer = () => (
  <div className="medisafe__footer section__padding">
    <div className="medisafe__footer-heading">
      <h1 className="gradient__text">Unlock all the features</h1>
    </div>

    <div className="medisafe__footer-btn">
      <p>Subscription</p>
    </div>

    <div className="medisafe__footer-links">
      <div className="medisafe__footer-links_logo">
        <img src={medisafeLogo} alt="medisafe_logo" />
        <p>Medisafe inc., <br /> All Rights Reserved</p>
      </div>
      <div className="medisafe__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="medisafe__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    </div>

    <div className="medisafe__footer-copyright">
      <p>@2022 Medisafe. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;