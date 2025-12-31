import React, { useState } from 'react';
import contactBanner from '../../assets/contact/contactbanner.jpg';
import inTouchImage from '../../assets/contact/in touch.png';
import usaImage from '../../assets/contact/usa.png';
import indiaImage from '../../assets/contact/india.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // If backend is not running, show a helpful message
      if (error.message.includes('Failed to fetch')) {
        setSubmitStatus('error');
        alert('Unable to connect to server. Please make sure the backend server is running on http://localhost:5000');
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
            Get in touch with our team. We're here to help you transform your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 border border-gray-100 flex flex-col">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Send us a Message</h2>
                <p className="text-gray-600 text-xs">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center text-sm">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center text-sm">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  There was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-sm"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1 text-xs">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-sm"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-sm"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1 text-xs">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white text-sm"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-1 text-xs">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-gray-50 focus:bg-white resize-none text-sm"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
              <div className="rounded-2xl overflow-hidden relative flex-1 flex flex-col justify-center">
                <div className="relative z-10 flex flex-col justify-center items-center h-full">
                  <div className="mb-3 flex justify-center flex-shrink-0">
                    <img 
                      src={inTouchImage} 
                      alt="Get in Touch" 
                      className="max-w-full h-auto object-contain"
                      style={{ maxHeight: '400px' }}
                    />
                  </div>
                  <p className="text-center text-gray-700 text-xs leading-relaxed flex-shrink-0 px-2">
                    Have questions? We're here to help. Reach out to us through any of the channels below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Locations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* USA Location */}
            <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">USA</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="md:col-span-2 space-y-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Address:</p>
                    <p className="text-sm text-gray-700">
                      4111-e Rose Lake Dr<br />
                      Charlotte, NC 28217, USA
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone:</p>
                    <a href="tel:+19807819639" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                      +1 (980) 781-9639
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email:</p>
                    <a href="mailto:contact@pdsatech.com" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                      contact@pdsatech.com
                    </a>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <img 
                    src={usaImage} 
                    alt="USA" 
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-200">
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

            {/* Hyderabad Location */}
            <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Hyderabad, India</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="md:col-span-2 space-y-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Address:</p>
                    <p className="text-sm text-gray-700">
                      Unit no. 1020, 9th floor,<br />
                      Vasavi MPM Grand, Ameerpet,<br />
                      Near by metro station,<br />
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone:</p>
                    <a href="tel:+917793992217" className="text-sm text-red-600 hover:text-red-700 transition-colors">
                      +91 77939 92217
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email:</p>
                    <a href="mailto:contact@pdsatech.com" className="text-sm text-red-600 hover:text-red-700 transition-colors">
                      contact@pdsatech.com
                    </a>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <img 
                    src={indiaImage} 
                    alt="India" 
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=Vasavi+MPM+Grand,+Ameerpet,+Hyderabad,+Telangana,+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hyderabad Location"
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

