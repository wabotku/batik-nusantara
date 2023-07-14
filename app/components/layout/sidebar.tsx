// Sidebar.tsx
import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className="lg:w-64 bg-gray-200 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Sidebar</h2>
        <button
          className="block lg:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <svg
              className="h-6 w-6 fill-current transition-transform rotate-90"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current transition-transform"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`mt-4 ${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:block transition-all`}
      >
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full mb-4">
          Button
        </button>
        {/* Add any other sidebar content */}
      </div>
    </aside>
  );
};

export default Sidebar;
