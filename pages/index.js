import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Landing from "./landingpage"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing/>
      <Footer />
      {/* Other components/content goes here */}
    </div>
  );
};

export default Home;
