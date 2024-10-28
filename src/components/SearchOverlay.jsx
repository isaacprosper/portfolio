import { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchOverlay = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div>
      {/* Search Icon */}
      <FiSearch
        className="text-green-600 cursor-pointer text-2xl hover:scale-110 transition-transform"
        onClick={toggleSearch}
      />

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-500 ${
          isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search here..."
            className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <FiSearch className="absolute right-10 top-9 text-green-600" size={24} />
          
          {/* Close Icon */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition-colors"
            onClick={toggleSearch}
          >
            <FiX size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
