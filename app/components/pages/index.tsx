import React from "react";
import {About, Product, Purposes} from "../content";

const Home: React.FC = () => {
  return (
    <div className="-mb-16" style={{ height: "calc(100vh - 3rem)" }}>
      <About />
      <Purposes />
      <Product />
      <div>Advantages</div>
      <div>Testimonial</div>
      <div>Contact</div>
    </div>
  );
};

export default Home;
