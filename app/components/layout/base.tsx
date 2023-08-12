// Layout.tsx
import React, { ReactNode, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "../pages";

interface LayoutProps {
  children: ReactNode;
}

const Base: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [langMode, setLangMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const toggleLangMode = () => {
    setLangMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex flex-col min-h-screen" id="home">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} langMode={langMode} toggleLangMode={toggleLangMode} />
      <div
        className={`bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url('/image/bg5.jpg')`,
          paddingTop: "56.25%", // 16:9 aspect ratio (height/width)
        }}
      />
      <div className="flex-1">
        <div className="mx-auto">
          <div className="flex bg-cover">
            <main
              className={`flex-1 ${
                darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
              } p-6`}
              style={{
                backgroundImage: `url('/image/background-opa.png')`,
              }}
            >
              <Home langMode={langMode} />
              {children}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Base;
