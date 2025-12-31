import React, { useState } from 'react';
import careerBgImage from '../../assets/careers/careers-bg.png';
import careerImage from '../../assets/careers/careers.png';

function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'fresher',
    domain: '',
    motto: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={careerBgImage} 
            alt="Career Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Build Your Career</h1>
            <p className="text-xl text-gray-200 animate-fade-in-up-delay">
              Transform your skills, accelerate your growth, and unlock your potential with PDSA Technologies
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Join Our Team</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
              {/* Left Side - Career Image */}
              <div className="flex items-center justify-center">
                <img 
                  src={careerImage} 
                  alt="Career Growth" 
                  className="w-full h-full object-contain rounded-2xl"
                  style={{ maxHeight: '100%' }}
                />
              </div>
              
              {/* Right Side - Form */}
              <div className="flex flex-col">
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-lg h-full flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Experience Level</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="fresher">Fresher</option>
                    <option value="1-2 years">1-2 Years</option>
                    <option value="3-5 years">3-5 Years</option>
                    <option value="5+ years">5+ Years</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Current Interested Domain</label>
                <input
                  type="text"
                  name="domain"
                  value={formData.domain}
                  onChange={handleInputChange}
                  placeholder="e.g., AI/ML, Cloud Computing, Full Stack Development"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Your Motto (What are you looking for?)</label>
                <textarea
                  name="motto"
                  value={formData.motto}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your career goals and what you're looking for..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Submit Application
              </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Environment</h3>
                <p className="text-gray-600">Work in cross-functional teams with experienced mentors, fostering innovation and continuous learning.</p>
              </div>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Agile Methodology</h3>
                <p className="text-gray-600">Follow modern development practices with sprint-based delivery and continuous improvement cycles.</p>
              </div>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Focus</h3>
                <p className="text-gray-600">Work on cutting-edge projects using latest technologies and contribute to breakthrough solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Provide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Roles We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { role: 'AI/ML Engineer', icon: '🤖', growth: '40-60%' },
                { role: 'Cloud Architect', icon: '☁️', growth: '35-50%' },
                { role: 'DevOps Engineer', icon: '⚙️', growth: '30-45%' },
                { role: 'Full Stack Developer', icon: '💻', growth: '25-40%' },
                { role: 'Data Scientist', icon: '📊', growth: '35-55%' },
                { role: 'QA Engineer', icon: '🔍', growth: '20-35%' },
                { role: 'Business Analyst', icon: '📈', growth: '25-40%' },
                { role: 'Salesforce Developer', icon: '🌟', growth: '30-45%' }
              ].map((item, index) => (
                <div key={index} className="group bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.role}</h3>
                  <p className="text-sm text-blue-600 font-semibold">Salary Growth: {item.growth}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;

