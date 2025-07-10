// import React from 'react';

// const Navbar1 = () => {
//   return (
//     <nav className="w-full bg-gray-100 md:px-[100px] px-5 py-4 flex items-center justify-between box-border">
//       {/* Logo Section */}
//       <div className="flex items-center gap-1 cursor-pointer">
//         <h3 className="text-[#0374b3] font-bold text-3xl">Linked</h3>
//         <img src="/LinkedIn_logo.png" alt="in" className="w-7 h-7" />
//       </div>

      

//       {/* Buttons Section */}
//       <div className="flex items-center gap-2 md:gap-4">
//         <div className="text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer px-4 py-2">
//           Join now
//         </div>
//         <div className='w-[3px] h-6 border bg-gray-500'>
//         <span></span>
//       </div>
//         <div className="text-[#0374b3] border rounded-3xl text-xl hover:bg-blue-50 cursor-pointer px-4 py-2">
//           Sign in
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar1;



import React from 'react';

const Navbar1 = () => {
  return (
    <nav className="w-full bg-gray-100 md:px-24 px-5 py-4 flex items-center justify-between shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-1 cursor-pointer">
        <h3 className="text-[#0374b3] font-bold text-3xl">Linked</h3>
        <img src="/LinkedIn_logo.png" alt="in" className="w-7 h-7" />
      </div>

      {/* Buttons Section */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Join Now Button */}
        <button className="text-black text-lg md:text-xl px-4 py-1.5 rounded-full hover:bg-gray-200 transition duration-200">
          Join now
        </button>

        {/* Vertical Divider */}
        <div className="w-px h-6 bg-gray-400"></div>

        {/* Sign In Button */}
        <button className="text-[#0374b3] text-lg md:text-xl px-4 py-1.5 border border-[#0374b3] rounded-full hover:bg-blue-50 transition duration-200">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar1;
