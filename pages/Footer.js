import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '30px 0',
  };

  const sectionStyle = {
    marginBottom: '10px'
  };

  const sectionTitleStyle = {
    fontSize: '18px',
    marginBottom: '10px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '10px'
  };

  const socialIconStyle = {
    fontSize: '24px',
    color: '#F7921E',
    marginRight: '10px'
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4" style={sectionStyle}>
            <img src="https://i.ibb.co/HqhCNSv/Logo.png" alt="Logo" />
          </div>

          <div className="col-md-4 mb-4" style={sectionStyle}>
            <h4 style={sectionTitleStyle}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={linkStyle}>Home</a></li>
              <li><a href="#" style={linkStyle}>Services</a></li>
              <li><a href="#" style={linkStyle}>Portfolio</a></li>
              <li><a href="#" style={linkStyle}>Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4" style={sectionStyle}>
            <h4 style={sectionTitleStyle}>Follow Us</h4>
            <a href="#" style={socialIconStyle}><i className="fab fa-facebook"></i></a>
            <a href="#" style={socialIconStyle}><i className="fab fa-twitter"></i></a>
            <a href="#" style={socialIconStyle}><i className="fab fa-instagram"></i></a>
            <a href="#" style={socialIconStyle}><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
