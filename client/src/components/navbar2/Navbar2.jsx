import React, { useState } from 'react'
import './Navbar2.css'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useLocation } from 'react-router-dom'

const Navbar2 = () => {

    const [dropdown, setDropdown] = useState(false)
    const location = useLocation()
    console.log(location);


    return (
        <nav className='bg-white h-12 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-full z-100'>
            <div className='flex gap-3 items-center '>
                <div>
                    <img src="/LinkedIn_logo.png" className='w-7 h-7 cursor-pointer ' alt="" />
                </div>
                <div className='relative'>
                    <input type="text" className='searchInput w-70 bg-gray-100 rounded-sm h-10 px-4' placeholder='Search' />

                    {
                        dropdown && <div className='absolute w-88 left-0 bg-gray-200'>
                            <div className='flex gap-2 items-center '>
                                <div>
                                    <img className='w-10 h-10  rounded-full' src="/rishiPhoto.JPG" alt="" />
                                </div>
                                <div>
                                    Rishi
                                </div>

                            </div>


                        </div>
                    }

                </div>

            </div>

            <div className='hidden gap-10 md:flex'>
                <div className='flex flex-col  items-center  cursor-pointer'>
                    <div className='text-center'>
                        <HomeIcon sx={{ color: location.pathname == '/feeds' ? "black" : "gray hover:gray" }} />
                        <h6 className={`text-sm text-gray-500 ${location.pathname==='/feeds' ? "border-b-gray-400" : ""}`}>Home</h6>
                    </div>
                </div>
                <div className='flex flex-col  items-center  cursor-pointer'>
                    <div className='text-center text-[#666666] hover:text-black'>
                        <PeopleIcon sx={{ color: location.pathname === '/mynetwork' ? "black" : "gray hover:gray" }} />
                        <h6 className={`text-sm text-gray-500 ${location.pathname==='/mynetwork' ? "border-b-gray-400" : ""}`}>Connection</h6>
                    </div>


                </div>
                <div className='flex flex-col  items-center  cursor-pointer'>
                    <div className='text-center text-[#666666] hover:text-black'>
                        <WorkIcon sx={{ color: location.pathname === '/resume' ? "black" : "gray hover:gray" }} />
                        <h6 className={`text-sm text-gray-500 ${location.pathname==='/resume' ? "border-b-gray-400" : ""}`}>Work</h6>
                    </div>


                </div>
                <div className='flex flex-col  items-center  cursor-pointer'>
                    <div className='text-center text-[#666666] hover:text-black'>
                        <MessageIcon sx={{ color: location.pathname === '/messages' ? "black" : "gray hover:gray" }} />
                        <h6 className={`text-sm text-gray-500 ${location.pathname==='/messages' ? "border-b-gray-400" : ""}`}>Message</h6>
                    </div>


                </div>
                <div className='flex flex-col  items-center  cursor-pointer'>
                    <div className='text-center text-[#666666] hover:text-black'>
                        <div>
                            <NotificationsIcon sx={{ color: location.pathname === '/notifications' ? "black" : "gray  hover:gray" }} />
                            <span className='p-1 rounded-3xl text-sm bg-red-700 text-white'>11</span>
                        </div>
                        <h6 className={`text-sm text-gray-500 ${location.pathname==='/notifications' ? "border-b-gray-400" : ""}`}>Notification</h6>
                    </div>


                </div>
                <div className='flex flex-col  items-center  cursor-pointer'>
                    <div className='text-center text-[#666666] hover:text-black'>
                        <img className='w-6 h-6 rounded-full' src="/rishiPhoto.JPG" alt="profile" />
                        <h6 className='text-sm text-gray-500'>Me</h6>
                    </div>


                </div>


            </div>
        </nav>
    )
}

export default Navbar2










// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import clsx from 'clsx';

// import HomeIcon from '@mui/icons-material/Home';
// import PeopleIcon from '@mui/icons-material/People';
// import WorkIcon from '@mui/icons-material/Work';
// import MessageIcon from '@mui/icons-material/Message';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// const navItems = [
//   { icon: <HomeIcon />, label: 'Home', path: '/feeds' },
//   { icon: <PeopleIcon />, label: 'Connection', path: '/mynetwork' },
//   { icon: <WorkIcon />, label: 'Work', path: '/resume' },
//   { icon: <MessageIcon />, label: 'Message', path: '/messages' },
//   {
//     icon: <NotificationsIcon />,
//     label: 'Notification',
//     path: '/notifications',
//     notificationCount: 11,
//   },
// ];

// const Navbar2 = () => {
//   const [dropdown, setDropdown] = useState(false);
//   const location = useLocation();

//   const NavItem = ({ icon, label, path, notificationCount }) => {
//     const isActive = location.pathname === path;

//     return (
//       <div className="flex flex-col items-center cursor-pointer">
//         <div className="relative text-center text-[#666666] hover:text-black">
//           <div className="relative inline-block">
//             {icon}
//             {notificationCount > 0 && (
//               <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full leading-none">
//                 {notificationCount}
//               </span>
//             )}
//           </div>
//           <h6
//             className={clsx(
//               'text-sm text-gray-500',
//               isActive && 'border-b-2 border-gray-400'
//             )}
//           >
//             {label}
//           </h6>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <nav className="bg-white h-14 flex justify-between items-center px-5 xl:px-52 fixed top-0 w-full z-50 shadow-sm">
//       {/* Left Section */}
//       <div className="flex gap-4 items-center">
//         <img
//           src="/LinkedIn_logo.png"
//           className="w-8 h-8 cursor-pointer"
//           alt="LinkedIn Logo"
//         />
//         <div className="relative">
//           <input
//             type="text"
//             className="searchInput w-72 bg-gray-100 rounded-sm h-10 px-4"
//             placeholder="Search"
//             onFocus={() => setDropdown(true)}
//             onBlur={() => setDropdown(false)}
//           />
//           {dropdown && (
//             <div className="absolute w-96 left-0 mt-1 bg-white border rounded shadow-sm p-2 z-10">
//               <div className="flex gap-3 items-center">
//                 <img
//                   className="w-10 h-10 rounded-full"
//                   src="/rishiPhoto.JPG"
//                   alt="Profile"
//                 />
//                 <div className="text-sm font-medium">Rishi</div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="hidden md:flex gap-10">
//         {navItems.map((item) => (
//           <NavItem key={item.path} {...item} />
//         ))}

//         <div className="flex flex-col items-center cursor-pointer">
//           <div className="text-center text-[#666666] hover:text-black">
//             <img
//               className="w-6 h-6 rounded-full"
//               src="/rishiPhoto.JPG"
//               alt="Profile"
//             />
//             <h6 className="text-sm text-gray-500">Me</h6>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar2;
