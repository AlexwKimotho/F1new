import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#4a2c2a',
    padding: '10px 20px'
  };

  const logoStyle = {
    height: '50px', 
    marginRight: '10px'
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#4a2c2a',
    cursor: 'pointer',
    margin: '0 10px',
    outline: 'none'
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <img src="https://i.ibb.co/HqhCNSv/Logo.png"/>
      </div>
      <div>
        <button style={buttonStyle}>Home</button>
        <button style={buttonStyle}>News</button>
        <button style={buttonStyle}>Drivers</button>
        <button style={buttonStyle}>Teams</button>
        <button style={buttonStyle}>Photos</button>
        <button style={buttonStyle}>Results</button>
        <button style={buttonStyle}>Calendar</button>
        <button style={buttonStyle}>Test Sessions</button>
        <button style={buttonStyle}>Search</button>
        <button style={buttonStyle}>Tickets</button>
      </div>
    </nav>
  );
}

export default Navbar;
