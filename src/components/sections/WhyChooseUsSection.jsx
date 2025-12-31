import React from 'react';

const whyChooseUs = [
  {
    title: 'Minimal Timelines',
    description: 'Get Your Projects Done Quickly and Efficiently with PDSA Technologies.',
    icon: '⚡',
    percentage: '60%',
  },
  {
    title: 'Effective Communication',
    description: 'Unlock Your Company\'s Potential With Effective Communication Strategies.',
    icon: '💬',
    percentage: '95%',
  },
  {
    title: 'High Quality Standards',
    description: 'Get Professional IT Solutions to Create the Perfect Start-Up.',
    icon: '⭐',
    percentage: '70%',
  },
];

function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-600 mb-4">One of the pioneers of IT solutions is PDSA Technologies.</p>
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer our clients the advantage of having hardworking, committed, and talented manpower on demand, wherever and whenever they are needed, at a cost that fits their development budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyChooseUs.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 group">
              <div className="text-5xl font-bold text-blue-600 mb-4">{feature.percentage}</div>
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;