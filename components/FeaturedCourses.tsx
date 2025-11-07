import React from 'react';
import CourseCard from './CourseCard';

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
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2F0ZzNqZHRpczU1dDU2cGJjZ2N6cDBzNmJtb3U5aWZwcG02eHR0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L2d3a72jY2S2w8aW4H/giphy.gif',
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
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajE1Z2VwZ2F0MWJ2YjJma3c4Nmk0dDFscmk0YjU1cjFkaGhoY2w5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qGk8Fv5A4u2Qi33V2d/giphy.gif',
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
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5sM3E2am51ZDRzaHY1NTl0aGk4eHdsYjl0Znd3eHF4M21kMXBqMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L38jKhD2S2n384e9sL/giphy.gif',
  },
];

const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Featured Courses
          </h2>
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

export default FeaturedCourses;