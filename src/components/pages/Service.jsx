import React from 'react';

function Service() {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions that drive business value.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    },
    {
      title: 'Cloud Computing',
      description: 'Migrate to the cloud and scale your infrastructure with confidence. We provide end-to-end cloud solutions.',
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cloud Security', 'Cost Optimization'],
    },
    {
      title: 'DevOps',
      description: 'Streamline development and deployment with modern DevOps practices. Automate your workflows and increase efficiency.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
    },
    {
      title: 'Big Data Technologies',
      description: 'Transform your data into actionable business intelligence. We help you process, analyze, and visualize large datasets.',
      features: ['Data Warehousing', 'Real-time Analytics', 'Data Pipeline Design', 'Business Intelligence'],
    },
    {
      title: 'Web Development',
      description: 'Build modern, scalable web applications that engage users and drive business growth.',
      features: ['Full-Stack Development', 'Progressive Web Apps', 'API Development', 'Performance Optimization'],
    },
    {
      title: 'IoT Solutions',
      description: 'Connect your devices and create smart, interconnected systems that improve efficiency and user experience.',
      features: ['IoT Architecture', 'Device Management', 'Data Integration', 'Security Implementation'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive IT consulting services tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 transform hover:-translate-y-4 border border-blue-100/50 hover:border-blue-300/70 backdrop-blur-sm overflow-hidden p-8"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h2>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                       <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                         <span className="text-blue-500 mr-2 group-hover:text-blue-600 transition-colors duration-300">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Contact us today to discuss how we can help transform your business
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;

