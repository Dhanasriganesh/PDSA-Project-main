import React, { useState, useEffect, useRef } from 'react';

// Custom hook for typing animation
const useTypingAnimation = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }
  }, [isVisible, text, speed]);

  return [displayText, elementRef];
};

function AboutSection() {
  const [counts, setCounts] = useState({ projects: 0, years: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const missionText = "At PDSA Technology, we are committed to delivering cutting-edge software solutions that drive business growth and digital transformation. Our expertise spans across multiple industries, helping organizations leverage technology to achieve their strategic objectives. We believe in the power of innovation, quality, and customer-centric approach to create solutions that not only meet current needs but also prepare businesses for future challenges.";
  
  const [typedMission, missionRef] = useTypingAnimation(missionText, 15);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount('projects', 500, 2000);
          animateCount('years', 10, 2000);
          animateCount('clients', 200, 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = (key, target, duration) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounts(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 16);
  };
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* About PDSA Technology */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
              About PDSA Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering digital transformation through innovative technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h3>
              <div ref={missionRef} className="text-lg text-gray-600 leading-relaxed">
                {typedMission}<span className="animate-pulse">|</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold mb-6 text-gray-800">Our Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'Cloud Solutions',
                  'AI & ML',
                  'Healthcare IT',
                  'E-commerce',
                  'Enterprise Software',
                  'Digital Marketing'
                ].map((skill, idx) => (
                  <div key={idx} className="group flex items-center hover:bg-blue-50 rounded-lg p-2 transition-all duration-300 cursor-pointer">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 group-hover:font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              Company Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Innovation First</h3>
              <p className="text-gray-600">
                We stay ahead of technology trends to deliver innovative solutions that give our clients a competitive edge.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality Assured</h3>
              <p className="text-gray-600">
                Our rigorous quality assurance processes ensure that every solution we deliver meets the highest standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Client Focused</h3>
              <p className="text-gray-600">
                We build long-term partnerships with our clients, understanding their unique needs and delivering tailored solutions.
              </p>
            </div>
          </div>

          <div ref={statsRef} className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Why Choose PDSA Technology?</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">{counts.projects}+</div>
                <div className="text-blue-100">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{counts.years}+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{counts.clients}+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;