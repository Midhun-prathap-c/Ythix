import React from 'react';
import { ArrowRightIcon } from './Icons';

interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description }) => (
    <div className="futuristic-card relative bg-[#1c1c1c]/60 backdrop-blur-md border border-gray-800 rounded-3xl p-8 transition-all duration-300 group">
        <div className="mb-6 inline-block bg-gray-800 p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110">
            <img src={icon} alt={`${title} icon`} className="h-10 w-10" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const categories = [
  {
    icon: 'https://i.pinimg.com/originals/43/3d/89/433d893922f04e752a781335b187515e.gif',
    title: 'Website Design',
    description: 'Our Web Design courses allow you to Create stunning Websites.',
  },
  {
    icon: 'https://i.pinimg.com/originals/05/9a/21/059a215338275e113a373516c91a787b.gif',
    title: 'Digital Marketing',
    description: 'Be a Digital Marketing Expert with our Easy to Follow Courses.',
  },
  {
    icon: 'https://cdn.dribbble.com/users/231149/screenshots/2513429/dribbble.gif',
    title: 'Video Editing',
    description: 'Start Shipping Next Level Edits with our Video Editing Courses.',
  },
  {
    icon: 'https://cdn.dribbble.com/users/432349/screenshots/2028637/programing-s.gif',
    title: 'Coding',
    description: 'Explore our Coding Courses to develop all kinds of programs.',
  },
  {
    icon: 'https://cdn.dribbble.com/users/1358055/screenshots/3903109/4.gif',
    title: 'Content Writing',
    description: 'Write Stunning content with our Content Writing Courses.',
  },
  {
    icon: 'https://cdn.dribbble.com/users/1094629/screenshots/3322436/search.gif',
    title: 'SEO',
    description: 'Be seen on the Top of Search Results with our SEO Courses.',
  },
];


const Categories: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 text-center lg:text-left">
                <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                    Browse by Course Category
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                    Browse Courses through Categories to find the Perfect Course.
                </p>
                <a href="#" className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gray-800/80 rounded-xl hover:bg-gray-700/80 transition-colors duration-300">
                    Browse All Categories
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                </a>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <CategoryCard key={index} {...category} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
