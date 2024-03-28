import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo1 from "../images/logo1.png"

import { faFacebookF, faTwitter, faInstagram ,faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:items-center">
        <div className="flex justify-center sm:col-span-2 lg:col-span-1">
          <img className="h-14 w-auto" src={logo1} alt="Infinity Market Research" />
        </div>
        <div className="sm:col-span-1 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Our Company</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-indigo-500">Home</Link></li>
            <li><Link to="/company" className="hover:text-indigo-500">About Us</Link></li>
            <li><Link to="/services" className="hover:text-indigo-500">Services</Link></li>
            
            <li><Link to="/contact" className="hover:text-indigo-500">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-indigo-500">Privacy-policy</Link></li>

          </ul>
        </div>
        <div className="sm:col-span-1 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">More Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-indigo-500">How to Order</Link></li>
            <li><Link to="/termsandconditons" className="hover:text-indigo-500">Refund Policy</Link></li>
            <li><Link to="/termsandconditons" className="hover:text-indigo-500">Terms And Conditions</Link></li>
            <li><Link to="/disclaimer" className="hover:text-indigo-500">Disclaimer</Link></li>
            <li><Link to="/faqs" className="hover:text-indigo-500">FAQs</Link></li>

          </ul>
        </div>
        <div className="sm:col-span-1 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <span>info@infinitymr.com</span>
            </div>
            <div className="flex items-center">
              <span>+123 456 7890</span>
            </div>
          </div>
        </div>
        <div className="sm:col-span-1 lg:col-span-1">
          <div className="flex flex-col md:items-start items-center space-y-4 ">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-gray-400 hover:text-black"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-gray-400 hover:text-black"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="text-gray-400 hover:text-black"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-10" />
      <div className="text-center flex pt-2 justify-center lg:text-right">
        <p className="text-sm">&copy; 2024 Market Research Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  );
}
