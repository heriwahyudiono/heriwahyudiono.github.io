import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import hamburgerMenu from "../assets/icon/hamburger_menu.png";
import closeMenu from "../assets/icon/close_menu.png";

const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation((prev) => !prev);
  };

  return (
    <>
      <header className="w-full h-[60px] bg-gray-100 border-b-2 border-b-green-400 opacity-75 fixed top-0 flex flex-row-reverse justify-between">
        <img
          onClick={toggleNavigation}
          className="h-[35px] mr-6 my-3 justify-end"
          src={showNavigation ? closeMenu : hamburgerMenu}
        />
        <img className="h-[35px] ml-6 my-3 hover:scale-110" src={Logo} />
        {showNavigation && (
          <nav className="w-[200px] h-auto bg-gray-100 rounded-lg mt-16 mr-6 absolute">
            <ul>
              <li className="block p-[5px] m-[5px] flex text-blue-400 font-bold hover:bg-blue-200">
                <Link to="/">Home</Link>
              </li>
              <li className="block p-[5px] m-[5px] flex text-blue-400 font-bold hover:bg-blue-200">
                <Link to="/portofolio">Portofolio</Link>
              </li>
              <li className="block p-[5px] m-[5px] flex text-blue-400 font-bold hover:bg-blue-200">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="block p-[5px] m-[5px] flex text-blue-400 font-bold hover:bg-blue-200">
                <Link to="/software-gratis">Software Gratis</Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
