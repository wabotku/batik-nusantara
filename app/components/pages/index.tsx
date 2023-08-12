import React from "react";
import {
  About,
  Services,
  Contact,
  Product,
  Purposes,
  Prices,
} from "../content";

interface HomeProps {
  langMode: boolean;
}

const Home: React.FC<HomeProps> = ({ langMode }) => {
  return (
    <div className="-mb-16">
      <About langMode={langMode} />
      <Purposes langMode={langMode}/>
      <Product langMode={langMode}/>
      <Services langMode={langMode}/>
      <Prices langMode={langMode}/>
      <Contact langMode={langMode}/>
    </div>
  );
};

export default Home;
