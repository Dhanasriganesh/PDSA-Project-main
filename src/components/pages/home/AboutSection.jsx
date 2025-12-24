import React from 'react';

function AboutSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              PDSA Technologies
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">
              Trusted Software Development Company
            </h3>
          </div>

          <div className="space-y-8 text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              PDSA Technologies believes in constant innovation and improvement to remain number one. to make you happy. 
              We believe our core values of integrity, client satisfaction, innovation and intellect differentiate us from 
              our competitors. When you choose to do business with PDSA Technologies you are partnering with a company who cares. 
              100% Satisfaction Guarantee – We want you to be completely satisfied with our services.
            </p>

            <div className="pt-8">
              <a
                href="/about"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-1"
              >
                Explore Us
                <span className="inline-block ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;


