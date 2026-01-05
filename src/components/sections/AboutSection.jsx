import React, { useState, useEffect, useRef } from 'react';

// Custom hook for typing animation
const useTypingAnimation = (text, speed = 15) => {
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
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const sectionRef = useRef(null);

  const missionText = "At PDSA Technology, we are committed to delivering cutting-edge software solutions that drive business growth and digital transformation. Our expertise spans across multiple industries, helping organizations leverage technology to achieve their strategic objectives. We believe in the power of innovation, quality, and customer-centric approach to create solutions that not only meet current needs but also prepare businesses for future challenges.";
  
  const [typedMission, missionRef] = useTypingAnimation(missionText, 15);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  const expertise = [
    { name: 'Web Development', icon: '🌐', color: '#2563EB' },
    { name: 'Mobile Apps', icon: '📱', color: '#059669' },
    { name: 'Cloud Solutions', icon: '☁️', color: '#7C3AED' },
    { name: 'AI & ML', icon: '🤖', color: '#DC2626' },
    { name: 'Healthcare IT', icon: '🏥', color: '#2563EB' },
    { name: 'E-commerce', icon: '🛒', color: '#F59E0B' },
    { name: 'Enterprise Software', icon: '💼', color: '#475569' },
    { name: 'Digital Marketing', icon: '📊', color: '#EC4899' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver innovative solutions that give our clients a competitive edge.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: '#2563EB',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Quality Assured',
      description: 'Our rigorous quality assurance processes ensure that every solution we deliver meets the highest standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: '#059669',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Client Focused',
      description: 'We build long-term partnerships with our clients, understanding their unique needs and delivering tailored solutions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: '#7C3AED',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section 
        className="relative h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] text-white overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6">
              About PDSA Technologies
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 px-2">
              Leading IT consulting firm transforming businesses through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={sectionRef} className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* About PDSA Technology */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-8 sm:mb-10 md:mb-12">
            {/* Mission Section */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="inline-block mb-3 sm:mb-4">
                <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold uppercase tracking-wide">
                  Our Mission
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900">Our Mission</h3>
              <div ref={missionRef} className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                {typedMission}
                <span className="animate-pulse text-blue-600">|</span>
              </div>
            </div>

            {/* Expertise Section */}
            <div 
              className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="w-1 h-6 sm:h-8 bg-blue-600 rounded-full"></div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900">Our Expertise</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {expertise.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="group flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-300 cursor-pointer"
                    style={{
                      animationDelay: `${0.6 + idx * 0.1}s`
                    }}
                  >
                    <span className="text-xl sm:text-2xl">{skill.icon}</span>
                    <span 
                      className="text-xs sm:text-sm md:text-base text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300"
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-6 sm:mb-8 md:mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="inline-block mb-4 sm:mb-5 md:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold uppercase tracking-wider border border-blue-100">
                Company Overview
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${0.8 + idx * 0.1}s`,
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white h-full flex flex-col justify-between min-h-[250px] sm:min-h-[280px] md:min-h-[300px]">
                  <div>
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 backdrop-blur-sm"
                      style={{
                        backgroundColor: `${value.color}40`,
                      }}
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: value.color }}>
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{value.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Accent Bar */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300"
                    style={{
                      backgroundColor: value.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div 
            ref={statsRef} 
            className="relative bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-200"
          >
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gray-900">Why Choose PDSA Technology?</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
                Delivering excellence through innovation, quality, and dedication
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-blue-600">{counts.projects}+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-blue-600">{counts.years}+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-blue-600">{counts.clients}+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-blue-600">24/7</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default AboutSection;