import React from 'react';

function CTASection() {
  return (
    <section className="py-32 bg-white text-gray-800 relative overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #e5e7eb 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 leading-tight">
            <span className="text-black">
              Ready to Build
            </span>
            <br />
            <span style={{color: '#1F7DC8'}}>
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Let's work together to transform your business with cutting-edge technology solutions. 
            Get in touch with our team today and take the first step towards digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-12 py-6 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-1"
            >
              Get Started Today
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/service"
              className="bg-gray-100 text-gray-800 px-12 py-6 rounded-full hover:bg-gray-200 transition-all duration-300 inline-block font-semibold text-lg border-2 border-gray-200 hover:border-gray-300"
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



