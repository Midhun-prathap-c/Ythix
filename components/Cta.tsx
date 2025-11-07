import React from 'react';

const Cta: React.FC = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative text-center bg-gradient-to-r from-[#1c1c1c] via-gray-900 to-[#1c1c1c] border border-gray-800 rounded-3xl py-16 px-8 overflow-hidden background-pan">
                     <div className="glowing-orb-container">
                        <div className="glowing-orb orb1" style={{ width: '400px', height: '400px', top: '-150px', left: '-150px' }}></div>
                        <div className="glowing-orb orb2" style={{ width: '400px', height: '400px', bottom: '-150px', right: '-150px' }}></div>
                    </div>
                    <div className="relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="flex -space-x-4">
                               <img className="inline-block h-16 w-16 rounded-full ring-2 ring-gray-800" src="https://i.pravatar.cc/150?u=a" alt="User"/>
                               <img className="inline-block h-16 w-16 rounded-full ring-2 ring-gray-800" src="https://i.pravatar.cc/150?u=b" alt="User"/>
                               <img className="inline-block h-16 w-16 rounded-full ring-2 ring-gray-800" src="https://i.pravatar.cc/150?u=c" alt="User"/>
                            </div>
                        </div>
                        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                            Ready to Make a Difference?
                        </h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
                           Our Courses will help you learn the most valuable skills to help you make a difference in your Life.
                        </p>
                        <div className="mt-10">
                            <a href="#" className="inline-block px-10 py-5 text-xl font-bold text-black bg-gradient-to-r from-[#4dffc3] to-cyan-400 rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(77,255,195,0.6)] animate-pulse-slow">
                                Start with Our Courses!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
