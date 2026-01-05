import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Service() {
  const services = [
    {
      title: 'Banking and Financial Service',
      description: 'Comprehensive financial technology solutions to help banks and financial institutions modernize their operations and enhance customer experience.',
      features: ['Digital Banking Solutions', 'Risk Management Systems', 'Compliance & Regulatory', 'Payment Processing'],
      link: '/services/banking-financial',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      title: 'Education',
      description: 'Innovative educational solutions that enhance learning experiences and institutional efficiency.',
      features: ['Learning Management Systems', 'Student Information Systems', 'Virtual Classroom Platforms', 'Educational Mobile Apps'],
      link: '/services/education',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'
    },
    {
      title: 'Government',
      description: 'Secure, scalable technology solutions that modernize government operations and citizen services.',
      features: ['Citizen Service Portals', 'Digital Identity Management', 'Government Analytics', 'Public Safety Systems'],
      link: '/services/government',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      title: 'Healthcare',
      description: 'Advanced healthcare IT solutions that improve patient care, streamline operations, and ensure regulatory compliance.',
      features: ['Electronic Health Records', 'Telemedicine Platforms', 'Healthcare Analytics', 'HIPAA Compliance'],
      link: '/services/healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
    },
    {
      title: 'Media, Entertainment & Gaming',
      description: 'Cutting-edge solutions for media companies, entertainment platforms, and gaming studios to deliver exceptional user experiences.',
      features: ['Content Management Systems', 'Streaming Platforms', 'Game Development', 'Digital Asset Management'],
      link: '/services/media-entertainment',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80'
    },
    {
      title: 'Technology Enablement',
      description: 'Empower your organization with the latest technology infrastructure and digital transformation strategies.',
      features: ['Digital Transformation', 'Cloud Migration', 'System Integration', 'Technology Consulting'],
      link: '/services/technology-enablement',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
    },
    {
      title: 'Strategic Staffing',
      description: 'Find the right talent for your organization with our comprehensive staffing solutions and talent acquisition services.',
      features: ['IT Staffing', 'Contract Staffing', 'Permanent Placement', 'Talent Acquisition'],
      link: '/services/strategic-staffing',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80'
    },
    {
      title: 'Business Process Outsourcing',
      description: 'Optimize your business operations by outsourcing non-core processes to our experienced team of professionals.',
      features: ['Process Optimization', 'Cost Reduction', 'Quality Assurance', 'Scalable Solutions'],
      link: '/services/business-process-outsourcing',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      title: 'Recruitment Process Outsourcing',
      description: 'Streamline your hiring process with our end-to-end recruitment solutions and talent management services.',
      features: ['End-to-End Recruitment', 'Candidate Screening', 'Interview Management', 'Onboarding Support'],
      link: '/services/recruitment-process-outsourcing',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80'
    },
    {
      title: 'PDSA Solutions Training Hub',
      description: 'Comprehensive training programs and skill development courses to enhance your team\'s technical capabilities.',
      features: ['Technical Training', 'Certification Programs', 'Skill Development', 'Corporate Training'],
      link: '/services/training-hub',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
    },
  ];

  const ServiceCard = ({ service, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.2 }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);

    const isEven = index % 2 === 0;

    return (
      <div
        ref={cardRef}
        className={`mb-6 sm:mb-8 md:mb-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}
      >
        <Link to={service.link} className="block group">
          <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 sm:gap-5 md:gap-6 items-center`}>
            {/* Image Section */}
            <div className={`w-full lg:w-2/5 ${isEven ? 'lg:pr-4 xl:pr-6' : 'lg:pl-4 xl:pl-6'}`}>
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className={`w-full lg:w-3/5 ${isEven ? 'lg:pl-4 xl:pl-6' : 'lg:pr-4 xl:pr-6'}`}>
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg group-hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="mb-2 sm:mb-3">
                  <span className="inline-block px-2.5 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 mr-1.5 sm:mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-blue-600 font-semibold text-xs sm:text-sm group-hover:text-blue-700 transition-colors duration-300">
                  <span>Learn More</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] flex items-center justify-center overflow-hidden text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 animate-fade-in-up px-2">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 animate-fade-in-up-delay leading-relaxed px-2">
              Comprehensive IT consulting services tailored to transform your business and drive digital innovation
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 px-2">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-blue-100 leading-relaxed px-2">
              Let's discuss how our services can help you achieve your goals and drive innovation
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-2xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-3xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
