import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginComp from '../../components/googleLogin/GoogleLoginComp';

const SignUp = () => {
    return (
        <div className="w-full  flex flex-col items-center justify-center px-4 py-10 bg-gray-100">
            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 text-gray-800">
                Make the most of your professional life
            </h2>

            {/* Form Container */}
            <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
                <form className="flex flex-col gap-5">
                    {/* Email Field */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#0374b3]"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1 text-gray-700 font-medium">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#0374b3]"
                        />
                    </div>

                    {/* Full Name Field */}
                    <div className="flex flex-col">
                        <label htmlFor="fullname" className="mb-1 text-gray-700 font-medium">
                            Full Name
                        </label>
                        <input
                            id="fullname"
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#0374b3]"
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#0374b3] hover:bg-[#025f92] text-white py-3 rounded-lg text-lg font-semibold transition"
                    >
                        Register
                    </button>
                </form>

                {/* OR separator */}
                <div className="flex items-center justify-center my-6">
                    <div className="border-t border-gray-300 w-full"></div>
                    <span className="px-3 text-gray-500 text-sm">or</span>
                    <div className="border-t border-gray-300 w-full"></div>
                </div>

                {/* Google Login Button */}
                <div>
                    {/* <img
                        src="/google_logo.png"
                        alt="Google logo"
                        className="w-6 h-6"
                    /> */}
                    <GoogleLoginComp />
                    {/* <span className="text-sm md:text-base">Continue with Google</span> */}
                </div>
            </div>

            <div className='mt-4 mb-10'>
                Already on LinkedIn?
                <Link to='/login' className='text-[#0374b3] cursor-pointer hover:underline' >
                    Sign in
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
