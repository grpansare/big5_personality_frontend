import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './testimonial.css'

const TestimonialCarousel = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop through testimonials
    speed: 500, // Transition speed
    slidesToShow: 1, // Show 1 testimonial at a time
    slidesToScroll: 1, // Scroll 1 testimonial at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay
  };

  const testimonials = [
    {
      name: "John Doe",
      text: "This test was a great way to learn more about my personality traits. Highly recommend it to anyone!",
      location: "New York, USA",
    },
    {
      name: "Jane Smith",
      text: "I was amazed by the accuracy of the results. It really helped me understand myself better.",
      location: "London, UK",
    },
    {
      name: "Mark Johnson",
      text: "An insightful and eye-opening experience. The test was easy to take and the results were spot on.",
      location: "Sydney, Australia",
    },
  ];

  return (
    <div className="testimonial-carousel">
      <h2 className="text-center text-3xl font-semibold my-6">What Our Users Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide text-center p-6">
            <div className="testimonial-icon">
              <FaQuoteLeft className="text-gray-400 text-3xl mb-4" />
            </div>
            <p className="text-lg italic text-gray-700">{testimonial.text}</p>
            <div className="testimonial-author mt-4">
              <h4 className="font-semibold text-xl">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.location}</p>
            </div>
            <div className="testimonial-icon mt-4">
              <FaQuoteRight className="text-gray-400 text-3xl" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
