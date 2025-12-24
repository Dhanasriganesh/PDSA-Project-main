import React from 'react';

function IndustryExperienceSection() {
  const industries = [
    { name: 'Banking & Financial', icon: '🏦' },
    { name: 'Education', icon: '🎓' },
    { name: 'Energy & Utility', icon: '⚡' },
    { name: 'Government', icon: '🏛️' },
    { name: 'Healthcare & Life Science', icon: '🏥' },
    { name: 'Insurance', icon: '🛡️' },
    { name: 'Logistics & Warehousing', icon: '📦' },
    { name: 'Retail & Consumer Goods', icon: '🛒' },
    { name: 'Telecom & Media', icon: '📱' },
    { name: 'Oil & Gas', icon: '⛽' },
    { name: 'Travel & Hospitality', icon: '✈️' },
    { name: 'E-Commerce', icon: '🛍️' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Our Industry Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            You want a strategic partner to understand your market, but you also need them to understand your industry — 
            Since your company is special, we start with a discovery phase to define your distinct brand attributes and benefits. 
            We assist you in recognising business dynamics, identifying shortages, predicting opportunities, and connecting with 
            customers by providing deep industry insights.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-blue-100/50 hover:border-blue-300/70 backdrop-blur-sm overflow-hidden text-center"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 drop-shadow-lg">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryExperienceSection;


