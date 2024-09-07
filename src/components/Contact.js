import React, { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={formRef}
      className={`w-full p-8 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-black text-white transition-transform duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center animate-fadeIn">
        Get In Touch
      </h2>

      <form
        className="space-y-6 animate-slideIn"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted!');
        }}
      >
        {/* Name Input */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500">
            👤
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full pl-12 p-4 bg-gray-700 text-gray-200 rounded-md outline-none focus:border-yellow-400 transition-all duration-300"
            required
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500">
            📧
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full pl-12 p-4 bg-gray-700 text-gray-200 rounded-md outline-none focus:border-yellow-400 transition-all duration-300"
            required
          />
        </div>

        {/* Subject Input */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500">
            📝
          </span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full pl-12 p-4 bg-gray-700 text-gray-200 rounded-md outline-none focus:border-yellow-400 transition-all duration-300"
            required
          />
        </div>

        {/* Message Input */}
        <div className="relative">
          <span className="absolute left-3 top-4 text-xl text-gray-500">
            💬
          </span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full pl-12 p-4 bg-gray-700 text-gray-200 rounded-md outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-yellow-400 text-gray-800 font-bold rounded-md hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          Send Message
        </button>
      </form>

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
