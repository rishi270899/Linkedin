import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 py-8 px-4 md:px-20 text-sm text-gray-700">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
                {/* Logo + Info Section */}
                <div>
                    <div className="flex items-center gap-1 mb-2 cursor-pointer">
                        <h3 className="text-[#0374b3] font-bold text-xl">Linked</h3>
                        <img src="/LinkedIn_logo.png" alt="LinkedIn Logo" className="w-5 h-5" />
                    </div>
                    <p className="text-gray-600">© 2025 LinkedIn</p>
                    
                </div>

                {/* Footer Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                    {/* Column 1 */}
                    <div>
                        <h4 className="font-semibold mb-2">General</h4>
                        <ul className="space-y-1">
                            {['Sign Up', 'Help Center', 'About', 'Press', 'Blog', 'Careers', 'Developers'].map((item, i) => (
                                <li key={i} className="hover:underline hover:text-[#0374b3] cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-semibold mb-2">Browse LinkedIn</h4>
                        <ul className="space-y-1">
                            {['Learning', 'Jobs', 'Games', 'Salary', 'Mobile', 'Services', 'Products', 'Top Companies Hub'].map((item, i) => (
                                <li key={i} className="hover:underline hover:text-[#0374b3] cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="font-semibold mb-2">Business Solutions</h4>
                        <ul className="space-y-1">
                            {['Talent', 'Marketing', 'Sales', 'Learning'].map((item, i) => (
                                <li key={i} className="hover:underline hover:text-[#0374b3] cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="font-semibold mb-2">Directories</h4>
                        <ul className="space-y-1">
                            {[
                                'Members', 'Jobs', 'Companies', 'Featured', 'Learning', 'Posts', 'Articles',
                                'Schools', 'News', 'News Letters', 'Services', 'Products', 'Advice', 'People Search'
                            ].map((item, i) => (
                                <li key={i} className="hover:underline hover:text-[#0374b3] cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
