import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 py-10 mt-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
        <p className="mb-2">© {new Date().getFullYear()} Wiktor Ciepliński</p>
        <p className="text-sm">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer;