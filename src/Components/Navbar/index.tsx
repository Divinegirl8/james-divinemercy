import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between p-4 text-white">
      {/* Logo */}
      <div className="text-lg font-semibold"></div>

      {/* Fixed Hamburger / Close Icon */}
      <div
        className="fixed top-4 right-4 flex flex-col cursor-pointer space-y-1.5 z-50"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          // "X" icon
          <div className="flex flex-col items-center space-y-1.5 transform scale-90">
            <span className="block h-0.5 w-6 bg-white rotate-45 transform translate-y-1.5"></span>
            <span className="block h-0.5 w-6 bg-white -rotate-45 transform -translate-y-1.5"></span>
          </div>
        ) : (
          // Hamburger icon
          <>
            <span className="block h-0.5 w-6 bg-white transition-transform"></span>
            <span className="block h-0.5 w-6 bg-white transition-transform"></span>
            <span className="block h-0.5 w-6 bg-white transition-transform"></span>
          </>
        )}
      </div>

      {/* Navigation Links */}
      <div
        className={`fixed top-0 left-0 lg:top-[-1rem] h-full w-full lg:w-[30rem] lg:h-[10rem] lg:rounded-br-[40rem] bg-ash-color transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col lg:flex-row items-center justify-center space-y-6 gap-5`}
      >
        <div className="lg:ml-[-5rem]"></div>
        
        {/* Links with animated transitions */}
        <Link
          to="/"
          className={`text-lg hover:text-gray-300 transition-all duration-500 ${
            menuOpen ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-lg hover:text-gray-300 transition-all duration-500 ${
            menuOpen ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          About
        </Link>
        <Link
          to="/skills"
          className={`text-lg hover:text-gray-300 transition-all duration-500 ${
            menuOpen ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          Skills
        </Link>
        <Link
          to="/qualification"
          className={`text-lg hover:text-gray-300 transition-all duration-500 ${
            menuOpen ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          Qualifications
        </Link>
        <Link
          to="/contact"
          className={`text-lg hover:text-gray-300 transition-all duration-500 ${
            menuOpen ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

