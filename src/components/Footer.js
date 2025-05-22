import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Footer = () => {
  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <img src={logo} alt="Logo" className="w-40" />
            <p className="text-gray-300">Providing quality media and advertising solutions for your business needs.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Home</a></li>
              <li><a onClick={() => scrollToSection('ugc')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">UGC</a></li>
              <li><a onClick={() => scrollToSection('video-production')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Video Production</a></li>
              <li><a onClick={() => scrollToSection('photography')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Photography</a></li>
              <li><a onClick={() => scrollToSection('digital-marketing')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Digital Marketing</a></li>
              <li><a onClick={() => scrollToSection('website-technology')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Website & Technology</a></li>
              <li><a onClick={() => scrollToSection('contact-us')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Contact Us</a></li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: suryamedia54@gmail.com</p>
            <p className="text-gray-300">Phone: +91 81859 22222</p>
            <p className="text-gray-300">Address: Madhapur, Hyderabad, Telangana 500018</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-xl" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-xl" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-xl" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 text-xl" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-600 mt-8 pt-6 container mx-auto px-4">
        <p className="text-gray-400 text-center">&copy; {new Date().getFullYear()} Surya Media. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer