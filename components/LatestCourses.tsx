import React from 'react';
import CourseCard from './CourseCard';
import { ArrowRightIcon } from './Icons';

const courses = [
  {
    category: 'Web Design',
    title: 'Web Design Mastery Course',
    description: 'Master the art of web design with our comprehensive course. Learn HTML, CSS, and cutting-edge design principles.',
    author: 'Kevin Marko',
    authorImage: 'https://i.pravatar.cc/150?u=kevinmarko',
    rating: 5,
    price: 99,
    duration: '20h 10min',
    lessons: 10,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3N5Z3Rxb3FmMHNoeTZzcXNrOWFqajdmb2Zob3ZmcjQydjRzMXg1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lI4bYmcsbM4CEA/giphy.gif',
  },
  {
    category: 'Video Editing',
    title: 'Master Video Editing',
    description: 'Unleash creativity, master the art of video editing. Comprehensive course. Start today and sharpen your skills in no time!',
    author: 'Kevin Marko',
    authorImage: 'https://i.pravatar.cc/150?u=kevinmarko',
    rating: 5,
    price: 129,
    duration: '15h 29m',
    lessons: 14,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWludHZtZ3RjZzExZTc0bjhzaWI0b3dzMDI5a3g1czFnbTZqamw1ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn96lj93szn0iYw/giphy.gif',
  },
  {
    category: 'Digital Marketing',
    title: 'Digital Marketing Course',
    description: 'Boost your business and career with our digital marketing course. Learn strategies, tools, and analytics for success!',
    author: 'Kevin Marko',
    authorImage: 'https://i.pravatar.cc/150?u=kevinmarko',
    rating: 5,
    price: 79,
    duration: '10h 40min',
    lessons: 10,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWd4bm5zOXpjdGNnM3Q0ajNpcjZmb3B6aWw4bW9hYXZmM3RhdGFqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VJZt3dwnnKjdS/giphy.gif',
  },
];

const LatestCourses: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4 md:mb-0">
                Latest Courses
            </h2>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gray-800/80 rounded-xl hover:bg-gray-700/80 transition-colors duration-300">
                View All Courses
                <ArrowRightIcon className="h-5 w-5 ml-2" />
            </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCourses;