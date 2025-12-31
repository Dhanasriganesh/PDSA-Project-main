import React from 'react';

function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Ready to Build</span>
            <br />
            <span className="text-blue-600">Something Amazing?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Let's work together to transform your business with cutting-edge technology solutions. Get in touch with our team today and take the first step towards digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="px-10 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              Get Started Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/service"
              className="px-10 py-4 bg-gray-100 text-gray-800 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
