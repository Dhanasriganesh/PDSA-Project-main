import React from 'react';

function HowWeWorkSection() {
  const steps = [
    {
      title: 'Define the scope',
      description: 'Our team of IT experts will sit down with you and discuss what your specific needs are.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Develop a plan',
      description: 'We will develop a customized solution that is tailored to your business and IT needs.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Execute the plan',
      description: 'We will work with you to implement the solution and get it up and running in no time.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            How we work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-4 border border-blue-100/50 hover:border-blue-300/70 overflow-hidden text-center"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full flex items-center justify-center font-bold text-lg opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="text-blue-600 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-2xl">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeWorkSection;


