// Fix: Replaced placeholder content with a functional, responsive Header component.
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Courses', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Pricing', href: '#' },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4dffc3] to-cyan-400">YTHIX</span>
                        </a>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <a href="#" className="inline-block px-5 py-2 text-sm font-semibold text-white bg-gray-800/80 rounded-lg hover:bg-gray-700/80 transition-colors duration-300">
                            Sign In
                        </a>
                    </div>
                    
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                             <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                         <div className="px-5">
                            <a href="#" className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
                                Sign In
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
