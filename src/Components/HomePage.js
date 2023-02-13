import React from "react";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Highlights from "./Highlights";
import NavBar from "./NavBar";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div className="HomePage">
      <NavBar />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
