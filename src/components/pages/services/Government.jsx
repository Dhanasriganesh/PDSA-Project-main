import React from 'react';

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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
            alt="Government Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Government Solutions</h1>
            <p className="text-xl text-gray-200 leading-relaxed animate-fade-in-up-delay">
              Secure, scalable technology solutions that modernize government operations and citizen services
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Modernize Government Operations
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our government solutions enhance citizen services, improve operational transparency, 
                and ensure the highest levels of security and compliance with federal standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">150+</div>
                  <div className="text-sm opacity-90">Government Projects</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Security Compliant</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  'Enhanced Citizen Experience',
                  'Improved Operational Efficiency',
                  'Regulatory Compliance',
                  'Data Security & Privacy',
                  'Cost Reduction',
                  'Transparency & Accountability'
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
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
              Our Government Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for government agencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-blue-500 mr-3">✓</span>
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Advance Government Technology</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Let us help you deliver better citizen services through technology
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-xl transform hover:-translate-y-1"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default Government;