import React, { useState, useEffect, useRef } from 'react';

const technologies = [
  { name: 'Web Development', icon: '💻' },
  { name: 'App Development', icon: '📱' },
];

const serviceDetails = {
  'Web Development': [
    'Expertise in frontend technologies like React.js',
    'Backend systems with Node.js',
    'Create attractive and valuable solutions',
    'Ensure intuitive and efficient user experiences',
    'Deliver seamless user experiences',
  ],
  'App Development': [
    'Passionate about developing clean, minimalistic mobile apps',
    'Expertise in Swift for iOS development',
    'Proficient in Kotlin for Android development',
    'Create attractive and valuable solutions',
    'Ensure intuitive and efficient user experiences',
    'Deliver seamless user experiences',
  ],
};

export default function TechnologyServices() {
  const [activeService, setActiveService] = useState('Web Development');
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(0);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Show service details one by one with a delay
  useEffect(() => {
    if (isVisible) {
      let timer = setInterval(() => {
        setVisibleDetails((prev) => {
          if (prev < serviceDetails[activeService].length) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 500);
      return () => clearInterval(timer);
    }
  }, [isVisible, activeService]);

  useEffect(() => {
    setVisibleDetails(0); // Reset visible details when the active service changes
  }, [activeService]);

  return (
    <div
      ref={sectionRef}
      className={`w-full p-8 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-black text-white transition-transform duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {/* Technology Options */}
      <div className="flex justify-center space-x-16 mb-8 animate-slideIn">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer text-lg md:text-xl transition-transform duration-700 ${
              activeService === tech.name
                ? 'text-yellow-400 scale-110'
                : 'text-gray-400'
            }`}
            onClick={() => setActiveService(tech.name)}
          >
            <div
              className={`w-20 h-20 flex items-center justify-center text-4xl bg-gray-700 rounded-lg mb-2 transition-transform duration-700 ${
                activeService === tech.name
                  ? 'border-4 border-yellow-400'
                  : 'border-2 border-gray-500'
              }`}
            >
              {tech.icon}
            </div>
            <p className="text-center font-semibold">{tech.name}</p>
            {activeService === tech.name && (
              <div className="w-full h-1 bg-yellow-400 mt-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* Service Details Section */}
      <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 relative animate-fadeIn">
          SERVICES WE OFFER:
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500"></span>
        </h2>
        <ul className="space-y-2">
          {serviceDetails[activeService].slice(0, visibleDetails).map((detail, index) => (
            <li
              key={index}
              className="flex items-start p-4 bg-gray-800 border border-gray-600 rounded-md shadow-sm transition-transform duration-700 hover:scale-105 animate-slideIn"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <span className="w-3 h-3 bg-yellow-400 rounded-full mt-1 mr-3 flex-shrink-0"></span>
              <span className="text-gray-200">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(-20px);
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
          animation: slideIn 1s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
