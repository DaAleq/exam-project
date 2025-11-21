import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Globe from "../../assets/icons/globe.svg";
import Search from "../../assets/icons/Search.svg";
import Person from "../../assets/icons/person.svg";
import ChatIcon from "../../assets/icons/chat.png"; 
import MenuIcon from "../../assets/icons/menu.png";
import CloseIcon from "../../assets/icons/close.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useAuth(); 

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Գլխավոր", path: "/home" },
    { name: "Զեղչեր", path: "/discount" },
    { name: "Ծառայություններ", path: "/services" },
    { name: "Մեր մասին", path: "/about-us" },
  ];

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <NavLink to="/" className="flex items-center space-x-2">
        <img src={Logo} alt="AmaranC Logo" className="h-10 w-auto" />
      </NavLink>

      <nav className="hidden md:flex flex- justify-center">
        <ul className="flex space-x-8 text-amaranth-dark font-medium text-lg">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-amaranth-orange transition-colors duration-200 relative pb-1 group ${
                    isActive ? "text-amaranth-orange" : ""
                  }`
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amaranth-orange transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden md:flex items-center space-x-6">

        <button className="p-1 rounded-full hover:bg-gray-100 transition duration-200">
          <img src={Globe} alt="Globe Icon" className="w-5 h-5" />
        </button>
        <NavLink
          to="/login"
          className="p-1 rounded-full hover:bg-gray-100 transition duration-200"
        >
          <img src={Person} alt="Person Icon" className="w-6 h-6" />
        </NavLink>
        {currentUser && (
          <NavLink
            to="/chat"
            className="p-1 rounded-full hover:bg-gray-100 transition duration-200"
          >
            <img src={ChatIcon} alt="Chat" className="w-6 h-6" />
          </NavLink>
        )}

        <div className="relative flex items-center border border-gray-300 rounded-full px-4 py-2 hover:border-amaranth-orange transition duration-200 focus-within:ring-1 focus-within:ring-amaranth-orange">
          <input
            type="text"
            placeholder="Որոնում"
            className="flex outline-none bg-transparent text-gray-700 placeholder-gray-400 text-sm w-40"
          />
          <img src={Search} alt="Search Icon" className="w-5 h-5 ml-2" />
        </div>
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
      >
        <img
          src={menuOpen ? CloseIcon : MenuIcon}
          alt="Menu"
          className="w-6 h-6"
        />
      </button>


      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <img src={Logo} alt="Logo" className="h-10" />
          <button onClick={toggleMenu}>
            <img src={CloseIcon} alt="Close" className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 mt-8 px-6 text-lg text-amaranth-dark">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block hover:text-amaranth-orange transition duration-200 ${
                    isActive ? "text-amaranth-orange" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="px-6 mt-8 flex items-center gap-6">

          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <img src={Globe} alt="Globe" className="w-6 h-6" />
          </button>
          <NavLink
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <img src={Person} alt="Person" className="w-6 h-6" />
          </NavLink>
          {currentUser && (
            <NavLink
              to="/chat"
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <img src={ChatIcon} alt="Chat" className="w-6 h-6" />
            </NavLink>
          )}
        </div>

        <p className="absolute bottom-6 left-6 text-gray-400 text-sm">@meda</p>
      </div>
    </header>
  );
};

export default Header;
