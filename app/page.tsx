"use client"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Image from 'next/image'
// import layoutPage from './components/layout/layoutPage'
import Navbar from './components/layout/navbar';
import About from './components/pages/about';
import Main from './components/pages/main';
export default function Home() {
  return (
    <div>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
        <footer />
    </div>
  )
}
