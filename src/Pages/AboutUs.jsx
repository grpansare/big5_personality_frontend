import React from 'react';
import { FaHandshake, FaGlobe, FaUsers, FaTrophy } from 'react-icons/fa';
import Corousel from '../Components/carousel';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import image from '../assets/Images/P1.jpeg';

const AboutUs = () => {
  const values = [
    {
      id: 1,
      title: 'Commitment to Accuracy',
      description: 'We strive to provide scientifically validated personality assessments that offer meaningful insights.',
      icon: <FaTrophy className="h-8 w-8 text-yellow-500" />,
    },
    {
      id: 2,
      title: 'Global Reach',
      description: 'Our platform is accessible to users worldwide, promoting self-awareness across cultures and communities.',
      icon: <FaGlobe className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 3,
      title: 'User-Centered Approach',
      description: 'We prioritize ease of use and clarity, ensuring everyone can benefit from our assessments.',
      icon: <FaUsers className="h-8 w-8 text-green-500" />,
    },
    {
      id: 4,
      title: 'Collaboration & Growth',
      description: 'We work with psychologists and researchers to continuously enhance our offerings.',
      icon: <FaHandshake className="h-8 w-8 text-purple-500" />,
    },
  ];

  return (
    <>
       {/* <Header/> */}
    <Corousel/>
    <div className="w-full px-6 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 mb-8">
          We are a passionate team dedicated to helping individuals better understand themselves through the lens of
          personality science. Our mission is to make self-awareness accessible to everyone, empowering personal growth
          and fostering meaningful connections.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          To provide reliable, insightful, and user-friendly personality assessments that inspire individuals to
          discover their unique traits and achieve their fullest potential.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {values.map((value) => (
          <div key={value.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center mt-12">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
  <p className="text-gray-600 mb-8">
   
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
    {[
      { name: 'Ganesh Pansare', role: 'Team Member' },
      { name: 'Atharv Raut', role:"Team Member" },
    ].map((member, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-8 w-80 h-80"
      >
        <div className="w-28 h-32 rounded-full mb-6">
          <img src={image} alt=""  className='rounded-full' />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-gray-500">{member.role}</p>
      </div>
    ))}
  </div>
</div>


      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us on a Journey of Discovery</h2>
        <p className="text-gray-600 mb-6">
          Take the Big Five Personality Test today and uncover insights that can change your life for the better.
        </p>
        <a
          href="/take-the-test"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-all"
        >
          Take the Test Now
        </a>
      </div>
    </div>
   
    </>
  );
};

export default AboutUs;
