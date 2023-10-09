import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Landing from "./landingpage";
import Standings from "./standings";
import NewsCard from "./newsCard";
import Quote from "./Quote"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Standings />
      <NewsCard />
      <Quote/>
      <Footer />
      {/* Other components/content goes here */}
    </div>
  );
};

export default Home;
