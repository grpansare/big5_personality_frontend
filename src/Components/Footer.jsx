import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { FaLightbulb, FaCheckCircle, FaSmileBeam, FaHandshake, FaHeartbeat, FaHeadset, FaQuestionCircle, FaShippingFast, FaUndo } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer bg-gray-700">
      <div className="top">
        <div>
          <h1 className="footerh1">Big5Test</h1>
          <p>Explore Your Personality with the Big Five Traits</p>
        </div>
        <div className='flex text-white'>
          {/* Social Media Links */}
          <a href="/">
            <FaFacebookSquare size={30} />
          </a>
          <a href="/">
            <FaInstagramSquare size={30} />
          </a>
          <a href="/">
            <FaTwitterSquare size={30} />
          </a>
          <a href="/">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Quick Links</h4>
          <a href="/" className="links">
            <FaLightbulb size={18} /> Home
          </a>
          <a href="/about" className="links">
            <FaLightbulb size={18} /> About Us
          </a>
          <a href="/test" className="links">
            <FaLightbulb size={18} /> Take the Test
          </a>
          <a href="/results" className="links">
            <FaLightbulb size={18} /> Your Results
          </a>
        </div>
        <div>
          <h4>Personality Traits</h4>
          <a href="/openness" className="links">
            <FaLightbulb size={18} /> Openness
          </a>
          <a href="/conscientiousness" className="links">
            <FaCheckCircle size={18} /> Conscientiousness
          </a>
          <a href="/extraversion" className="links">
            <FaSmileBeam size={18} /> Extraversion
          </a>
          <a href="/agreeableness" className="links">
            <FaHandshake size={18} /> Agreeableness
          </a>
          <a href="/neuroticism" className="links">
            <FaHeartbeat size={18} /> Neuroticism
          </a>
        </div>
        <div>
          <h4>Customer Service</h4>
          <a href="/contact" className="links">
            <FaHeadset size={18} /> Contact Us
          </a>
          <a href="/faq" className="links">
            <FaQuestionCircle size={18} /> FAQs
          </a>
          <a href="/shipping" className="links">
            <FaShippingFast size={18} /> Shipping Information
          </a>
          <a href="/returns" className="links">
            <FaUndo size={18} /> Returns & Exchanges
          </a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/license">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
