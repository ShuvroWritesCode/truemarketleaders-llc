import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  console.log(isLoggedIn);

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };



  const handleLogout = async () => {
    try {

      await axios.post(
        'http://localhost:3000/api/logout',
        {},
        {
          withCredentials: true, 
          credentials: 'include', 
        }
      );
      setIsLoggedIn(false);

      navigate('/'); 
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };

  return (
    <nav className="bg-gray-700 text-white py-2 px-4 flex justify-between items-center">
      {/* Left side with app name/logo */}
      <div className="flex items-center cursor-pointer" onClick={handleClick}>
        {/* <img src="/logo.png" alt="Logo" className="h-16 w-16 mr-2" />{" "} */}
        <h1 className="font-bold text-2xl text-white">
          True Market Leaders
        </h1>
      </div>

      {/* Right side with menu options and buttons */}
      
        <div className="flex items-center space-x-4 max-md:space-x-1">
          <ul
            className={`flex text-gray-200 font-semibold md:space-x-4 max-md:space-x-3 max-md:text-md`}
          >
            {/* <div className='md:flex md:space-x-4 max-md:flex-col'> */}
            <li>
              <Link to="/" className="hover:text-gray-400 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-gray-400">
                Pricing
              </Link>
            </li>
            {/* </div> */}
          </ul>

          {/* Signup and Login buttons */}
          {isLoggedIn ? (
            <button className=" border text-white font-bold max-md:font-semibold  text-sm rounded-3xl px-6 max-md:px-4 py-2 max-md:py-1">
              <Link to="/" onClick={handleLogout} className="hover:text-gray-400">
                Logout
              </Link>
            </button>
          ) : (
            <>
              <button className=" border text-white font-bold max-md:font-semibold text-sm rounded-3xl px-6 max-md:px-4 py-2 max-md:py-1">
                <Link to="/signup" className="hover:text-gray-400">
                  SignUp
                </Link>
              </button>
              <button className=" border text-white font-bold max-md:font-semibold text-sm rounded-3xl px-6 max-md:px-4 py-2 max-md:py-1">
                <Link to="/login" className="hover:text-gray-400">
                  LogIn
                </Link>
              </button>
            </>
          )}

          
        </div>
      
    </nav>
  );
};

export default Navbar;
