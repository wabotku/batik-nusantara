"use client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Base from "./components/layout/base";
import Index from "./components/pages";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

// import About from "./components/pages/about";
// import Product from "./components/pages/product";
// import Login from "./components/pages/login";

export default function Home() {
  return (
    <>
      <Base></Base>
      <Analytics />
    </>
  );
}
