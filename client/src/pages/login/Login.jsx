import React from 'react'
import { Link } from 'react-router-dom'
import GoogleLoginComp from '../../components/googleLogin/GoogleLoginComp'

const Login = () => {
    return (
        <div className="w-full  flex flex-col items-center justify-center px-4 py-10 bg-gray-100">
               

            {/* Form Container */}
            <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
              
              <div className='mb-8'>
                 <h1 className='font-medium text-xl'>Sign In</h1>  
              </div>

                {/* Google Login Button */}
                {/* className="flex items-center justify-center gap-3 w-full bg-white border border-gray-300 rounded-full py-2 px-4 text-black font-medium cursor-pointer hover:shadow-md transition */}
                <div>
                    {/* <img
                        src="/google_logo.png"
                        alt="Google logo"
                        className="w-6 h-6"
                    /> */}
                    {/* <span className="text-sm md:text-base">Continue with Google</span> */}
                    <GoogleLoginComp/>
                </div>


                {/* OR separator */}
                <div className="flex items-center justify-center my-6">
                    <div className="border-t border-gray-300 w-full"></div>
                    <span className="px-3 text-gray-500 text-sm">or</span>
                    <div className="border-t border-gray-300 w-full"></div>
                </div>
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



                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#0374b3] hover:bg-[#025f92] text-white py-3 rounded-lg text-lg font-semibold transition"
                    >
                        Register
                    </button>
                </form>


            </div>

            <div className='mt-4 mb-10'>
                New to LinkedIn?
                <Link to='/signup' className='text-[#0374b3] cursor-pointer hover:underline' >
                    Join now
                </Link>
            </div>
        </div>
    )
}

export default Login