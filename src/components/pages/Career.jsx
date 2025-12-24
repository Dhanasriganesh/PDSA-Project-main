import React from 'react';

function Career() {
  const positions = [
    {
      title: 'Senior AI/ML Engineer',
      location: 'Charlotte, NC / Hyderabad, India',
      type: 'Full-time',
      description: 'Join our AI team to develop cutting-edge machine learning solutions.',
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Charlotte, NC',
      type: 'Full-time',
      description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
    },
    {
      title: 'DevOps Engineer',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation.',
    },
    {
      title: 'Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop modern web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Data Scientist',
      location: 'Charlotte, NC / Hyderabad, India',
      type: 'Full-time',
      description: 'Analyze complex data sets and build predictive models.',
    },
    {
      title: 'QA Engineer',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Ensure quality and reliability of our software solutions.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-200">
              Build your career with us. We're always looking for talented individuals to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Open Positions
            </h2>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/contact?subject=Application for ${position.title}`}
                      className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block text-center font-semibold"
                    >
                      Apply Now
                    </a>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Join PDSA Technologies?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Innovative Projects',
                  description: 'Work on cutting-edge technologies and challenging projects.',
                },
                {
                  title: 'Career Growth',
                  description: 'Opportunities for professional development and career advancement.',
                },
                {
                  title: 'Competitive Benefits',
                  description: 'Attractive compensation and comprehensive benefits package.',
                },
                {
                  title: 'Collaborative Culture',
                  description: 'Work with a talented team in a supportive and collaborative environment.',
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Don't See the Right Role?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              We're always interested in connecting with talented individuals. Send us your resume!
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Send Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;

