import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Benefits from './components/Benefits';
import LatestCourses from './components/LatestCourses';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

const App: React.FC = () => {
  return (
    <div className="overflow-hidden relative">
      <Background3D />
      <Header />
      <main>
        <Hero />
        <FeaturedCourses />
        <Benefits />
        <LatestCourses />
        <Categories />
        <Testimonials />
        <Stats />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;