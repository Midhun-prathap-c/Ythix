import React, { useState, useRef, useEffect } from 'react';
import { ArrowRightIcon } from './Icons';

const StatItem: React.FC<{ value: number; label: string; icon: string }> = ({ value, label, icon }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const end = value;
                    if (start === end) return;

                    const duration = 2000;
                    const incrementTime = (duration / end);
                    
                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start === end) clearInterval(timer);
                    }, incrementTime);

                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="text-center">
            <div className="flex items-center justify-center mb-4">
                <img src={icon} alt={`${label} icon`} className="h-10 w-10 mr-3" />
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4dffc3] to-cyan-400">
                    {count}{label.includes('Learners') || label.includes('Courses') ? '+' : ''}
                </span>
            </div>
            <p className="text-lg text-gray-400">{label}</p>
        </div>
    );
};

const Stats: React.FC = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-[#1c1c1c]/60 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden">
                    <div className="glowing-orb-container">
                        <div className="glowing-orb orb1"></div>
                        <div className="glowing-orb orb2"></div>
                    </div>
                    <div className="relative z-10">
                        <div className="text-center mb-10">
                            <div className="inline-block bg-cyan-400/10 text-cyan-400 text-sm font-bold px-4 py-2 rounded-full mb-4">
                                ACHIEVEMENTS
                            </div>
                            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                                Statistical Evaluation
                            </h2>
                            <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
                                We've achieved a lot over the past year helping people across the Globe.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                            <StatItem value={5000} label="Happy Learners" icon="https://i.pinimg.com/originals/c3/8c/99/c38c99f925e0fef0a221235cad33f5d5.gif" />
                            <StatItem value={20} label="Advanced Courses" icon="https://cdn.dribbble.com/users/1595839/screenshots/4333930/media/8d3568c07d396979607a9560a87612f0.gif" />
                            <StatItem value={7} label="Pro Teachers" icon="https://cdn.dribbble.com/users/288987/screenshots/2567848/dribble-prof.gif" />
                            <StatItem value={4.9} label="Customer Rating" icon="https://cdn.dribbble.com/users/2104618/screenshots/11267035/media/364a1329a674797d3a14a382022b7a97.gif" />
                        </div>

                        <div className="text-center">
                            <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-black bg-gradient-to-r from-[#4dffc3] to-cyan-400 rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(77,255,195,0.5)]">
                                More About Us
                                <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
