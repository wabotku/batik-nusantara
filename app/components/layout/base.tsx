// Layout.tsx
import React, { ReactNode, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Base: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darkMode ? "dark" : "bg-gray-100"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <main
              className={`flex-1 ${
                darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
              } p-6`}
            >
              {/* <Carousel /> 
              <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`bg-gray-200 p-4 ${darkMode ? 'dark:bg-gray-800' : ''}`}>
                  <h2 className={`text-lg font-bold mb-4 ${darkMode ? 'dark:text-white' : ''}`}>Section 1</h2>
                  <p className={`text-sm ${darkMode ? 'dark:text-gray-300' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu eleifend justo, vel lobortis velit.
                  </p>
                </div>
                <div className={`bg-gray-200 p-4 ${darkMode ? 'dark:bg-gray-800' : ''}`}>
                  <h2 className={`text-lg font-bold mb-4 ${darkMode ? 'dark:text-white' : ''}`}>Section 2</h2>
                  <p className={`text-sm ${darkMode ? 'dark:text-gray-300' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu eleifend justo, vel lobortis velit.
                  </p>
                </div>
                <div className={`bg-gray-200 p-4 ${darkMode ? 'dark:bg-gray-800' : ''}`}>
                  <h2 className={`text-lg font-bold mb-4 ${darkMode ? 'dark:text-white' : ''}`}>Section 3</h2>
                  <p className={`text-sm ${darkMode ? 'dark:text-gray-300' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu eleifend justo, vel lobortis velit.
                  </p>
                </div>
              </div> */}
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
