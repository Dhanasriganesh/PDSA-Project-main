import React from 'react';
import { Link } from 'react-router-dom';

function Government() {
  const solutions = [
    {
      title: 'Citizen Service Portals',
      description: 'User-friendly digital platforms that enable citizens to access government services online 24/7.',
      features: ['Online Applications', 'Document Submission', 'Status Tracking', 'Multi-language Support']
    },
    {
      title: 'Digital Identity Management',
      description: 'Secure identity verification and authentication systems for government services.',
      features: ['Biometric Authentication', 'Digital Certificates', 'Single Sign-On', 'Identity Verification']
    },
    {
      title: 'Government Analytics',
      description: 'Data-driven insights to improve government operations and policy decision-making.',
      features: ['Performance Dashboards', 'Predictive Analytics', 'Compliance Reporting', 'Real-time Monitoring']
    },
    {
      title: 'Public Safety Systems',
      description: 'Integrated systems to enhance public safety and emergency response capabilities.',
      features: ['Emergency Response', 'Crime Analytics', 'Surveillance Integration', 'Communication Systems']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] text-white relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 animate-fade-in-up px-2">
              Government Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in-up-delay px-2">
              Secure, scalable technology solutions that modernize government operations and citizen services
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Modernize Government Operations
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                Our government solutions enhance citizen services, improve operational transparency, 
                and ensure the highest levels of security and compliance with federal standards.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-lg sm:rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">150+</div>
                  <div className="text-xs sm:text-sm opacity-90">Government Projects</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-lg sm:rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm opacity-90">Security Compliant</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800">Key Benefits</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Enhanced Citizen Experience',
                  'Improved Operational Efficiency',
                  'Regulatory Compliance',
                  'Data Security & Privacy',
                  'Cost Reduction',
                  'Transparency & Accountability'
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
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent px-2">
              Our Government Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Comprehensive technology solutions designed specifically for government agencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">{solution.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">{solution.description}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm md:text-base text-gray-700">
                      <span className="text-blue-500 mr-2 sm:mr-3 text-base sm:text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800 px-2">
            Advance Government Technology
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-gray-600 max-w-2xl mx-auto px-2">
            Let us help you deliver better citizen services through technology
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-sm sm:text-base md:text-lg shadow-xl transform hover:-translate-y-1"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Government;