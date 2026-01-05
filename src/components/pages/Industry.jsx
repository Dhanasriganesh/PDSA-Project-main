import React from 'react';
import { Link } from 'react-router-dom';

function Industry() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] text-white relative overflow-hidden flex items-center justify-center" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 animate-fade-in-up px-2">
              Industries We Serve
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in-up-delay px-2">
              Delivering specialized solutions across diverse industries with deep domain expertise
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Industry-Focused Solutions
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                We understand that each industry has unique challenges and requirements. Our specialized teams deliver tailored solutions that address specific industry needs while ensuring compliance and best practices.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <Link to="/industries/financial-services" className="block p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Financial Services</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Secure, compliant solutions for banking and financial institutions</p>
                </Link>
                <Link to="/industries/healthcare" className="block p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Healthcare</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Advanced healthcare IT solutions and HIPAA-compliant systems</p>
                </Link>
                <Link to="/industries/media-entertainment-gaming" className="block p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Media, Entertainment & Gaming</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Engaging experiences and scalable content delivery platforms</p>
                </Link>
                <Link to="/industries/energy" className="block p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Energy</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Smart energy solutions and sustainable technology platforms</p>
                </Link>
                <Link to="/industries/telecommunication" className="block p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Telecommunication</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Next-generation telecom infrastructure and communication solutions</p>
                </Link>
                <Link to="/industries/consumer-industrial-products" className="block p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Consumer & Industrial Products</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Manufacturing and consumer product technology solutions</p>
                </Link>
                <Link to="/industries/technology-enablement" className="block p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Technology Enablement</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Digital transformation and technology modernization services</p>
                </Link>
                <Link to="/industries/transportation-travel" className="block p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Transportation & Travel</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Smart mobility solutions and travel technology platforms</p>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800">Why Choose Our Industry Expertise?</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Deep domain knowledge',
                  'Regulatory compliance expertise',
                  'Industry-specific best practices',
                  'Proven track record',
                  'Tailored solution approach'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800 px-2">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-gray-600 max-w-2xl mx-auto px-2">
            Let's discuss how we can help your organization achieve its digital transformation goals
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-sm sm:text-base md:text-lg shadow-xl transform hover:-translate-y-1"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Industry;

