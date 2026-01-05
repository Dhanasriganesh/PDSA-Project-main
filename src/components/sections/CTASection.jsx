import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaRocket, FaUsers, FaAward, FaClock } from 'react-icons/fa';

function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

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

  const benefits = [
    { icon: FaRocket, text: 'Fast Implementation' },
    { icon: FaUsers, text: 'Expert Team' },
    { icon: FaAward, text: 'Quality Assurance' },
    { icon: FaClock, text: '24/7 Support' },
  ];

  return (
    <section ref={sectionRef} className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-white via-blue-50 to-blue-50/50 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Abstract Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-float-cta-1"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-float-cta-2"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border-4 border-blue-300/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-14 h-14 border-2 border-blue-300/30 rotate-12 animate-pulse"></div>
        
        {/* Decorative Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 600" fill="none">
          <path d="M0,300 Q300,100 600,300 T1200,300" stroke="url(#gradient1)" strokeWidth="2" className="animate-path-1"/>
          <path d="M0,400 Q400,200 800,400 T1200,400" stroke="url(#gradient2)" strokeWidth="2" className="animate-path-2"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Side - Content */}
            <div className={`space-y-4 sm:space-y-5 md:space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-block">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border border-blue-200">
                  Let's Get Started
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                <span className="block text-gray-900 mb-1 sm:mb-2">Ready to Build</span>
                <span className="block text-blue-600">
                  Something Amazing?
                </span>
              </h2>
          
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Let's work together to transform your business with cutting-edge technology solutions. Get in touch with our team today and take the first step towards digital transformation.
              </p>
          
              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer group ${
                        isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-600 flex items-center justify-center transform transition-all duration-300 ${
                        hoveredCard === index ? 'scale-110 rotate-6 bg-blue-700' : 'scale-100 rotate-0'
                      }`}>
                        <IconComponent className="text-white text-base sm:text-lg" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                <Link
                  to="/contact"
                  className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-blue-600 text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 hover:bg-blue-700"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Link>
                
                <Link
                  to="/service"
                  className="group px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white border-2 border-gray-300 text-gray-800 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3"
                >
                  <span>Explore Services</span>
                  <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 pt-3 sm:pt-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <FaCheckCircle className="text-blue-600 text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <FaCheckCircle className="text-blue-600 text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <FaCheckCircle className="text-blue-600 text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Fast Delivery</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Enhanced Visual Element */}
            <div className={`relative hidden md:block ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
              <div className="relative w-full h-full min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
                {/* Card Stack Effect with More Cards */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Card 1 */}
                  <div 
                    className="absolute w-44 md:w-48 lg:w-52 h-56 md:h-60 lg:h-64 bg-blue-600 rounded-xl shadow-2xl transform rotate-6 hover:rotate-12 transition-all duration-500 hover:scale-110 group cursor-pointer hover:bg-blue-700"
                    onMouseEnter={() => setHoveredCard('card1')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Innovation</h3>
                      <p className="text-blue-100 text-xs md:text-sm">Cutting-edge solutions</p>
                    </div>
                  </div>
                  
                  {/* Card 2 */}
                  <div 
                    className="absolute w-44 md:w-48 lg:w-52 h-56 md:h-60 lg:h-64 bg-blue-700 rounded-xl shadow-2xl transform -rotate-6 hover:-rotate-12 transition-all duration-500 hover:scale-110 group cursor-pointer hover:bg-blue-800" 
                    style={{ marginTop: '30px' }}
                    onMouseEnter={() => setHoveredCard('card2')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Excellence</h3>
                      <p className="text-blue-100 text-xs md:text-sm">World-class quality</p>
                    </div>
                  </div>
                  
                  {/* Card 3 - Center */}
                  <div 
                    className="absolute w-44 md:w-48 lg:w-52 h-56 md:h-60 lg:h-64 bg-blue-600 rounded-xl shadow-2xl transform hover:scale-115 transition-all duration-500 group cursor-pointer z-10 hover:bg-blue-700"
                    onMouseEnter={() => setHoveredCard('card3')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 md:mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <FaRocket className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Transform</h3>
                        <p className="text-blue-100 text-xs md:text-sm">Your business today</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icons with Animation */}
                <div className="absolute top-6 md:top-8 right-6 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center animate-float-icon-1 group hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <FaCheckCircle className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <div className="absolute bottom-16 md:bottom-20 left-6 md:left-8 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center animate-float-icon-2 group hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <FaAward className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
