import React from "react";

const Sidebar = () => {
  return (
    <nav className="w-64 h-full bg-slate-200 left-0 top-0 pt-4 fixed transform ease-out duration-500 transition-all">
      <ul className="text-gray-800">
        <li className="py-4 px-8 hover:bg-blue-200">Home</li>
        <li className="py-4 px-8 hover:bg-blue-200">Portofolio</li>
        <li className="py-4 px-8 hover:bg-blue-200">Blog</li>
        <li className="py-4 px-8 hover:bg-blue-200">Software Gratis</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
