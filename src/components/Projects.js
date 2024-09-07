import React, { useState, useEffect, useRef } from 'react';

// Sample project data
const projects = [
  {
    title: 'Project One',
    description: 'An innovative project using modern technologies.',
    image: 'https://via.placeholder.com/400', // Placeholder image
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A groundbreaking app with seamless user experience.',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A robust web solution tailored for business needs.',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animations when the component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  return (
    <div
      ref={sectionRef}
      className={`w-full p-8 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-black text-white transition-transform duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400 animate-fadeIn">
        Our Projects
        <span className="block w-20 h-1 bg-orange-500 mx-auto mt-2"></span>
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl group animate-slideIn"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Project Image with Overlay Button */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <button className="px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300">
                  View Live
                </button>
              </a>
            </div>
            
            {/* Card Content */}
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-700">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
            </div>
          </div>
        ))}
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
          animation: slideIn 1s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
