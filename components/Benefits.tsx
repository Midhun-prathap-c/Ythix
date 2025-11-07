import React from 'react';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
    <div className="futuristic-card bg-[#1c1c1c]/60 backdrop-blur-md border border-gray-800 rounded-3xl p-8 text-center transition-all duration-300">
        <div className="mb-6 inline-block">
            <img src={icon} alt={`${title} icon`} className="h-16 w-16" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const benefits = [
  {
    icon: 'https://cdn.dribbble.com/users/915720/screenshots/3855073/blue-robot.gif',
    title: 'Built by Professionals',
    description: 'Get the best Experience knowing that our Courses are built by Professionals.',
  },
  {
    icon: 'https://i.pinimg.com/originals/c1/a9/35/c1a9359b1392a8315186b3d16274b745.gif',
    title: 'Get Completion Awards',
    description: 'Get Completion Award from our Team to boost motivation & success.',
  },
  {
    icon: 'https://cdn.dribbble.com/users/224444/screenshots/4383321/media/e48f80479f6b4a3c61394149a42a8b32.gif',
    title: 'Fast Chat Support',
    description: 'Need help? We’re just a Quick Chat Away. Available 24/7/365.',
  },
  {
    icon: 'https://cdn.dribbble.com/users/1299339/screenshots/3127542/rocket-dribbble-2.gif',
    title: 'Lifetime Access',
    description: 'With Just One Payment, you’ll get Lifetime Access to the Course.',
  },
  {
    icon: 'https://cdn.dribbble.com/users/335352/screenshots/3322122/media/43474a581896172033c990664e430480.gif',
    title: 'Access to Private Community',
    description: 'Get Access to our Private Community and Meet Like Minded People & grow.',
  },
  {
    icon: 'https://cdn.dribbble.com/users/490933/screenshots/2530438/dribbble_2.gif',
    title: 'Download for Offline Viewing',
    description: 'Our Courses can be Download, allowing you to watch them even on an Airplane.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="inline-block bg-cyan-400/10 text-cyan-400 text-sm font-bold px-4 py-2 rounded-full mb-4">
                AMAZING BENEFITS
            </div>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Stunning Benefits of our Courses
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Explore the incredible advantages of enrolling in our courses and enhancing your skills.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
