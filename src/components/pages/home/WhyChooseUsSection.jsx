import React from 'react';

function WhyChooseUsSection() {
  // Why Choose Us features with percentages like MetrixIT
  const whyChooseUs = [
    {
      percentage: '60%',
      title: 'Minimal Timelines',
      description: 'Get Your Projects Done Quickly and Efficiently with PDSA Technologies.',
      icon: '⚡',
    },
    {
      percentage: '95%',
      title: 'Effective Communication',
      description: 'Unlock Your Company\'s Potential With Effective Communication Strategies.',
      icon: '💬',
    },
    {
      percentage: '70%',
      title: 'High Quality Standards',
      description: 'Get Professional IT Solutions to Create the Perfect Start-Up.',
      icon: '⭐',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            One of the pioneers of IT solutions is PDSA Technologies.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            We offer our clients the advantage of having hardworking, committed, and talented manpower on demand, 
            wherever and whenever they are needed, at a cost that fits their development budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {whyChooseUs.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/60 backdrop-blur-sm rounded-3xl p-10 text-center border border-blue-200/50 hover:border-blue-400/70 transition-all duration-700 transform hover:-translate-y-6 shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/60"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold mb-4 text-blue-600 group-hover:scale-125 transition-all duration-700">
                  {feature.percentage}
                </div>
                <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 drop-shadow-lg group-hover:drop-shadow-2xl">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;


