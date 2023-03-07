import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import hamburgerMenu from "../assets/icon/hamburger_menu.png";
import closeMenu from "../assets/icon/close_menu.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation((prev) => !prev);
  };

  return (
    <>
      <header className="w-full h-[60px] bg-slate-200 border-b-2 border-b-green-400 fixed top-0 flex flex-row-reverse justify-between">
        <img
          onClick={toggleNavigation}
          className="h-[35px] mr-6 my-3 justify-end"
          src={showNavigation ? closeMenu : hamburgerMenu}
        />
        <img className="h-[35px] ml-6 my-3 hover:scale-110" src={Logo} />
      </header>
      {showNavigation && (
        // <nav className="w-64 h-auto bg-gray-100 rounded-lg mt-16 mr-6 absolute">
        //   <ul className="text-gray-800">
        //     <li className="p-5 border-b border-gray-200 hover:bg-gray-200">
        //       <Link
        //         to="/"
        //         className="block font-medium text-blue-500 hover:text-blue-800"
        //       >
        //         Home
        //       </Link>
        //     </li>
        //     <li className="p-5 border-b border-gray-200 hover:bg-gray-200">
        //       <Link
        //         to="/portofolio"
        //         className="block font-medium text-blue-500 hover:text-blue-800"
        //       >
        //         Portofolio
        //       </Link>
        //     </li>
        //     <li className="p-5 border-b border-gray-200 hover:bg-gray-200">
        //       <Link
        //         to="/blog"
        //         className="block font-medium text-blue-500 hover:text-blue-800"
        //       >
        //         Blog
        //       </Link>
        //     </li>
        //     <li className="p-5 border-b border-gray-200 hover:bg-gray-200">
        //       <Link
        //         to="/software-gratis"
        //         className="block font-medium text-blue-500 hover:text-blue-800"
        //       >
        //         Software Gratis
        //       </Link>
        //     </li>
        //   </ul>
        // </nav>
        <Sidebar />
      )}
    </>
  );
};

export default Navbar;
