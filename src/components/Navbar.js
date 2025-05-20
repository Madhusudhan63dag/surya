import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Professional button style using website's color scheme
  const contactBtnClass = scrolled
    ? "ml-4 inline-flex items-center px-6 py-2 border border-transparent text-base font-semibold rounded-2xl text-white bg-[#f26522] shadow-md hover:bg-[#e45511] transition-colors duration-300"
    : "ml-4 inline-flex items-center px-6 py-2 border border-transparent text-base font-semibold rounded-2xl text-[#002E62] bg-white shadow-md hover:bg-gray-100 transition-colors duration-300";

  // Mobile menu button style with professional colors
  const mobileContactBtnClass = scrolled
    ? "block px-3 py-2 font-semibold text-white bg-[#002E62] rounded-2xl shadow-md hover:bg-[#003b7f] transition-colors duration-300"
    : "block px-3 py-2 font-semibold text-[#002E62] bg-white rounded-2xl shadow-md hover:bg-gray-100 transition-colors duration-300";

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#002E62] shadow-md py-2' : 'bg-[#002E62] py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0"> 
            <Link className="text-xl font-bold text-gray-800">
              <img src={logo} alt="Logo" className="w-20" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden font-bold md:flex md:items-center md:space-x-6">
            <h1 className="text-white hover:text-white hover:underline transition-colors duration-300">
              Home
            </h1>
            <h1 className="text-white hover:text-white hover:underline transition-colors duration-300">
              UGC
            </h1>
            <h1 className="text-white hover:text-white hover:underline transition-colors duration-300">
              Video Production
            </h1>
            <h1 className="text-white hover:text-white hover:underline transition-colors duration-300">
              Photography
            </h1>
            <h1 className="text-white hover:text-white hover:underline transition-colors duration-300">
              Digital Marketing
            </h1>
            <h1 className="text-white hover:text-white hover:underline transition-colors duration-300">
              Website & Technology
            </h1>
            <h1 className={contactBtnClass}>
              Contact Us
            </h1>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu open/close */}
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#f26522] shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <h1 className="block px-3 py-2 text-white hover:text-white hover:bg-gray-50 rounded-md transition-colors duration-300">
            Home
          </h1>
          <h1 className="block px-3 py-2 text-white hover:text-white hover:bg-gray-50 rounded-md transition-colors duration-300">
            UGC
          </h1>
          <h1 className="block px-3 py-2 text-white hover:text-white hover:bg-gray-50 rounded-md transition-colors duration-300">
            Video Production
          </h1>
          <h1 className="block px-3 py-2 text-white hover:text-white hover:bg-gray-50 rounded-md transition-colors duration-300">
            Photography
          </h1>
          <h1 className="block px-3 py-2 text-white hover:text-white hover:bg-gray-50 rounded-md transition-colors duration-300">
            Digital Marketing
          </h1>
          <h1 className="block px-3 py-2 text-white hover:text-white hover:bg-gray-50 rounded-md transition-colors duration-300">
            Website & Technology
          </h1>
          <h1 className={mobileContactBtnClass}>
            Contact Us
          </h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;