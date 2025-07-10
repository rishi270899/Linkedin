import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="pt-10 md:pt-16 px-5 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10 bg-gray-50">

      
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h2 className="text-3xl md:text-4xl text-gray-700 font-semibold mb-6">
          With you every step of your career
        </h2>

        {/* Google Button */}
        <div className="flex items-center justify-center gap-3 w-full md:w-[80%] bg-blue-600 border border-gray-300 rounded-full py-2 px-4 text-white font-medium cursor-pointer hover:bg-blue-700 transition mb-3">
          <img
            src="/google_logo.png"
            alt="Google logo"
            className="w-8 h-8 p-1 bg-white rounded-full"
          />
          <p className="text-md md:text-base">Continue with Google</p>
        </div>

        {/* Email Sign In */}
        <div className="w-full md:w-[80%] bg-white border border-gray-300 rounded-full py-2 px-4 text-center text-black font-medium cursor-pointer hover:bg-gray-100 transition mb-3">
          Sign in with Email
        </div>

        {/* Terms */}
        <p className="text-sm text-gray-600 mt-4 w-full md:w-[80%]">
          By clicking continue to join or sign in, you agree to
          <span className="text-[#0374b3] cursor-pointer hover:underline pl-1">LinkedIn's User Agreement</span>,
          <span className="text-[#0374b3] cursor-pointer hover:underline pl-1">Privacy Policy</span>, and
          <span className="text-[#0374b3] cursor-pointer hover:underline pl-1">Cookie Policy</span>.
        </p>

        {/* Join Now */}
        <div className="text-md mt-5 w-full md:w-[80%]">
          New to LinkedIn?
          <span className="text-[#0374b3] cursor-pointer pl-1 hover:underline">Join now</span>
          <Link to="/signup" className="text-[#0374b3] cursor-pointer pl-1 hover:underline">
            Sign Up
            </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src="/sideImage.svg"
          alt="Career support illustration"
          className="w-full h-auto max-w-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default LandingPage;
