import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>
        <ul className="w-[200px] h-auto bg-gray-100 rounded-lg mt-16 mr-8">
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
      </div>
    </>
  );
};

export default Navigation;
