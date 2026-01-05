import React from 'react';
import { Link } from 'react-router-dom';

function StrategicStaffing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] text-white relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 animate-fade-in-up px-2">
              Strategic Staffing
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in-up-delay px-2">
              Connect with top-tier talent through our comprehensive staffing solutions and talent acquisition services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Find the Perfect Talent Match
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                Our strategic staffing solutions connect you with exceptional professionals who drive innovation 
                and growth. From contract positions to permanent placements, we deliver talent that fits your culture and goals.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-lg sm:rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">10K+</div>
                  <div className="text-xs sm:text-sm opacity-90">Successful Placements</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-lg sm:rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">48hrs</div>
                  <div className="text-xs sm:text-sm opacity-90">Average Response Time</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800">Staffing Solutions</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'IT & Technology Staffing',
                  'Contract & Temporary Staffing',
                  'Permanent Placement Services',
                  'Executive Search & Leadership',
                  'Project-Based Teams',
                  'Skill-Based Talent Matching'
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

          {/* Talent Categories */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800 px-2">
              Talent Categories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { title: 'Software Engineers', icon: '💻', count: '2,500+' },
                { title: 'Data Scientists', icon: '📊', count: '800+' },
                { title: 'DevOps Engineers', icon: '⚙️', count: '600+' },
                { title: 'Project Managers', icon: '📋', count: '1,200+' },
                { title: 'UI/UX Designers', icon: '🎨', count: '400+' },
                { title: 'Cloud Architects', icon: '☁️', count: '300+' },
                { title: 'Cybersecurity', icon: '🔒', count: '250+' },
                { title: 'Business Analysts', icon: '📈', count: '900+' }
              ].map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{category.icon}</div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-gray-800">{category.title}</h4>
                  <p className="text-sm sm:text-base text-blue-600 font-semibold">{category.count} Available</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '1', title: 'Requirements Analysis', desc: 'Understanding your specific talent needs and culture fit' },
              { step: '2', title: 'Talent Sourcing', desc: 'Leveraging our extensive network to find qualified candidates' },
              { step: '3', title: 'Screening & Vetting', desc: 'Comprehensive evaluation including technical and cultural assessment' },
              { step: '4', title: 'Placement & Support', desc: 'Seamless onboarding and ongoing support for success' }
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                  <span className="text-lg sm:text-xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-gray-800">{process.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 px-2">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800 px-2">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-gray-600 max-w-2xl mx-auto px-2">
            Let us help you find the perfect talent to drive your business forward
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-sm sm:text-base md:text-lg shadow-xl transform hover:-translate-y-1"
          >
            Find Talent Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default StrategicStaffing;