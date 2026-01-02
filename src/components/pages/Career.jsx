import React, { useState } from 'react';
import careerBgImage from '../../assets/careers/careers-bg.png';
import careerImage from '../../assets/careers/careers.png';
import { getApiBaseUrl } from '../../utils/api';

function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    role: '',
    message: ''
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx', '.zip'];
      const fileExtension = '.' + selectedFile.name.split('.').pop().toLowerCase();
      
      if (!allowedTypes.includes(fileExtension)) {
        setErrorMessage('Invalid file type. Allowed types: PDF, DOC, DOCX, ZIP');
        setFile(null);
        e.target.value = '';
        return;
      }
      
      // Validate file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setErrorMessage('File size must be less than 10MB');
        setFile(null);
        e.target.value = '';
        return;
      }
      
      setFile(selectedFile);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Create FormData
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('mobile', formData.mobile);
      payload.append('role', formData.role);
      payload.append('message', formData.message || '');
      if (file) {
        payload.append('file', file);
      }

      const response = await fetch(`${getApiBaseUrl()}/careers/apply`, {
        method: 'POST',
        body: payload, // Don't set Content-Type header - browser sets it automatically with boundary
      });

      // Check if response is ok and has content
      if (!response.ok) {
        // Try to parse error response
        let errorData;
        try {
          const text = await response.text();
          errorData = text ? JSON.parse(text) : { error: `Server error: ${response.status}` };
        } catch (e) {
          errorData = { error: `Server error: ${response.status} ${response.statusText}` };
        }
        setSubmitStatus('error');
        setErrorMessage(errorData.error || `Failed to submit application. Server returned ${response.status}`);
        return;
      }

      // Parse successful response
      let data;
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : { success: false, error: 'Empty response from server' };
      } catch (e) {
        setSubmitStatus('error');
        setErrorMessage('Invalid response from server. Please try again.');
        return;
      }

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          role: '',
          message: ''
        });
        setFile(null);
        // Reset file input
        const fileInput = document.getElementById('resume-file');
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      if (error.message.includes('Failed to fetch') || 
          error.message.includes('NetworkError') || 
          error.message.includes('ERR_CONNECTION_REFUSED') ||
          error.name === 'TypeError') {
        setErrorMessage('Unable to connect to server. Please try again later or contact support if the issue persists.');
      } else {
        setErrorMessage('Failed to submit application. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
        style={{
          backgroundImage: `url(${careerBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
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
                  {submitStatus === 'success' && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center text-sm">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Application submitted successfully! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center text-sm">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errorMessage || 'There was an error submitting your application. Please try again.'}
                    </div>
                  )}

                  {errorMessage && submitStatus !== 'error' && (
                    <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg flex items-center text-sm">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {errorMessage}
                    </div>
                  )}
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
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Mobile <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Role of Interest <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="e.g., AI/ML Engineer, Cloud Architect, Full Stack Developer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your career goals and what you're looking for..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Resume/Portfolio (Optional)</label>
                <input
                  type="file"
                  id="resume-file"
                  name="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.zip"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="text-xs text-gray-500 mt-1">Accepted: PDF, DOC, DOCX, ZIP (Max 10MB)</p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
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

