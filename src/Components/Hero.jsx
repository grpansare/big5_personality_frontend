import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero py-10  bg-slate-200">
      <div className="container mx-auto flex mt-3 flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="hero-text text-center md:text-left md:w-1/2 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            Discover Your Personality <br /> with the Big Five Personality Test
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Uncover insights about your traits in 
            <strong> Openness, Conscientiousness, Extraversion, Agreeableness, </strong>
            and <strong>Neuroticism</strong>.
          </p>
          <a
            href="#take-test"
            className="inline-block text-decoration-none  bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition duration-300"
          >
            Take the Test Now
          </a>
        </div>

        {/* Hero Image */}
        <div className="hero-image md:w-1/2 px-4 w-96  mt-6 md:mt-0 flex justify-center">
        <img
  src="/public/big-five-personality-traits-ocean-600nw-2464421715.jpg"

  alt="Big Five Personality Illustration"
  className="rounded-lg shadow-lg hero-image"
  
 />
        </div>
      </div>
    </section>
  );
};

export default Hero;
