import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full pt-20 md:pt-[70px] bg-white overflow-hidden">
      <a href="#category" className="block w-full cursor-pointer overflow-hidden">
        <img 
          src="/hero.avif" 
          alt="Technical Driver Banner" 
          className="w-full h-auto block  duration-700 "
          fetchPriority="high"
          loading="eager"
        />
      </a>
    </section>
  );
};

export default Hero;
