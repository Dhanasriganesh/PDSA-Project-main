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
const useTypingAnimation = (text, speed = 50) => {
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
  { name: 'Automobile & Mobility', icon: FaCar, color: 'text-red-600' },
  { name: 'Product Design', icon: FaPencilRuler, color: 'text-pink-600' },
  { name: 'Smart Vision', icon: FaBullseye, color: 'text-red-600' },
  { name: 'Web Development', icon: FaLaptopCode, color: 'text-gray-600' },
  { name: 'Platform Integration', icon: FaPlug, color: 'text-blue-600' },
  { name: 'Financial Services', icon: FaChartLine, color: 'text-green-600' },
  { name: 'Healthcare', icon: FaHospital, color: 'text-blue-600' },
  { name: 'Media, Entertainment & Gaming', icon: FaTv, color: 'text-purple-600' },
  { name: 'Technology Enablement', icon: FaServer, color: 'text-gray-600' },
  { name: 'Telecommunications', icon: FaPhoneAlt, color: 'text-blue-600' },
  { name: 'Energy', icon: FaBolt, color: 'text-orange-600' },
  { name: 'Consumer & Industrial Products', icon: FaIndustry, color: 'text-pink-600' },
  { name: 'Transportation & Travel', icon: FaPlane, color: 'text-blue-600' },
  { name: 'Banking & Financial', icon: FaUniversity, color: 'text-indigo-600' },
  { name: 'Education', icon: FaGraduationCap, color: 'text-purple-600' },
  { name: 'Energy & Utility', icon: FaBolt, color: 'text-orange-600' },
  { name: 'Government', icon: FaBuilding, color: 'text-gray-600' },
  { name: 'Healthcare & Life Science', icon: FaHospital, color: 'text-pink-600' },
  { name: 'Insurance', icon: FaShieldAlt, color: 'text-cyan-600' },
  { name: 'Logistics & Warehousing', icon: FaBoxes, color: 'text-amber-600' },
  { name: 'Retail & Consumer Goods', icon: FaShoppingCart, color: 'text-indigo-600' },
  { name: 'Telecom & Media', icon: FaSatellite, color: 'text-violet-600' },
  { name: 'Oil & Gas', icon: FaOilCan, color: 'text-red-600' },
  { name: 'Travel & Hospitality', icon: FaHotel, color: 'text-sky-600' },
];

function IndustryExperienceSection() {
  const industryText = "You want a strategic partner to understand your market, but you also need them to understand your industry — Since your company is special, we start with a discovery phase to define your distinct brand attributes and benefits. We assist you in recognising business dynamics, identifying shortages, predicting opportunities, and connecting with customers by providing deep industry insights.";
  
  const [typedIndustry, industryRef] = useTypingAnimation(industryText, 12);
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Industry Experience
          </h2>
          <div ref={industryRef} className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {typedIndustry}<span className="animate-pulse">|</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {industries.map((industry, idx) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-blue-100/50 hover:border-blue-300/70 backdrop-blur-sm overflow-hidden text-center"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="absolute inset-[1px] rounded-lg bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-all duration-500">
                    <IconComponent className={`text-2xl md:text-3xl ${industry.color} group-hover:scale-110 transition-all duration-300`} />
                  </div>
                  <h3 className="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {industry.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustryExperienceSection;
