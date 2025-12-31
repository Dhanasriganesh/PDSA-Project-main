import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">About PDSA Technologies</h1>
            <p className="text-xl text-gray-200 animate-fade-in-up-delay">
              Leading IT consulting firm transforming businesses through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Our Mission Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-blue-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses through innovative technology solutions that drive digital transformation, optimize operations, and unlock new possibilities for growth and success.
              </p>
            </div>

            {/* Who We Are Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-blue-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">Who We Are</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A global team of passionate technologists, strategists, and innovators with expertise spanning AI, cloud computing, DevOps, and cutting-edge web technologies, serving clients worldwide.
              </p>
            </div>

            {/* Our Values Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-blue-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">Our Values</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-600 font-medium">Innovation & Excellence</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-600 font-medium">Integrity & Transparency</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-600 font-medium">Client-Centric Approach</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-600 font-medium">Continuous Learning</span>
                </div>
              </div>
            </div>

            {/* Our Expertise Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-blue-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">Our Expertise</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Deep technical knowledge across emerging technologies including AI/ML, cloud platforms, microservices, DevOps automation, and modern application development frameworks.
              </p>
            </div>

            {/* Our Approach Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-blue-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">Our Approach</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We follow agile methodologies, emphasize collaboration, and focus on delivering scalable, secure, and maintainable solutions that align with your business objectives and growth strategy.
              </p>
            </div>

            {/* Global Presence Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-blue-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">Global Presence</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                With strategic offices in the United States and India, we provide 24/7 support and leverage global talent to deliver cost-effective, high-quality solutions to clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Let's discuss how we can help transform your business
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

export default About;

