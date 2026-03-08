import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-900/80 via-blue-950/80 to-gray-950/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <span className="font-bold text-lg text-white">Wiktor.dev</span>

        <ul className="flex gap-6 text-sm text-gray-300 items-center">
          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-blue-400 transition-colors">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a href="https://github.com/magnes77" target="_blank" rel="noreferrer">
              <FaGithub className="text-xl hover:text-blue-400 transition-colors"/>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-400 transition-colors"/>
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;