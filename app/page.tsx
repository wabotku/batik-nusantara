"use client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Base from "./components/layout/base";
import Index from "./components/pages";
// import About from "./components/pages/about";
// import Product from "./components/pages/product";
// import Login from "./components/pages/login";

export default function Home() {
  return (
    <Router>
      <Base>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Base>
    </Router>
  );
}
