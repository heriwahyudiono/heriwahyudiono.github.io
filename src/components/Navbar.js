import React, { useState } from "react";
import Navigation from "./Navigation";
import Logo from "../assets/img/logo.png";
import hamburgerMenu from "../assets/icon/hamburger_menu.png";

const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation((prev) => !prev);
  };

  return (
    <div className="w-full h-[60px] bg-gray-100 border-b-2 border-b-green-400 opacity-75 fixed top-0 flex justify-between">
      <img className="h-[35px] ml-6 my-3 hover:scale-110" src={Logo} />
      <img
        onClick={toggleNavigation}
        className="h-[35px] mr-6 my-3"
        src={hamburgerMenu}
      />
      {showNavigation && (
        <div>
          <Navigation />
        </div>
      )}
    </div>
  );
};

export default Navbar;
