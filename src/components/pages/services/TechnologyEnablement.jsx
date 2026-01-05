import React from 'react';
import { Link } from 'react-router-dom';

function TechnologyEnablement() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] text-white relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 animate-fade-in-up px-2">
              Technology Enablement
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in-up-delay px-2">
              Empower your organization with cutting-edge technology infrastructure and digital transformation strategies
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Accelerate Your Digital Journey
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                Transform your business with our comprehensive technology enablement services. From cloud migration 
                to AI integration, we provide the expertise and tools needed for successful digital transformation.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-lg sm:rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">400+</div>
                  <div className="text-xs sm:text-sm opacity-90">Digital Transformations</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-lg sm:rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">95%</div>
                  <div className="text-xs sm:text-sm opacity-90">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800">Technology Solutions</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Cloud Migration & Optimization',
                  'AI & Machine Learning Integration',
                  'DevOps & Automation',
                  'Microservices Architecture',
                  'API Development & Management',
                  'Cybersecurity Implementation'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800 px-2">
              Our Technology Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
                <div key={idx} className={`bg-gradient-to-r ${tech.color} text-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl text-center font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Assessment</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">Comprehensive analysis of your current technology landscape and business requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Strategy</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">Develop a customized roadmap for digital transformation aligned with your business goals.</p>
            </div>
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Implementation</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">Execute the transformation with minimal disruption and maximum efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800 px-2">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-gray-600 max-w-2xl mx-auto px-2">
            Let's modernize your infrastructure and accelerate your digital transformation journey
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-sm sm:text-base md:text-lg shadow-xl transform hover:-translate-y-1"
          >
            Start Transformation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TechnologyEnablement;