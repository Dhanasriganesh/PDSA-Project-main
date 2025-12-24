import React from 'react';

function TestimonialsSection() {
  // Testimonials data matching MetrixIT style
  const testimonials = [
    {
      id: 1,
      name: 'James Smith',
      position: 'Creative Director',
      text: 'In my history of working with PDSA Technologies, I can honestly say that there is not one company that I\'ve ever worked with that has better service.',
      avatar: '👤',
    },
    {
      id: 2,
      name: 'Michael Thompson',
      position: 'Sales Manager',
      text: 'I know they are going to be honest with me. I know it is going to be good. That is the number one advantage of working with PDSA Technologies because I just do not want to be sold. I want to trust that what I am getting is going to be good.',
      avatar: '👤',
    },
    {
      id: 3,
      name: 'Tim Bogemans',
      position: 'Managing Partner',
      text: 'We worked with PDSA Technologies in developing our SharePoint Intranet. The development & implementation process was very smooth & delivered the exact results we were expecting. We\'ll surely work with them in the future.',
      avatar: '👤',
    },
    {
      id: 4,
      name: 'Ross Shamelashvili',
      position: 'Manager, Development Operations',
      text: 'PDSA Technologies offers a high caliber of resources skilled in Microsoft Azure .NET, mobile & Quality Assurance. Over the past three years, We was very pleased with the service provided by PDSA Technologies development teams & executive management. For accelerated project timelines which require skilled resources, PDSA Technologies is a company that your team should consider.',
      avatar: '👤',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Clients feedback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 hover:border-blue-300/70 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-4xl text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {testimonial.avatar}
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-8">
                  <svg className="w-12 h-12 text-blue-500 opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Author */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;


