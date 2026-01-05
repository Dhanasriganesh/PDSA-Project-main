import React, { useState, useEffect, useRef } from 'react';
import { 
  FaCar, 
  FaPencilRuler, 
  FaBullseye, 
  FaLaptopCode,
  FaPlug,
  FaChartLine,
  FaHospital,
  FaTv,
  FaServer,
  FaPhoneAlt,
  FaBolt,
  FaIndustry,
  FaPlane,
  FaUniversity,
  FaGraduationCap,
  FaShieldAlt,
  FaBoxes,
  FaShoppingCart,
  FaSatellite,
  FaOilCan,
  FaHotel,
  FaBuilding
} from 'react-icons/fa';

// Custom hook for typing animation
const useTypingAnimation = (text, speed = 12) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }
  }, [isVisible, text, speed]);

  return [displayText, elementRef];
};

const industries = [
  { name: 'Automobile & Mobility', icon: FaCar, color: '#DC2626', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Product Design', icon: FaPencilRuler, color: '#EC4899', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Smart Vision', icon: FaBullseye, color: '#DC2626', image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Web Development', icon: FaLaptopCode, color: '#475569', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Platform Integration', icon: FaPlug, color: '#2563EB', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Financial Services', icon: FaChartLine, color: '#059669', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Healthcare', icon: FaHospital, color: '#2563EB', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Media, Entertainment & Gaming', icon: FaTv, color: '#7C3AED', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Technology Enablement', icon: FaServer, color: '#475569', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Telecommunications', icon: FaPhoneAlt, color: '#2563EB', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Energy', icon: FaBolt, color: '#F59E0B', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Consumer & Industrial Products', icon: FaIndustry, color: '#EC4899', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Transportation & Travel', icon: FaPlane, color: '#2563EB', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Banking & Financial', icon: FaUniversity, color: '#4F46E5', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Education', icon: FaGraduationCap, color: '#7C3AED', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Energy & Utility', icon: FaBolt, color: '#F59E0B', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Government', icon: FaBuilding, color: '#475569', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Healthcare & Life Science', icon: FaHospital, color: '#EC4899', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Insurance', icon: FaShieldAlt, color: '#06B6D4', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Logistics & Warehousing', icon: FaBoxes, color: '#F59E0B', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Retail & Consumer Goods', icon: FaShoppingCart, color: '#4F46E5', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Telecom & Media', icon: FaSatellite, color: '#8B5CF6', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Oil & Gas', icon: FaOilCan, color: '#DC2626', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Travel & Hospitality', icon: FaHotel, color: '#0EA5E9', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

function IndustryExperienceSection() {
  const industryText = "You want a strategic partner to understand your market, but you also need them to understand your industry — Since your company is special, we start with a discovery phase to define your distinct brand attributes and benefits. We assist you in recognising business dynamics, identifying shortages, predicting opportunities, and connecting with customers by providing deep industry insights.";
  
  const [typedIndustry, industryRef] = useTypingAnimation(industryText, 12);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section 
      ref={sectionRef}
      className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div 
          ref={industryRef}
          className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block mb-4 sm:mb-5 md:mb-6">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold uppercase tracking-wider border border-blue-100">
              Industry Expertise
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900 px-2">
            Our Industry <span className="text-blue-600">Experience</span>
          </h2>
          
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            {typedIndustry}
            <span className="animate-pulse text-blue-600">|</span>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {industries.map((industry, idx) => {
            const IconComponent = industry.icon;
            const isHovered = hoveredIndex === idx;
            const delay = idx * 0.03;
            
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${delay}s` }}
              >
                {/* Card */}
                <div 
                  className="relative h-full bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    {/* Subtle dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Accent Bar */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 transition-all duration-300 z-10"
                    style={{
                      backgroundColor: industry.color,
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] md:min-h-[180px]">
                    {/* Icon Container */}
                    <div 
                      className="mb-2 sm:mb-3 md:mb-4 flex justify-center transition-all duration-300"
                      style={{
                        transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
                      }}
                    >
                      <div 
                        className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl backdrop-blur-sm transition-all duration-300 shadow-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        }}
                      >
                        <IconComponent 
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-all duration-300" 
                          style={{
                            color: industry.color,
                          }}
                        />
                      </div>
                    </div>

                    {/* Industry Name */}
                    <h3 
                      className="text-xs sm:text-sm font-bold text-white leading-tight transition-all duration-300 drop-shadow-lg px-1"
                      style={{
                        textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                      }}
                    >
                      {industry.name}
                    </h3>
                  </div>

                  {/* Hover Indicator */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 z-10"
                    style={{
                      backgroundColor: industry.color,
                      transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'center',
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-8 sm:mt-12 md:mt-14 lg:mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <button className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-blue-600 text-white rounded-lg font-semibold text-sm sm:text-base shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-300">
            <span>Explore All Industries</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default IndustryExperienceSection;
