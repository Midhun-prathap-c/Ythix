// Fix: Replaced placeholder content with a functional Footer component.
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Twitter', href: '#'},
    { name: 'Facebook', href: '#'},
    { name: 'Instagram', href: '#'},
    { name: 'LinkedIn', href: '#'},
  ];

  return (
    <footer className="bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a href="#" className="text-3xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4dffc3] to-cyan-400">YTHIX</span>
            </a>
            <p className="text-gray-400 text-base">
              Unlock your potential with our next-gen learning platform.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {/* Placeholder SVG - replace with actual social icons */}
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Marketing</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Analytics</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Commerce</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Insights</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Guides</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">API Status</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Jobs</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Press</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Claim</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} YTHIX, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
