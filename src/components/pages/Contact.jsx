import React, { useState } from 'react';
import contactBanner from '../../assets/contact/contactbanner.jpg';
import inTouchImage from '../../assets/contact/in touch.png';
import usaImage from '../../assets/contact/usa.png';
import indiaImage from '../../assets/contact/odhisha.jpg';
import { getApiBaseUrl } from '../../utils/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    topic: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx', '.zip', '.ppt', '.pptx'];
      const fileExtension = '.' + selectedFile.name.split('.').pop().toLowerCase();
      
      if (!allowedTypes.includes(fileExtension)) {
        setErrorMessage('Invalid file type. Allowed types: PDF, DOC, DOCX, ZIP, PPT, PPTX');
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
    } else {
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const API_URL = getApiBaseUrl();
      console.log('Submitting contact form to:', `${API_URL}/contact`);
      
      // Create FormData for file upload
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('mobile', formData.mobile);
      payload.append('company', formData.company || '');
      payload.append('topic', formData.topic);
      payload.append('message', formData.message || '');
      if (file) {
        payload.append('file', file);
      }
      
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        body: payload, // Don't set Content-Type header - browser sets it automatically with boundary
      });

      console.log('Response status:', response.status);

      // Check if response is ok
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          if (errorText.includes('<!DOCTYPE')) {
            setSubmitStatus('error');
            setErrorMessage('Server endpoint not found (404). Please ensure the backend server is running.');
            return;
          }
          errorData = { error: errorText || `Server error: ${response.status} ${response.statusText}` };
        }
        
        setSubmitStatus('error');
        setErrorMessage(errorData.error || `Server error: ${response.status} ${response.statusText}`);
        return;
      }

      // Parse successful response
      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          company: '',
          topic: '',
          message: '',
        });
        setFile(null);
        // Reset file input if exists
        const fileInput = document.getElementById('file');
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      setSubmitStatus('error');
      if (error.message && error.message.includes('Unexpected token')) {
        setErrorMessage('Server returned invalid response. Please ensure the backend server is running and accessible.');
      } else if (error.message && (
        error.message.includes('Failed to fetch') || 
        error.message.includes('NetworkError') || 
        error.message.includes('ERR_CONNECTION_REFUSED') ||
        error.name === 'TypeError'
      )) {
        setErrorMessage('Network error. Please check your connection and try again.');
      } else {
        setErrorMessage('Failed to send message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 px-2" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto px-2" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
            Get in touch with our team. We're here to help you transform your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-stretch">
            {/* Contact Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 md:p-6 border border-gray-100 flex flex-col">
              <div className="mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Send us a Message</h2>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center text-xs sm:text-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center text-xs sm:text-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errorMessage || 'There was an error sending your message. Please try again.'}
                </div>
              )}

              {errorMessage && submitStatus !== 'error' && (
                <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg flex items-center text-xs sm:text-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-1 text-xs">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-xs sm:text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-1 text-xs">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-xs sm:text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-1 text-xs">
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-xs sm:text-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-semibold mb-1 text-xs">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-xs sm:text-sm"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className="block text-gray-700 font-semibold mb-1 text-xs">
                    Topic <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-xs sm:text-sm"
                  >
                    <option value="">Select a topic</option>
                    <option value="strategy">Strategy / innovation</option>
                    <option value="platforms">Platforms / engineering</option>
                    <option value="ai">AI & automation</option>
                    <option value="careers">Careers</option>
                    <option value="media">Media / partnerships</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-1 text-xs">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white resize-none text-xs sm:text-sm"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <div>
                  <label htmlFor="file" className="block text-gray-700 font-semibold mb-1 text-xs">
                    Attach File (Optional)
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.zip,.ppt,.pptx"
                    className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-xs sm:text-sm file:mr-2 sm:file:mr-4 file:py-0.5 sm:file:py-1 file:px-2 sm:file:px-3 file:rounded-lg file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted: PDF, DOC, DOCX, ZIP, PPT, PPTX (Max 10MB)</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col h-full">
              {/* Get in Touch Image Section */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden relative flex-1 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6">
                <div className="relative z-10 flex flex-col justify-center items-center h-full">
                  <div className="mb-3 sm:mb-4 flex justify-center shrink-0">
                    <img 
                      src={inTouchImage} 
                      alt="Get in Touch" 
                      className="max-w-full h-auto object-contain"
                      style={{ maxHeight: '300px' }}
                    />
                  </div>
                  <p className="text-center text-gray-700 text-xs sm:text-sm leading-relaxed shrink-0 px-2">
                    Have questions? We're here to help. Reach out to us through any of the channels below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 px-2">Our Locations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* USA Location */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 border border-gray-100">
              <div className="flex items-center mb-3 sm:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">USA</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <div className="md:col-span-2 space-y-1.5 sm:space-y-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Address:</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      4111-e Rose Lake Dr<br />
                      Charlotte, NC 28217, USA
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone:</p>
                    <a href="tel:+19807819639" className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 transition-colors break-all">
                      +1 (980) 781-9639
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email:</p>
                    <a href="mailto:contact@pdsatech.com" className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 transition-colors break-all">
                      contact@pdsatech.com
                    </a>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <img 
                    src={usaImage} 
                    alt="USA" 
                    className="w-full h-20 sm:h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="w-full h-36 sm:h-40 md:h-48 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=4111-e+Rose+Lake+Dr+Charlotte+NC+28217&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="USA Location"
                ></iframe>
              </div>
            </div>

            {/* Bhubaneswar Location */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 border border-gray-100">
              <div className="flex items-center mb-3 sm:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Bhubaneswar, India</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <div className="md:col-span-2 space-y-1.5 sm:space-y-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Address:</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      MIG-2/310, Lane 8,<br />
                      Sri Satyasai Enclave, Khandagiri,<br />
                      Bhubaneswar, Odisha, India
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email:</p>
                    <a href="mailto:contact@pdsatech.com" className="text-xs sm:text-sm text-red-600 hover:text-red-700 transition-colors break-all">
                      contact@pdsatech.com
                    </a>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <img 
                    src={indiaImage} 
                    alt="India" 
                    className="w-full h-20 sm:h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="w-full h-36 sm:h-40 md:h-48 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=MIG-2/310,+Lane+8,+Sri+Satyasai+Enclave,+Khandagiri,+Bhubaneswar,+Odisha,+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bhubaneswar Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

