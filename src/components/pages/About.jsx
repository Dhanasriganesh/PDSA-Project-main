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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About PDSA Technologies</h1>
            <p className="text-xl text-gray-200">
              Leading IT consulting firm transforming businesses through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At PDSA Technologies, we are committed to helping businesses transform through expert IT consulting solutions. 
                  Our mission is to empower organizations to optimize their technology infrastructure, streamline operations, 
                  and achieve their digital transformation goals.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are a team of experienced IT professionals specializing in AI, cloud computing, DevOps, big data, 
                  and modern web technologies. With offices in the United States and India, we serve clients globally, 
                  delivering cutting-edge solutions that drive business growth and innovation.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                     <span className="text-blue-500 mr-3 text-2xl">✓</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Innovation</h3>
                      <p className="text-gray-600">We stay at the forefront of technology trends and continuously innovate to deliver the best solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                     <span className="text-blue-500 mr-3 text-2xl">✓</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Excellence</h3>
                      <p className="text-gray-600">We strive for excellence in every project, ensuring high-quality deliverables and client satisfaction.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                     <span className="text-blue-500 mr-3 text-2xl">✓</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Integrity</h3>
                      <p className="text-gray-600">We conduct business with the highest ethical standards and transparency.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                     <span className="text-blue-500 mr-3 text-2xl">✓</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Client-Centric</h3>
                      <p className="text-gray-600">Our clients' success is our success. We tailor solutions to meet their unique needs.</p>
                    </div>
                  </li>
                </ul>
              </div>
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

