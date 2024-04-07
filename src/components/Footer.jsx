
import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gray-700 text-white block bottom-0 left-0 w-full pl-0">
      <div className="container mx-auto py-4 flex justify-center">
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li className='hidden lg:block'>
            <span className="text-gray-400">|</span>
          </li>
          <li>
          <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
          </li>
          <li className='hidden lg:block'>
            <span className="text-gray-400">|</span>
          </li>
          
          <li>
          <Link to="/pricing" className="hover:text-gray-400">Pricing</Link>
          </li>
          
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
