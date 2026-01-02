import React from 'react';

function RecruitmentProcessOutsourcing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen text-white relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Recruitment Process Outsourcing</h1>
            <p className="text-xl text-gray-200 leading-relaxed animate-fade-in-up-delay">
              Comprehensive RPO solutions to streamline your talent acquisition process
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
                Transform Your Hiring Process
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our RPO services provide end-to-end recruitment solutions, from sourcing to onboarding, 
                helping you build high-performing teams efficiently and cost-effectively.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">50%</div>
                  <div className="text-sm opacity-90">Faster Hiring</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">40%</div>
                  <div className="text-sm opacity-90">Cost Reduction</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">RPO Services</h3>
              <ul className="space-y-4">
                {[
                  'Talent Sourcing & Screening',
                  'Interview Coordination',
                  'Candidate Assessment',
                  'Onboarding Support',
                  'Recruitment Analytics',
                  'Employer Branding'
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Optimize Your Recruitment Process</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Partner with us to build your dream team faster and more efficiently
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default RecruitmentProcessOutsourcing;