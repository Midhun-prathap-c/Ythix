import React from 'react';
import { HeartIcon, ArrowLeftIcon, ArrowRightIcon } from './Icons';

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute -left-20 -top-20">
                <div className="w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
             <div className="absolute -right-20 -bottom-40">
                <div className="w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-green-400/10 text-green-400 text-sm font-bold px-4 py-2 rounded-full mb-4">
                        <HeartIcon className="h-5 w-5"/>
                        <span>HAPPY STUDENTS</span>
                    </div>
                  <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                    Don't Just Take Our Word, Take theirs!
                  </h2>
                  <p className="mt-4 text-lg text-gray-400">
                    Our Students Love Our Courses, so you won’t regret spending on our Courses.
                  </p>
                </div>
                
                <div className="relative max-w-2xl mx-auto">
                    <div className="neomorphism-card bg-[#1a1a1a] border border-gray-800 rounded-3xl p-8 md:p-12 relative z-10 animate-float">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img 
                                src="https://i.pravatar.cc/150?u=markrufalo"
                                alt="Mark Rufallo"
                                className="h-24 w-24 rounded-full object-cover border-4 border-gray-800 shadow-lg"
                            />
                        </div>
                        <p className="text-xl text-center text-gray-300 italic mt-12 mb-8">
                           "I recently used the YTHIX Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze."
                        </p>
                        <div className="text-center">
                            <p className="font-bold text-white text-lg">Mark Rufallo</p>
                            <p className="text-gray-500">Freelance Designer</p>
                        </div>
                    </div>
                    
                    <div className="absolute top-1/2 -left-8 md:-left-16 -translate-y-1/2">
                        <button className="bg-gray-800/50 border border-gray-700 p-4 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
                            <ArrowLeftIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-8 md:-right-16 -translate-y-1/2">
                        <button className="bg-gray-800/50 border border-gray-700 p-4 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
