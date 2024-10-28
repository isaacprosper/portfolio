import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { FiMail, FiPhone, FiSearch, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-2 px-4 sm:px-8 text-sm border-b border-green-300">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FiMail className="text-green-600" />
            <span>isaacprosper39@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone className="text-green-600 " />
            <span>+234 8025 - 537 - 535</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <select className="border-none text-green-600 bg-transparent focus:outline-none">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <div className="flex space-x-3">
            <FaFacebookF className="text-green-600 cursor-pointer hover:text-green-800 transition" />
            <FaTwitter className="text-green-600 cursor-pointer hover:text-green-800 transition" />
            <FaLinkedinIn className="text-green-600 cursor-pointer hover:text-green-800 transition" />
            <FaPinterestP className="text-green-600 cursor-pointer hover:text-green-800 transition" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4">
        {/* Logo */}
        <div className="text-green-700 text-2xl font-bold">Dreamhub</div>

        {/* Nav Links */}
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 font-semibold">
          {['Home', 'About', 'Services', 'Pages', 'Contact Us', 'Blog'].map((item) => (
            <li
              key={item}
              className="group relative cursor-pointer hover:text-green-600 transition"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <FiSearch
            className="text-green-600 cursor-pointer"
            onClick={toggleSearch}
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Contact Us →
          </button>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded shadow-lg w-11/12 max-w-lg">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none"
            />
            <FiSearch className="absolute right-8 top-8 text-green-600" />
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
              onClick={toggleSearch}
            >
              <FiX size={24} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
