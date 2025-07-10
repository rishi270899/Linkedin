import React from 'react';

const Navbar1 = () => {
  return (
    <nav className="w-full bg-gray-100 md:px-24 px-5 py-4 flex items-center justify-between shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-1 cursor-pointer">
        {/* Text hidden on small screens */}
        <h3 className="text-[#0374b3] select-none font-bold text-2xl md:text-3xl hidden md:block">Linked</h3>
        <img src="/LinkedIn_logo.png" alt="LinkedIn Logo" className="w-7 h-7" />
      </div>

      {/* Buttons Section */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Join Now Button */}
        <button className="text-black text-sm md:text-lg px-3 md:px-4 py-1.5 rounded-full hover:bg-gray-200 transition duration-200">
          Join now
        </button>

        {/* Divider */}
        <div className="w-px h-5 md:h-6 bg-gray-400"></div>

        {/* Sign In Button */}
        <button className="text-[#0374b3] border border-[#0374b3] text-sm md:text-lg px-3 md:px-4 py-1.5 rounded-full hover:bg-blue-50 transition duration-200">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar1;
