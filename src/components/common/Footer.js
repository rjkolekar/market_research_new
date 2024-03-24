import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="mb-4 lg:mb-0">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
              </div>
              <div className="sm:col-span-1">
                <h2 className="text-lg font-semibold mb-4">Pages</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="hover:text-indigo-500">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-indigo-500">About Us</Link>
                  </li>
                  <li>
                    <Link to="/services" className="hover:text-indigo-500">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-indigo-500">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="sm:col-span-1">
                <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                <div className="flex items-center mb-2">
                  {/* <MailIcon className="h-5 w-5 mr-2" /> */}
                  <span>info@example.com</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <span>+123 456 7890</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="flex flex-col justify-center items-center space-y-4">
              <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-black"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="text-gray-300 hover:text-black"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="text-gray-300 hover:text-black"><FontAwesomeIcon icon={faInstagram} /></a>
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
