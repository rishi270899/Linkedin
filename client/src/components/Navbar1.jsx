import React from 'react';

const Navbar1 = () => {
  return (
    <nav className="w-full bg-gray-100 md:px-[100px] px-5 py-4 flex items-center justify-between box-border">
      {/* Logo Section */}
      <div className="flex items-center gap-1 cursor-pointer">
        <h3 className="text-[#0374b3] font-bold text-3xl">Linked</h3>
        <img src="/LinkedIn_logo.png" alt="in" className="w-7 h-7" />
      </div>

      {/* Buttons Section */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer px-4 py-2">
          Join now
        </div>
        <div className="text-[#0374b3] border rounded-3xl text-xl hover:bg-blue-50 cursor-pointer px-4 py-2">
          Sign in
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
