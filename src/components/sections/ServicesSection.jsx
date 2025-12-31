import React from 'react';
import { AIIcon, CloudIcon, DevOpsIcon, BigDataIcon, WebDevIcon, IoTIcon } from '../icons/ServiceIcons';

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

function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
              <div className="w-16 h-16 mb-6 text-blue-600 mx-auto flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;