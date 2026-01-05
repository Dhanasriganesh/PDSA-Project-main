import React from 'react';
import { Link } from 'react-router-dom';

function BankingFinancial() {
  const solutions = [
    {
      title: 'Digital Banking Solutions',
      description: 'Modern digital banking platforms with mobile-first design and seamless user experience.',
      features: ['Mobile Banking Apps', 'Online Banking Portals', 'Digital Wallet Integration', 'Real-time Transactions']
    },
    {
      title: 'Risk Management Systems',
      description: 'Advanced risk assessment and management tools to protect your financial institution.',
      features: ['Credit Risk Analysis', 'Fraud Detection', 'Compliance Monitoring', 'Risk Reporting']
    },
    {
      title: 'Compliance & Regulatory',
      description: 'Ensure regulatory compliance with automated reporting and monitoring systems.',
      features: ['AML Compliance', 'KYC Verification', 'Regulatory Reporting', 'Audit Trail Management']
    },
    {
      title: 'Payment Processing',
      description: 'Secure and efficient payment processing solutions for all transaction types.',
      features: ['Multi-currency Support', 'Real-time Processing', 'API Integration', 'Security Protocols']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] text-white relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 animate-fade-in-up px-2">
              Banking & Financial Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-7 md:mb-8 animate-fade-in-up-delay px-2">
              Comprehensive financial technology solutions to modernize banking operations and enhance customer experience
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent px-2">
              Our Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Cutting-edge financial technology solutions designed to meet the evolving needs of modern banking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 md:p-8 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{solution.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">{solution.description}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm md:text-base text-gray-700">
                      <span className="text-blue-500 mr-2 sm:mr-3 text-base sm:text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent px-2">
              Why Choose Our Banking Solutions?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl text-blue-600">🔒</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Security First</h3>
                <p className="text-sm sm:text-base text-gray-600 px-2">Bank-grade security with advanced encryption and fraud protection</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl text-blue-600">⚡</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Real-time Processing</h3>
                <p className="text-sm sm:text-base text-gray-600 px-2">Lightning-fast transaction processing and instant notifications</p>
              </div>
              <div className="text-center sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl text-blue-600">📊</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-sm sm:text-base text-gray-600 px-2">Comprehensive reporting and business intelligence tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 px-2">
              Ready to Transform Your Banking Operations?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-gray-200 px-2">
              Contact us today to learn how our solutions can modernize your financial services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BankingFinancial;