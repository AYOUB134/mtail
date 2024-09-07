import React, { useState, useEffect } from 'react';
import logo from './logo.jpg';

export default function Hero() {
  const [actionWord, setActionWord] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const fullWord = 'accelerate';
  const [wordIndex, setWordIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wordIndex < fullWord.length) {
        setActionWord((prevWord) => prevWord + fullWord[wordIndex]);
        setWordIndex((prevIndex) => prevIndex + 1);
      } else {
        setActionWord('');
        setWordIndex(0);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [wordIndex]);

  // Handle scroll to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function for navigation
  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center " id="home">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 bg-opacity-75">
        <div className="container mx-auto px-4">
          <header
            className={`fixed top-0 left-0 w-full text-white flex justify-between items-center py-4 px-6 z-50 transition-all duration-300 ${
              scrolled ? 'bg-gray-900' : 'bg-transparent'
            }`}
          >
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 md:h-16 md:w-16 rounded-full animate-fadeIn transition-transform duration-500 hover:scale-110"
              />
              <span
                className="text-white text-sm sm:text-base md:text-xl lg:text-1xl xl:text-2xl font-extrabold tracking-widest"
                style={{ fontFamily: "'Roboto', sans-serif" }} // Updated Font Family for MTAI SOFTWARE LABS
              >
                MTAI SOFTWARE LABS
              </span>
            </div>

            {/* Desktop Navigation Links with Slide In Animation */}
            <nav className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-8">
              {['Home', 'Services', 'Technologies', 'Projects'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.toLowerCase());
                  }}
                  className="text-white hover:text-yellow-400 font-semibold transition-all duration-500 animate-slideInDown transform hover:scale-110"
                  style={{ animationDelay: `${0.3 * index}s` }}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick('contact');
                }}
                className="bg-yellow-500 text-black px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-500 font-bold transform hover:scale-110"
              >
                Contact Us
              </a>
            </nav>

            {/* Hamburger Menu for Small Screens */}
            <div className="md:hidden flex items-center">
              <button
                className="text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </div>
              </button>

              {/* Mobile Menu */}
              {menuOpen && (
                <div className="absolute top-16 right-4 bg-white rounded-lg shadow-lg p-4 w-40">
                  <ul className="space-y-2">
                    {['Home', 'Services', 'Technologies', 'Projects'].map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="block text-black hover:text-yellow-500 font-semibold transition duration-300"
                          onClick={() => {
                            setMenuOpen(false);
                            handleNavLinkClick(item.toLowerCase());
                          }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#contact"
                        className="block bg-yellow-500 text-black px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-500 font-bold"
                        onClick={() => {
                          setMenuOpen(false);
                          handleNavLinkClick('contact');
                        }}
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </header>

          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center mt-12 md:mt-16 px-4">
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 md:mb-6 animate-slideInUp leading-tight">
              Leading Software Development Company
            </h1>
            <div className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 md:mb-8 animate-typing overflow-hidden border-r-4 border-yellow-400 whitespace-nowrap">
              We <span className="bg-yellow-500 text-black px-2 py-1 rounded-md">{actionWord}</span> your project to success
            </div>
            {/* Hire Now Button */}
            {/* <button className="mt-4 px-6 py-3 md:px-8 md:py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-500 animate-bounce shadow-lg transform hover:scale-110">
              Hire Now
            </button> */}
            <a
  href="#contact"
  className="mt-4 px-6 py-3 md:px-8 md:py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-500 animate-bounce shadow-lg transform hover:scale-110"
>
  Hire Now
</a>

          </div>
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInDown {
          0% {
            transform: translateY(-30px);
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

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-slideInUp {
          animation: slideInUp 1.5s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1.5s ease-out;
        }

        .animate-slideInDown {
          animation: slideInDown 1.2s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }

        .animate-typing {
          animation: typing 2.5s steps(10, end), blink-caret 1s step-end infinite;
        }

        @keyframes blink-caret {
          50% {
            border-color: transparent;
          }
        }

        .animate-bounce {
          animation: bounce 2.5s infinite;
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}









// import React, { useState, useEffect } from 'react';
// import logo from './logo.jpg';

// export default function Hero() {
//   const [actionWord, setActionWord] = useState('');
//   const [menuOpen, setMenuOpen] = useState(false);
//   const fullWord = 'accelerate';
//   const [wordIndex, setWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (wordIndex < fullWord.length) {
//         setActionWord((prevWord) => prevWord + fullWord[wordIndex]);
//         setWordIndex((prevIndex) => prevIndex + 1);
//       } else {
//         setActionWord('');
//         setWordIndex(0);
//       }
//     }, 400);

//     return () => clearInterval(interval);
//   }, [wordIndex]);

//   return (
//     <div className="relative w-full h-screen bg-cover bg-center">
//       <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 bg-opacity-75">
//         <div className="container mx-auto px-4">
//           <header className="fixed top-0 left-0 w-full bg-opacity-75 text-white flex justify-between items-center py-4 px-6 z-50">
//             {/* Logo and Company Name */}
//             <div className="flex items-center space-x-2 md:space-x-4">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="h-12 w-12 md:h-16 md:w-16 rounded-full animate-fadeIn transition-transform duration-500 hover:scale-110"
//               />
//               {/* <span className="text-white text-base sm:text-lg md:text-0xl lg:text-3xl font-extrabold animate-slideInLeft tracking-widest">
//                 MTAI SOFTWARE LABS
//               </span> */}

//           <span className="text-white text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-extrabold animate-slideInLeft tracking-widest">
//             MTAI SOFTWARE LABS
//           </span>

//             </div>

//             {/* Desktop Navigation Links with Slide In Animation */}
//             <nav className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-8">
//               {['Home', 'Services', 'Technologies', 'Projects'].map((item, index) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="text-white hover:text-yellow-400 font-semibold transition-all duration-500 animate-slideInDown transform hover:scale-110"
//                   style={{ animationDelay: `${0.3 * index}s` }}
//                 >
//                   {item}
//                 </a>
//               ))}
//               <a
//                 href="#"
//                 className="bg-yellow-500 text-black px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-500 font-bold transform hover:scale-110"
//               >
//                 Contact Us
//               </a>
//             </nav>

//             {/* Hamburger Menu for Small Screens */}
//             <div className="md:hidden flex items-center">
//               <button
//                 className="text-white focus:outline-none"
//                 onClick={() => setMenuOpen(!menuOpen)}
//               >
//                 <div className="space-y-1">
//                   <span className="block w-6 h-0.5 bg-white"></span>
//                   <span className="block w-6 h-0.5 bg-white"></span>
//                   <span className="block w-6 h-0.5 bg-white"></span>
//                 </div>
//               </button>

//               {/* Mobile Menu */}
//               {menuOpen && (
//                 <div className="absolute top-16 right-4 bg-white rounded-lg shadow-lg p-4 w-40">
//                   <ul className="space-y-2">
//                     {['Home', 'Services', 'Technologies', 'Projects'].map((item) => (
//                       <li key={item}>
//                         <a
//                           href="#"
//                           className="block text-black hover:text-yellow-500 font-semibold transition duration-300"
//                           onClick={() => setMenuOpen(false)}
//                         >
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                     <li>
//                       <a
//                         href="#"
//                         className="block bg-yellow-500 text-black px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-500 font-bold"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         Contact Us
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </header>

//           {/* Hero Content */}
//           <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center mt-12 md:mt-16 px-4">
//             <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 md:mb-6 animate-slideInUp leading-tight">
//               Leading Software Development Company
//             </h1>
//             <div className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 md:mb-8 animate-typing overflow-hidden border-r-4 border-yellow-400 whitespace-nowrap">
//               We <span className="bg-yellow-500 text-black px-2 py-1 rounded-md">{actionWord}</span> your project to success
//             </div>
//             {/* Hire Now Button */}
//             <button className="mt-4 px-6 py-3 md:px-8 md:py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-500 animate-bounce shadow-lg transform hover:scale-110">
//               Hire Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Inline CSS for Animations */}
//       <style jsx>{`
//         @keyframes slideInUp {
//           0% {
//             transform: translateY(50px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slideInLeft {
//           0% {
//             transform: translateX(-100px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slideInDown {
//           0% {
//             transform: translateY(-30px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//           }
//           100% {
//             opacity: 1;
//           }
//         }

//         @keyframes typing {
//           from {
//             width: 0;
//           }
//           to {
//             width: 100%;
//           }
//         }

//         .animate-slideInUp {
//           animation: slideInUp 1.5s ease-out;
//         }

//         .animate-slideInLeft {
//           animation: slideInLeft 1.5s ease-out;
//         }

//         .animate-slideInDown {
//           animation: slideInDown 1.2s ease-out;
//         }

//         .animate-fadeIn {
//           animation: fadeIn 2s ease-in-out;
//         }

//         .animate-typing {
//           animation: typing 2.5s steps(10, end), blink-caret 1s step-end infinite;
//         }

//         @keyframes blink-caret {
//           50% {
//             border-color: transparent;
//           }
//         }

//         .animate-bounce {
//           animation: bounce 2.5s infinite;
//         }

//         @keyframes bounce {
//           0%,
//           20%,
//           50%,
//           80%,
//           100% {
//             transform: translateY(0);
//           }
//           40% {
//             transform: translateY(-10px);
//           }
//           60% {
//             transform: translateY(-5px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
