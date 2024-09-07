import React, { useState, useEffect, useRef } from 'react';
import  Proimg1 from './projectimgs/webpro1.PNG'
import  Proimg2 from './projectimgs/webapp2.PNG'
import  Proimg3 from './projectimgs/webpro3.PNG'
import  Proimg4 from './projectimgs/webpro4.PNG'
// import  Proimg5 from './projectimgs/canyundashborad.PNG'
// import  Proimg5 from './projectimgs/webapp1.PNG'
import  Proimg5 from './projectimgs/webpro2.PNG'
import  Proimg6 from './projectimgs/canyundashborad.PNG'

// Sample project data
const projects = [
  {
    title: 'MERN Mediastream',
    description: 'A full-stack application with MongoDB, Express, React, and Node.js for media uploading and streaming. Showcases the MERN stack’s scalability.',
    image: Proimg1, // Placeholder image
    link: 'http://mediastream2.mernbook.com/',
  },
  {
    title: 'Ant Design Mobile',
    description: 'A mobile UI library with smooth animations and customizable themes. Offers a comprehensive set of components for engaging mobile apps.',
    image: Proimg2,
    link: 'https://mobile.ant.design/',
  },
  {
    title: 'GrapesJS',
    description: 'An open-source web builder for creating HTML templates without coding. Features drag-and-drop tools and responsive design options.',
    image: Proimg3,
    link: 'https://grapesjs.com/',
  },
  {
    title: 'Admin Panel',
    description: 'A data management panel with tables, forms, and nested views. Provides a comprehensive dashboard for organizing and monitoring records.',
    image: Proimg4,
    link: 'https://panjiachen.github.io/vue-admin-template/#/example/table',
  },
  {
    title: 'B-School Website Redesign',
    description: 'A business school website with sections on courses, knowledge, events, and fees. Includes management profiles and a contact form.',
    image: Proimg5,
    link: 'https://learning-zone.github.io/website-templates/b-school-free-education-html5-website-template/',
  },
  {
    title: 'Admin Dashboard CMS',
    description: 'An admin dashboard for managing users, posts, live applications, and more. Provides an overview of system activities and management features.',
    image: Proimg6,
    link: 'https://kanuya.love/index',
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
