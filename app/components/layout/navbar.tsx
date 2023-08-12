// Navbar.tsx
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
// import { Link } from 'react-router-dom';
import logo from "/public/image/banus-trans-white.png";
import Image from "next/image";
import styles from "../styles";
import ScrollButton from "../parts/ScrollButton";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  langMode: boolean;
  toggleLangMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, langMode, toggleLangMode }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null); // Explicit type annotation

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setMobileMenuOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`${
        scrolling || isMobileMenuOpen ? "bg-gray-800" : ""
      } hover:bg-gray-800 navbar z-10 fixed w-[80vw] rounded-lg items-center justify-center left-1/2 transform -translate-x-1/2 translate-y-4 md:translate-y-1/4 transition-all duration-500`}
      ref={navbarRef}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image className="h-12 w-28" src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <ScrollButton
                targetId="home"
                offset={0}
                label="Home"
                className={`${styles.button.navbar}`}
              />
              <ScrollButton
                targetId="about"
                offset={-105}
                label="About"
                className={`${styles.button.navbar}`}
              />
              <ScrollButton
                targetId="purposes"
                offset={-105}
                label="Purposes"
                className={`${styles.button.navbar}`}
              />
              <ScrollButton
                targetId="product"
                offset={-105}
                label="Product"
                className={`${styles.button.navbar}`}
              />
              <ScrollButton
                targetId="services"
                offset={-50}
                label="Services"
                className={`${styles.button.navbar}`}
              />
              <ScrollButton
                targetId="prices"
                offset={-50}
                label="Prices"
                className={`${styles.button.navbar}`}
              />
              <ScrollButton
                targetId="contact"
                offset={-50}
                label="Contact Us"
                className={`${styles.button.navbar}`}
              />
              {/* <div>
                <button
                  className={`bg-gray-200 dark:bg-gray-700 rounded-full p-2 focus:outline-none ${
                    darkMode ? "translate-x-0 bg-indigo-500" : "translate-x-0"
                  }`}
                  onClick={toggleDarkMode}
                  aria-label="Toggle Dark Mode"
                >
                  <div
                    className={`w-4 h-4 rounded-full transform transition-transform ${
                      darkMode
                        ? "translate-x-0 bg-white"
                        : "translate-x-0 bg-indigo-500"
                    }`}
                  />
                </button>
              </div> */}
              <div>
                <button
                  className={`bg-gray-200 dark:bg-gray-700 rounded-full p-2 focus:outline-none ${
                    langMode ? "translate-x-0 bg-indigo-500" : "translate-x-0"
                  }`}
                  onClick={toggleLangMode}
                  aria-label="Toggle Dark Mode"
                >
                  <div
                    className={`w-4 h-4 rounded-full transform transition-transform ${
                      langMode
                        ? "translate-x-0 bg-white"
                        : "translate-x-0 bg-indigo-500"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="btnToggle text-white-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <ScrollButton
                targetId="home"
                offset={0}
                label="Home"
                className={`${styles.button.navbarHidden}`}
              />
              <ScrollButton
                targetId="about"
                offset={-105}
                label="About"
                className={`${styles.button.navbarHidden}`}
              />
              <ScrollButton
                targetId="purposes"
                offset={-105}
                label="Purposes"
                className={`${styles.button.navbarHidden}`}
              />
              <ScrollButton
                targetId="product"
                offset={-105}
                label="Product"
                className={`${styles.button.navbarHidden}`}
              />
              <ScrollButton
                targetId="services"
                offset={-105}
                label="Services"
                className={`${styles.button.navbarHidden}`}
              />
              <ScrollButton
                targetId="prices"
                offset={-50}
                label="Prices"
                className={`${styles.button.navbarHidden}`}
              />
              <ScrollButton
                targetId="contact"
                offset={-50}
                label="Contact Us"
                className={`${styles.button.navbarHidden}`}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
