import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="card">
        <div className="card-image">
           <p style={{ fontWeight: 'bold', margin: '10px'}}> Featured</p>
          <p className="card-text"> <br/>Audi torn on Engine Deal for Red Bull Racing</p>
         
        </div>
      </div>

      <div className="card-2 update-card">
        <div className="card2-title">
          <h2>Latest Updates</h2>
          
        </div>
      </div>
    </div>
  

      <Footer />
      {/* Other components/content goes here */}
    </div>
  );
};

export default Home;
