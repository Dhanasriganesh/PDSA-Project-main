import React, { useState, useEffect, useRef } from 'react';
import { FaClock, FaComments, FaAward } from 'react-icons/fa';

const whyChooseUs = [
  {
    title: 'Minimal Timelines',
    description: 'Get Your Projects Done Quickly and Efficiently with PDSA Technologies.',
    icon: FaClock,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Fast Delivery', 'Agile Methodology', 'Quick Turnaround'],
  },
  {
    title: 'Effective Communication',
    description: 'Unlock Your Company\'s Potential With Effective Communication Strategies.',
    icon: FaComments,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['24/7 Support', 'Clear Updates', 'Transparent Process'],
  },
  {
    title: 'High Quality Standards',
    description: 'Get Professional IT Solutions to Create the Perfect Start-Up.',
    icon: FaAward,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Certified Team', 'Best Practices', 'Quality Assurance'],
  },
];

function WhyChooseUsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section ref={sectionRef} className="relative py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40"></div>
      
      {/* Animated Diagonal Stripe Pattern */}
      <div className="absolute inset-0 opacity-30 animate-pattern-slide" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(59, 130, 246, 0.03) 10px,
          rgba(59, 130, 246, 0.03) 20px
        )`
      }}></div>
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-100/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-100/20 to-transparent"></div>
      </div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-200/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-l-2 sm:border-l-3 md:border-l-4 border-t-2 sm:border-t-3 md:border-t-4 border-blue-200/30"></div>
      <div className="absolute bottom-0 right-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-r-2 sm:border-r-3 md:border-r-4 border-b-2 sm:border-b-3 md:border-b-4 border-indigo-200/30"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header with Animation */}
        <div className={`text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Our <span className="text-blue-600">Competitive Advantages</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-3 max-w-2xl mx-auto px-2">
            One of the pioneers of IT solutions is PDSA Technologies.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed px-2">
            We offer our clients the advantage of having hardworking, committed, and talented manpower on demand, wherever and whenever they are needed, at a cost that fits their development budget.
          </p>
        </div>
        
        {/* Features Grid with Enhanced Animations */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
          {whyChooseUs.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group relative bg-white rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-[1.02] sm:hover:scale-105 cursor-pointer overflow-hidden border border-gray-100"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
                
                {/* Image Background */}
                <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredIndex === index ? 'scale-125 blur-sm' : 'scale-100 blur-0'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent transition-all duration-500 ${
                    hoveredIndex === index ? `bg-gradient-to-t from-blue-900/60 via-blue-900/30 to-transparent` : ''
                  }`}></div>
                  
                  {/* Icon Overlay with Animation */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center shadow-2xl transition-all duration-500 ${
                      hoveredIndex === index ? 'bg-blue-600 scale-125 rotate-12' : 'bg-white/95 scale-100 rotate-0'
                    }`}>
                      <IconComponent className={`text-2xl sm:text-3xl transition-all duration-500 ${
                        hoveredIndex === index ? 'text-white' : 'text-blue-600'
                      }`} />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6 min-h-[40px] sm:min-h-[48px]">
                    {feature.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5 sm:space-y-2">
                    {feature.features.map((feat, featIndex) => (
                      <div 
                        key={featIndex}
                        className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700 transform transition-all duration-300 ${
                          hoveredIndex === index ? 'translate-x-2' : 'translate-x-0'
                        }`}
                        style={{ transitionDelay: `${featIndex * 0.1}s` }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-blue-600 transition-all duration-300 ${
                          hoveredIndex === index ? 'scale-150' : 'scale-100'
                        }`}></div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl sm:rounded-b-2xl"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/10 blur-2xl transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
