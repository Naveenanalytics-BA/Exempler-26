
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/details', name: 'Event Details' },
  { path: '/highlights', name: 'Highlights' },
  { path: '/about', name: 'About' },
  { path: '/resources', name: 'Resources' },
  { path: '/faq', name: 'FAQ' },
  { path: '/contact', name: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#42A5F5',
    textShadow: '0 0 5px #42A5F5',
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-primary/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-extrabold text-white tracking-wider">
            EXEMPLER<span className="text-brand-accent">'26</span>
          </NavLink>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className="text-gray-300 hover:text-brand-accent transition-colors duration-300 font-medium"
                style={({ isActive }) => isActive ? activeLinkStyle : {}}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/register" className="bg-brand-primary hover:bg-brand-dark text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105">
              Register Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-brand-accent transition-colors duration-300 font-medium text-center py-2"
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink to="/register" onClick={() => setIsOpen(false)} className="bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 text-center">
                Register Now
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
