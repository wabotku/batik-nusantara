import React from "react";
import {About, Advantages, Contact, Product, Purposes, Testimoni} from "../content";

const Home: React.FC = () => {
  return (
    <div className="-mb-16">
      <About />
      <Purposes />
      <Product />
      <Advantages />
      <Testimoni />
      <Contact />
    </div>
  );
};

export default Home;
