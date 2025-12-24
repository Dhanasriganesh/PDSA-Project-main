import React from 'react';

function CompanyOverviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Company Overview
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              With offices in the United States and India, PDSA Technologies serves clients globally. 
              Our diverse team brings together expertise from various domains to deliver 
              comprehensive IT consulting solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We specialize in AI, cloud computing, DevOps, big data, web development, and IoT solutions, 
              helping businesses navigate the complexities of digital transformation.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-8 rounded-xl shadow-lg">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm font-medium opacity-90">Projects</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-6 py-8 rounded-xl shadow-lg">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-sm font-medium opacity-90">Clients</div>
              </div>
              <div className="bg-gradient-to-br from-sky-500 to-cyan-600 text-white px-6 py-8 rounded-xl shadow-lg">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm font-medium opacity-90">Experts</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 rounded-3xl p-12 text-gray-800 shadow-2xl border border-blue-200">
            <h3 className="text-3xl font-bold mb-8">Services Overview</h3>
            <ul className="space-y-6">
              {[
                'AI & Machine Learning Solutions',
                'Cloud Migration & Infrastructure',
                'DevOps & CI/CD Implementation',
                'Big Data Analytics & Processing',
                'Web & Mobile Application Development',
                'IoT & Smart Device Integration',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverviewSection;



