// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header'; // Adjust the path if necessary
import Hero from '../components/Hero';
import Features from '../components/Services';
import Testimonial from '../components/Testimonial';
import Community from '../components/Community';
import Newsletter from '../components/Newsletter';
import Footer from '../components/footer';

const Home: React.FC = () => {
  return (
    <div>
        <div className='top-0 sticky'>
        <Header />
        </div>
     <div>
     <Hero />
     </div>
     <div>
        <Features />
     </div>
     <div>
        <Testimonial />
     </div>
     <div>
        <Community />
     </div>
     <div>
        <Newsletter />
     </div>
     <div>
        <Footer />
     </div>
    
    </div>
  );
};

export default Home;
