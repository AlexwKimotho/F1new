import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Footer = () => {
  return (
  
      <div className="footer">
        <div className="row">
          <div className="footer-logo col-xl-4 mb-4">
            <img src="https://i.ibb.co/HqhCNSv/Logo.png" alt="Logo" />
          </div>

          <div className="footer-text col-xl-4 mb-4">
      <h5>Formula 1</h5>
      <ul>
        <li><a href="#">News</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Teams and Drivers</a></li>
        <li><a href="#">Calendar</a></li>
      </ul>
    </div>
          <div className="footer-text col-xl-4" >
            <h4>Social Media</h4>
            <ul >
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
           
        </div>
      </div>
  );
};

export default Footer;
