import React, { useRef, useState } from 'react';
import { StarIcon, ClockIcon, BookOpenIcon, ArrowRightIcon } from './Icons';

interface CourseCardProps {
  category: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  rating: number;
  price: number;
  duration: string;
  lessons: number;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  category, title, description, author, authorImage, rating, price, duration, lessons, image
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('none');

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (y / height) * -20;
    const rotateY = (x / width) * 20;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const onMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');
  };
  
  return (
    <div 
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ transform, transition: 'transform 0.1s' }}
        className="bg-[#1c1c1c]/60 backdrop-blur-md border border-gray-800 rounded-3xl p-6 flex flex-col group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <div className="relative mb-4">
        <img src={image} alt={title} className="rounded-2xl w-full h-48 object-cover" />
        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">{category}</div>
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white font-bold text-sm px-4 py-2 rounded-full">${price}</div>
      </div>

      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className={`h-5 w-5 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
        ))}
        <span className="ml-2 text-sm text-gray-400">Rated {rating} Stars</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      
      <div className="flex items-center my-4">
        <img src={authorImage} alt={author} className="h-10 w-10 rounded-full object-cover" />
        <span className="ml-3 text-gray-300">{author}</span>
      </div>

      <p className="text-gray-400 text-sm mb-6 flex-grow">{description}</p>
      
      <div className="border-y border-gray-800 py-4 flex justify-around text-sm text-gray-400 mb-6">
        <div className="flex items-center">
            <ClockIcon className="h-5 w-5 mr-2 text-cyan-400"/>
            <span>{duration}</span>
        </div>
        <div className="flex items-center">
            <BookOpenIcon className="h-5 w-5 mr-2 text-cyan-400"/>
            <span>{lessons} Lessons</span>
        </div>
      </div>

      <a href="#" className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gray-800/80 rounded-xl group-hover:bg-gradient-to-r group-hover:from-[#4dffc3] group-hover:to-cyan-400 group-hover:text-black transition-all duration-300">
        View Course
        <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default CourseCard;
