import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { generateSlug, getIndustryImage } from '../../../utils/industryUtils';

const industriesData = {
  'banking-and-financial-services': {
    name: 'Banking & Financial Services',
    summary: 'Cloud-native cores, real-time risk and fraud controls, and personalized digital channels that meet regulatory rigor without slowing growth.',
    strengths: ['RegTech & compliance automation', 'Risk, fraud & credit intelligence', 'Digital banking platforms'],
    description: 'We help financial institutions navigate complex regulatory landscapes while delivering exceptional digital experiences. Our solutions combine compliance expertise with cutting-edge technology to drive growth and operational efficiency.',
  },
  'healthcare-and-life-sciences': {
    name: 'Healthcare & Life Sciences',
    summary: 'Interoperable data fabrics, virtual care, and AI-assisted clinical workflows that elevate outcomes and operational resilience.',
    strengths: ['EHR integration & interoperability', 'Clinical decision support & AI copilots', 'HIPAA-compliant architectures'],
    description: 'Transform healthcare delivery with interoperable systems, AI-powered insights, and secure platforms that improve patient outcomes while ensuring regulatory compliance.',
  },
  'media-and-entertainment': {
    name: 'Media & Entertainment',
    summary: 'Low-latency streaming, live ops, and personalization engines that maximize engagement and monetization across every surface.',
    strengths: ['Edge/CDN acceleration', 'Real-time analytics & recommendations', 'Multi-platform distribution'],
    description: 'Deliver seamless streaming experiences, personalized content recommendations, and scalable platforms that captivate audiences across all devices and channels.',
  },
  'telecommunications': {
    name: 'Telecommunications',
    summary: '5G, edge, and IoT stacks with automated assurance so networks stay performant while customer journeys feel effortless.',
    strengths: ['Network optimization & automation', 'Edge computing strategies', 'CX transformation'],
    description: 'Build next-generation networks with 5G capabilities, edge computing, and intelligent automation that deliver superior customer experiences.',
  },
  'energy-and-utilities': {
    name: 'Energy & Utilities',
    summary: 'Smart grids, renewables orchestration, and OT/IT convergence with predictive maintenance to keep uptime and sustainability high.',
    strengths: ['Grid modernization & IoT', 'Energy trading & dispatch platforms', 'Predictive maintenance systems'],
    description: 'Enable sustainable energy management with smart grid technologies, renewable energy integration, and predictive analytics for optimal operational efficiency.',
  },
  'oil-and-gas': {
    name: 'Oil & Gas',
    summary: 'Upstream and downstream solutions, exploration technologies, and operational systems for the oil and gas industry.',
    strengths: ['Exploration & production systems', 'Pipeline management', 'Refining operations'],
    description: 'Optimize oil and gas operations with advanced exploration technologies, pipeline management systems, and refining operations that maximize efficiency and safety.',
  },
  'retail-and-consumer-goods': {
    name: 'Retail & Consumer Goods',
    summary: 'E-commerce platforms, retail management systems, and consumer engagement solutions that drive sales and customer loyalty.',
    strengths: ['E-commerce platforms', 'Inventory management', 'Customer experience solutions'],
    description: 'Transform retail operations with modern e-commerce platforms, intelligent inventory management, and customer experience solutions that drive growth.',
  },
  'manufacturing': {
    name: 'Manufacturing',
    summary: 'Digitized plants and supply chains, demand sensing, and Industry 4.0 solutions that shrink cycle times and boost margin.',
    strengths: ['Supply chain visibility', 'Manufacturing automation', 'IoT & smart factories'],
    description: 'Embrace Industry 4.0 with smart manufacturing, supply chain optimization, and IoT solutions that reduce costs and improve productivity.',
  },
  'transportation-and-logistics': {
    name: 'Transportation & Logistics',
    summary: 'Supply chain optimization, warehouse management systems, and logistics platforms that improve efficiency and visibility.',
    strengths: ['Fleet & route optimization', 'Warehouse management systems', 'Supply chain analytics'],
    description: 'Streamline logistics operations with intelligent routing, warehouse automation, and supply chain analytics that reduce costs and improve delivery times.',
  },
  'travel-and-hospitality': {
    name: 'Travel & Hospitality',
    summary: 'Hospitality management systems, booking platforms, and travel technology solutions that enhance guest experiences and operations.',
    strengths: ['Property management systems', 'Booking & reservation platforms', 'Guest experience solutions'],
    description: 'Elevate guest experiences with modern booking platforms, property management systems, and personalized service solutions that drive customer satisfaction.',
  },
  'automotive': {
    name: 'Automotive',
    summary: 'Software-defined vehicles, connected services, and in-cabin experiences backed by telemetry and safety-grade platforms.',
    strengths: ['Connected vehicle platforms', 'Predictive maintenance & telematics', 'In-vehicle UX & infotainment'],
    description: 'Drive innovation in automotive with connected vehicle platforms, telematics solutions, and advanced in-vehicle experiences that enhance safety and user satisfaction.',
  },
  'education': {
    name: 'Education',
    summary: 'EdTech solutions, learning management systems, and educational platforms that transform teaching and learning experiences.',
    strengths: ['Learning management systems', 'Student information systems', 'Online education platforms'],
    description: 'Transform education delivery with modern learning platforms, student information systems, and online education solutions that engage students and improve outcomes.',
  },
  'government-and-public-sector': {
    name: 'Government & Public Sector',
    summary: 'Digital government services, public sector transformation, and citizen engagement platforms that improve governance and accessibility.',
    strengths: ['Digital government platforms', 'Citizen services portals', 'Public sector modernization'],
    description: 'Modernize public services with digital platforms, citizen portals, and government transformation initiatives that improve accessibility and efficiency.',
  },
  'insurance': {
    name: 'Insurance',
    summary: 'Insurance technology platforms, claims processing systems, and risk assessment tools that streamline operations and customer service.',
    strengths: ['Claims management systems', 'Policy administration platforms', 'Risk analytics & underwriting'],
    description: 'Streamline insurance operations with modern claims processing, policy administration platforms, and advanced risk analytics that improve customer service and reduce costs.',
  },
};

function IndustryDetail() {
  const { slug } = useParams();
  const industry = industriesData[slug];

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <p className="text-gray-600 mb-8">The industry page you're looking for doesn't exist.</p>
          <Link
            to="/industry"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg"
          >
            Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={getIndustryImage(industry.name)}
          alt={industry.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-end pb-16">
          <div className="max-w-4xl">
            <Link
              to="/industry"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Industries
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{industry.name}</h1>
            <p className="text-xl text-white/90 max-w-3xl">{industry.summary}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                {industry.description}
              </p>
            </div>

            {/* Key Strengths */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Strengths</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industry.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-lg">{strength}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Ready to Transform Your {industry.name} Operations?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Let's discuss how we can help your organization achieve its digital transformation goals
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndustryDetail;








