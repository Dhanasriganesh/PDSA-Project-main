import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { generateSlug, getIndustryImage } from '../../utils/industryUtils';

function IndustryItem({ industry, index }) {
  const industryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const slug = generateSlug(industry.name);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (industryRef.current) {
      observer.observe(industryRef.current);
    }

    return () => {
      if (industryRef.current) {
        observer.unobserve(industryRef.current);
      }
    };
  }, []);

  return (
    <Link
      ref={industryRef}
      to={`/industry/${slug}`}
      className={`block h-[40vh] relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative h-full w-full">
        <img
          src={getIndustryImage(industry.name)}
          alt={industry.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className={`text-4xl md:text-6xl font-bold text-white transition-transform duration-1000 ${
            isVisible ? 'translate-y-0' : 'translate-y-10'
          }`}>
            {industry.name}
          </h2>
        </div>
      </div>
    </Link>
  );
}

function Industry() {
  const industries = [
    {
      name: 'Banking & Financial Services',
      summary: 'Cloud-native cores, real-time risk and fraud controls, and personalized digital channels that meet regulatory rigor without slowing growth.',
      strengths: ['RegTech & compliance automation', 'Risk, fraud & credit intelligence', 'Digital banking platforms'],
    },
    {
      name: 'Healthcare & Life Sciences',
      summary: 'Interoperable data fabrics, virtual care, and AI-assisted clinical workflows that elevate outcomes and operational resilience.',
      strengths: ['EHR integration & interoperability', 'Clinical decision support & AI copilots', 'HIPAA-compliant architectures'],
    },
    {
      name: 'Media & Entertainment',
      summary: 'Low-latency streaming, live ops, and personalization engines that maximize engagement and monetization across every surface.',
      strengths: ['Edge/CDN acceleration', 'Real-time analytics & recommendations', 'Multi-platform distribution'],
    },
    {
      name: 'Telecommunications',
      summary: '5G, edge, and IoT stacks with automated assurance so networks stay performant while customer journeys feel effortless.',
      strengths: ['Network optimization & automation', 'Edge computing strategies', 'CX transformation'],
    },
    {
      name: 'Energy & Utilities',
      summary: 'Smart grids, renewables orchestration, and OT/IT convergence with predictive maintenance to keep uptime and sustainability high.',
      strengths: ['Grid modernization & IoT', 'Energy trading & dispatch platforms', 'Predictive maintenance systems'],
    },
    {
      name: 'Oil & Gas',
      summary: 'Upstream and downstream solutions, exploration technologies, and operational systems for the oil and gas industry.',
      strengths: ['Exploration & production systems', 'Pipeline management', 'Refining operations'],
    },
    {
      name: 'Retail & Consumer Goods',
      summary: 'E-commerce platforms, retail management systems, and consumer engagement solutions that drive sales and customer loyalty.',
      strengths: ['E-commerce platforms', 'Inventory management', 'Customer experience solutions'],
    },
    {
      name: 'Manufacturing',
      summary: 'Digitized plants and supply chains, demand sensing, and Industry 4.0 solutions that shrink cycle times and boost margin.',
      strengths: ['Supply chain visibility', 'Manufacturing automation', 'IoT & smart factories'],
    },
    {
      name: 'Transportation & Logistics',
      summary: 'Supply chain optimization, warehouse management systems, and logistics platforms that improve efficiency and visibility.',
      strengths: ['Fleet & route optimization', 'Warehouse management systems', 'Supply chain analytics'],
    },
    {
      name: 'Travel & Hospitality',
      summary: 'Hospitality management systems, booking platforms, and travel technology solutions that enhance guest experiences and operations.',
      strengths: ['Property management systems', 'Booking & reservation platforms', 'Guest experience solutions'],
    },
    {
      name: 'Automotive',
      summary: 'Software-defined vehicles, connected services, and in-cabin experiences backed by telemetry and safety-grade platforms.',
      strengths: ['Connected vehicle platforms', 'Predictive maintenance & telematics', 'In-vehicle UX & infotainment'],
    },
    {
      name: 'Education',
      summary: 'EdTech solutions, learning management systems, and educational platforms that transform teaching and learning experiences.',
      strengths: ['Learning management systems', 'Student information systems', 'Online education platforms'],
    },
    {
      name: 'Government & Public Sector',
      summary: 'Digital government services, public sector transformation, and citizen engagement platforms that improve governance and accessibility.',
      strengths: ['Digital government platforms', 'Citizen services portals', 'Public sector modernization'],
    },
    {
      name: 'Insurance',
      summary: 'Insurance technology platforms, claims processing systems, and risk assessment tools that streamline operations and customer service.',
      strengths: ['Claims management systems', 'Policy administration platforms', 'Risk analytics & underwriting'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          alt="Industries We Serve"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-white/90">
              Tailored IT solutions for diverse industries
            </p>
          </div>
        </div>
      </section>

      {/* Industries Scroll Section */}
      <section className="py-0">
        <div className="space-y-0">
          {industries.map((industry, index) => (
            <IndustryItem key={index} industry={industry} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Ready to Transform Your Industry?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Let's discuss how we can help your organization achieve its digital transformation goals
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industry;

