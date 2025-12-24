import React from 'react';
import { AIIcon, CloudIcon, DevOpsIcon, BigDataIcon, WebDevIcon, IoTIcon } from '../../icons/ServiceIcons';

function ServicesSection() {
  // Services with icons
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes and gain insights.',
      icon: <AIIcon />,
    },
    {
      title: 'Cloud Computing',
      description: 'Migrate to the cloud and scale your infrastructure with confidence.',
      icon: <CloudIcon />,
    },
    {
      title: 'DevOps',
      description: 'Streamline development and deployment with modern DevOps practices.',
      icon: <DevOpsIcon />,
    },
    {
      title: 'Big Data Technologies',
      description: 'Transform your data into actionable business intelligence.',
      icon: <BigDataIcon />,
    },
    {
      title: 'Web Development',
      description: 'Build modern, scalable web applications that engage users.',
      icon: <WebDevIcon />,
    },
    {
      title: 'IoT Solutions',
      description: 'Connect your devices and create smart, interconnected systems.',
      icon: <IoTIcon />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 p-10 rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 transform hover:-translate-y-4 border border-blue-100/50 hover:border-blue-300/70 backdrop-blur-sm overflow-hidden"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="text-blue-500 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 drop-shadow-lg group-hover:drop-shadow-2xl">
                    {service.icon}
                  </div>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 rounded-full mx-auto group-hover:w-32 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;



