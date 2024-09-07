import React, { useState, useEffect, useRef } from 'react';

// Sample review data
const reviews = [
  {
    name: 'John Doe',
    review: 'Amazing experience! The project exceeded my expectations with seamless execution.',
    rating: 5,
    image: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    name: 'Jane Smith',
    review: 'Fantastic service and outstanding results. Highly recommend their work!',
    rating: 4,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Alice Johnson',
    review: 'Professional and efficient, delivered exactly what was promised.',
    rating: 5,
    image: 'https://via.placeholder.com/150',
  },
];

export default function Reviews() {
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
        Client Reviews
        <span className="block w-20 h-1 bg-orange-500 mx-auto mt-2"></span>
      </h2>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl group animate-slideIn"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Review Image and Content */}
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-700 flex flex-col items-center text-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-yellow-400 transition-transform duration-500 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {review.name}
              </h3>
              <p className="text-gray-300 mb-4">{review.review}</p>
              <div className="flex space-x-1 justify-center">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span
                    key={i}
                    className="text-yellow-500 text-xl animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - review.rating }, (_, i) => (
                  <span key={i} className="text-gray-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
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

        .animate-bounce {
          animation: bounce 0.5s infinite alternate;
        }

        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
