import React from 'react';
import { Link } from 'react-router-dom';

function BigData() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] text-white relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1600&q=80')`,
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-white animate-fade-in-up px-2" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
              Big Data Analytics
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed animate-fade-in-up-delay px-2" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
              Transform massive datasets into actionable insights with advanced analytics and real-time processing
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent px-2">
                Unlock Data-Driven Intelligence
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8 px-2">
                Our big data solutions process petabytes of information in real-time, delivering predictive analytics, 
                machine learning insights, and scalable data architectures for enterprise decision-making.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-4 py-6 md:px-6 md:py-8 rounded-lg sm:rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">10PB+</div>
                  <div className="text-xs sm:text-sm opacity-90">Data Processed</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-4 py-6 md:px-6 md:py-8 rounded-lg sm:rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Real-time</div>
                  <div className="text-xs sm:text-sm opacity-90">Analytics</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl md:rounded-3xl p-6 lg:p-12 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800">Big Data Solutions</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Apache Spark & Hadoop',
                  'Data Lake Architecture',
                  'Stream Processing',
                  'Predictive Analytics',
                  'Data Visualization',
                  'ETL/ELT Pipelines'
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

      {/* Big Data Use Cases */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800 px-2">
            Big Data Use Cases
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-600">Retail Analytics</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Customer behavior analysis, inventory optimization, and personalized recommendations.</p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• Real-time inventory tracking</li>
                <li>• Customer segmentation</li>
                <li>• Price optimization</li>
              </ul>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-600">Financial Services</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Risk assessment, fraud detection, and algorithmic trading solutions.</p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• Fraud detection algorithms</li>
                <li>• Credit risk modeling</li>
                <li>• Market analysis</li>
              </ul>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-600">Healthcare Analytics</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Patient data analysis, drug discovery, and treatment optimization.</p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• Patient outcome prediction</li>
                <li>• Clinical trial optimization</li>
                <li>• Medical imaging analysis</li>
              </ul>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-600">Manufacturing IoT</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Predictive maintenance, quality control, and supply chain optimization.</p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• Equipment monitoring</li>
                <li>• Quality prediction</li>
                <li>• Supply chain analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800 px-2">
            Harness the Power of Big Data
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-gray-600 max-w-2xl mx-auto px-2">
            Turn your data into competitive advantage with our advanced analytics solutions
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-sm sm:text-base md:text-lg shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default BigData;