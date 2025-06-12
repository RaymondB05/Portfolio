import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À Propos" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "resume", label: "CV" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="font-bold text-xl text-blue-700">Rayan Biad</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`hover:text-blue-700 transition-colors ${
                      activeSection === item.id ? "text-blue-700 font-semibold" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-3 ml-4 border-l pl-4 border-gray-200">
              <a
                href="https://www.linkedin.com/in/rbiad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:rayanabiad@gmail.com"
                className="text-gray-600 hover:text-blue-700"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://github.com/rbiad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-2 border-t border-gray-100">
            <ul className="flex flex-col space-y-3 pb-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className={`block hover:text-blue-700 transition-colors ${
                      activeSection === item.id ? "text-blue-700 font-semibold" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 pt-3 border-t border-gray-100">
              <a
                href="https://www.linkedin.com/in/rbiad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:rayanabiad@gmail.com"
                className="text-gray-600 hover:text-blue-700"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://github.com/rbiad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;