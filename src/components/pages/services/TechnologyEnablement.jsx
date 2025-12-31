import React from 'react';

function TechnologyEnablement() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
            alt="Technology Enablement Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Technology Enablement</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Empower your organization with cutting-edge technology infrastructure and digital transformation strategies
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Accelerate Your Digital Journey
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Transform your business with our comprehensive technology enablement services. From cloud migration 
                to AI integration, we provide the expertise and tools needed for successful digital transformation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">400+</div>
                  <div className="text-sm opacity-90">Digital Transformations</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Technology Solutions</h3>
              <ul className="space-y-4">
                {[
                  'Cloud Migration & Optimization',
                  'AI & Machine Learning Integration',
                  'DevOps & Automation',
                  'Microservices Architecture',
                  'API Development & Management',
                  'Cybersecurity Implementation'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'AWS', color: 'from-orange-500 to-yellow-500' },
                { name: 'Azure', color: 'from-blue-500 to-cyan-500' },
                { name: 'Kubernetes', color: 'from-purple-500 to-indigo-500' },
                { name: 'Docker', color: 'from-blue-600 to-blue-800' },
                { name: 'Terraform', color: 'from-purple-600 to-pink-600' },
                { name: 'Jenkins', color: 'from-red-500 to-orange-500' },
                { name: 'React', color: 'from-cyan-500 to-blue-500' },
                { name: 'Node.js', color: 'from-green-500 to-emerald-500' }
              ].map((tech, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${tech.color} text-white p-6 rounded-xl text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Assessment</h3>
              <p className="text-gray-600">Comprehensive analysis of your current technology landscape and business requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Strategy</h3>
              <p className="text-gray-600">Develop a customized roadmap for digital transformation aligned with your business goals.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Implementation</h3>
              <p className="text-gray-600">Execute the transformation with minimal disruption and maximum efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Ready to Transform Your Technology?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Let's modernize your infrastructure and accelerate your digital transformation journey
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-xl transform hover:-translate-y-1"
          >
            Start Transformation
          </a>
        </div>
      </section>
    </div>
  );
}

export default TechnologyEnablement;