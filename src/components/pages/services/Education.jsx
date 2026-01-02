import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
  const solutions = [
    {
      title: 'Learning Management Systems',
      description: 'Comprehensive LMS platforms that facilitate online learning and course management.',
      features: ['Course Creation Tools', 'Student Progress Tracking', 'Interactive Content', 'Assessment & Grading']
    },
    {
      title: 'Student Information Systems',
      description: 'Complete student data management systems for educational institutions.',
      features: ['Student Records', 'Enrollment Management', 'Academic Transcripts', 'Parent Portals']
    },
    {
      title: 'Virtual Classroom Platforms',
      description: 'Interactive virtual learning environments for remote and hybrid education.',
      features: ['Live Video Conferencing', 'Screen Sharing', 'Breakout Rooms', 'Recording Capabilities']
    },
    {
      title: 'Educational Mobile Apps',
      description: 'Mobile-first educational applications for enhanced learning experiences.',
      features: ['Offline Learning', 'Push Notifications', 'Gamification', 'Social Learning']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="min-h-screen text-white relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Education Solutions</h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-up-delay">
              Innovative educational technology solutions that enhance learning experiences and institutional efficiency
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent">Our Educational Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering educational institutions with cutting-edge technology for modern learning environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-purple-100 hover:border-purple-300 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-purple-500 mr-3">✓</span>
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
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent">Why Choose Our Education Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-purple-600">🎓</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Learning</h3>
                <p className="text-gray-600">Interactive tools that improve student engagement and outcomes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-purple-600">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile-First Design</h3>
                <p className="text-gray-600">Accessible learning experiences across all devices and platforms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-purple-600">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
                <p className="text-gray-600">Comprehensive analytics to track progress and improve outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent">Key Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🎯', title: 'Personalized Learning', desc: 'Adaptive learning paths' },
                { icon: '👥', title: 'Collaboration Tools', desc: 'Group projects & discussions' },
                { icon: '📈', title: 'Progress Tracking', desc: 'Real-time analytics' },
                { icon: '🔒', title: 'Secure Platform', desc: 'FERPA compliant' }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Education?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Contact us today to learn how our solutions can enhance your educational institution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
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

export default Education;