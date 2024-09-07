import React, { useEffect, useState, useRef } from 'react';
import facebook from './facebook.jpeg';
import linkedin from './linkedin.png';
import instagram from './instagram.jpeg';

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animations when the component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`w-full py-8 px-6 bg-gradient-to-br from-gray-800 to-black text-white transition-transform duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Quick Links */}
        <div className="flex flex-col items-center space-y-3 text-center animate-slideIn">
          <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
          <ul className="flex space-x-4 text-gray-400">
            {['Home', 'Services', 'Projects', 'Contact'].map((link, index) => (
              <li
                key={index}
                className="hover:text-yellow-400 transition-all duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-3 text-center animate-slideIn">
          <h3 className="text-lg font-semibold text-yellow-400">Contact</h3>
          <p className="text-gray-400 hover:text-yellow-400 transition-all duration-300">
           helowmtai1@gmail.com
          </p>
          <p className="text-gray-400 hover:text-yellow-400 transition-all duration-300">
          +92310-1564855
          </p>
        </div>

        {/* Social Media */}
        <div className="flex items-center space-x-6 animate-slideIn">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center transition-transform duration-500 hover:scale-110"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="w-full h-full object-contain"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center transition-transform duration-500 hover:scale-110"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="w-full h-full object-contain"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center transition-transform duration-500 hover:scale-110"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-500 text-sm animate-fadeIn">
        © 2024 MTAI Software Labs. All rights reserved.
      </div>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out;
        }
      `}</style>
    </footer>
  );
}
