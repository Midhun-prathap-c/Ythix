import React from 'react';
import { SparklesIcon, ArrowRightIcon } from './Icons';

const imagesCol1 = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGlpZzFkZmp3ZGJtdGN6eThjdWk1bzZ2ZzNtdHZhb2N3MnA2eTgxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Mhntx6sqf2I7K/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjg1MjNmMnlubGZicmx3eWc4dnl6dTlhaWJyY21qNTgyYnF0d2E3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kAuYdZddAy9yOCd34a/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajE1Z2VwZ2F0MWJ2YjJma3c4Nmk0dDFscmk0YjU1cjFkaGhoY2w5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qGk8Fv5A4u2Qi33V2d/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDBidjZqYm02Nm1vZXplYTNmN2V3MjFpZHV0ejJ0b2FwYnY4ZWFjayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1I1Mr2iXf4m2Q/giphy.gif",
];

const imagesCol2 = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3N5Z3Rxb3FmMHNoeTZzcXNrOWFqajdmb2Zob3ZmcjQydjRzMXg1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lI4bYmcsbM4CEA/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWd4bm5zOXpjdGNnM3Q0ajNpcjZmb3B6aWw4bW9hYXZmM3RhdGFqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VJZt3dwnnKjdS/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWludHZtZ3RjZzExZTc0bjhzaWI0b3dzMDI5a3g1czFnbTZqamw1ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn96lj93szn0iYw/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5sM3E2am51ZDRzaHY1NTl0aGk4eHdsYjl0Znd3eHF4M21kMXBqMCZlcD12MV9pbnRlcm5hbF_naWZfYnlfaWQmY3Q9Zw/L38jKhD2S2n384e9sL/giphy.gif",
];

const HeroImage: React.FC<{ src: string }> = ({ src }) => (
    <div className="bg-gray-900/50 rounded-2xl overflow-hidden aspect-square hero-image-card transition-all duration-300">
        <img src={src} className="w-full h-full object-cover" alt="Futuristic animation" />
    </div>
);

const Hero: React.FC = () => {
    return (
        <section className="relative py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
                <div className="relative z-10 text-center md:text-left">
                    <div className="inline-flex items-center space-x-2 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 mb-6">
                        <SparklesIcon className="h-5 w-5 text-[#4dffc3]" />
                        <span className="text-sm text-gray-300">Next-Gen Learning Platform</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                        Unlock Your Potential. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4dffc3] to-cyan-400">Expand Your Skills.</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto md:mx-0 text-lg text-gray-400">
                        Create Beautiful Membership Sites to Sell your Courses or any other products using the YTHIX Template. Utilize modern auth and payment solutions for a seamless user experience.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-[#4dffc3] to-cyan-400 rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(77,255,195,0.5)]">
                            Explore Our Courses
                            <ArrowRightIcon className="h-6 w-6 ml-3" />
                        </a>
                        <div className="flex items-center">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" className="h-10 w-10 rounded-full border-2 border-gray-700" alt="Student"/>
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="h-10 w-10 rounded-full border-2 border-gray-700 -ml-3" alt="Student"/>
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="h-10 w-10 rounded-full border-2 border-gray-700 -ml-3" alt="Student"/>
                            <div className="ml-4 text-left">
                                <p className="text-white font-semibold">5,000+</p>
                                <p className="text-gray-400 text-sm">Happy Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="relative h-[500px] md:h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                    <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2 gap-4">
                        <div className="space-y-4 animate-scroll-down">
                            {[...imagesCol1, ...imagesCol1].map((src, index) => <HeroImage key={`col1-${index}`} src={src} />)}
                        </div>
                        <div className="space-y-4 animate-scroll-up">
                            {[...imagesCol2, ...imagesCol2].map((src, index) => <HeroImage key={`col2-${index}`} src={src} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
