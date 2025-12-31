import React from 'react';
import PageHeroSection from '../../sections/PageHeroSection';

const technology = {
  name: 'Salesforce Development',
  introduction: 'Salesforce development builds custom applications and solutions on the Salesforce platform, extending CRM functionality to meet specific business needs and automate processes.',
  keyAreas: {
    title: 'Key Areas of Salesforce Development',
    description: 'Salesforce developers use a combination of declarative (point-and-click) and programmatic tools to build and customize the platform.',
    points: [
      { name: 'Customization & Automation', description: 'Using tools like Process Builder and Flow to create custom workflows, validation rules, and approval processes without writing code.' },
      { name: 'Apex Development', description: 'Writing custom, server-side logic and business processes using Apex, Salesforce\'s proprietary, Java-like programming language.' },
      { name: 'Lightning Component Framework', description: 'Building modern, responsive user interfaces with Lightning Web Components (LWC) and Aura Components.' },
      { name: 'Visualforce', description: 'Creating custom pages and user interfaces with a tag-based markup language that is similar to HTML.' },
      { name: 'Integration with External Systems', description: 'Using APIs (REST and SOAP) to connect Salesforce with other applications and data sources.' },
    ],
  },
  coreConcepts: {
    title: 'Core Platform Concepts',
    description: 'Understanding the Salesforce architecture is key to effective development.',
    points: [
      { name: 'Objects, Fields, and Records', description: 'The fundamental data model, where Objects are like database tables, Fields are columns, and Records are rows.' },
      { name: 'SOQL & SOSL', description: 'Salesforce Object Query Language (SOQL) for retrieving data, and Salesforce Object Search Language (SOSL) for text-based searches.' },
      { name: 'Governor Limits', description: 'The set of rules and limits Salesforce enforces to ensure efficient use of resources in the multi-tenant environment.' },
      { name: 'Security Model', description: 'A comprehensive security model that controls data access at the organization, object, record, and field level.' },
    ],
  },
  benefits: [
    'Tailored CRM solution that fits your exact business processes.',
    'Increased productivity through automation of manual tasks.',
    '360-degree view of the customer by integrating data from multiple systems.',
    'Scalable platform that supports business growth.',
    'Access to a vast ecosystem of third-party apps on the AppExchange.',
  ],
};

function Salesforce() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeroSection 
        title={technology.name}
        subtitle={technology.introduction}
        backgroundImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80"
      />
      <main className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Key Areas Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{technology.keyAreas.title}</h2>
            <p className="text-gray-600 mb-6">{technology.keyAreas.description}</p>
            <ul className="space-y-4">
              {technology.keyAreas.points.map(point => (
                <li key={point.name} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">✓</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{point.name}</h4>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Concepts Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{technology.coreConcepts.title}</h2>
            <p className="text-gray-600 mb-6">{technology.coreConcepts.description}</p>
            <ul className="space-y-4">
              {technology.coreConcepts.points.map(point => (
                <li key={point.name} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">✓</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{point.name}</h4>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Business Advantages</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {technology.benefits.map(benefit => (
                <div key={benefit} className="p-4">
                  <div className="text-4xl text-blue-500 mb-2">☁️</div>
                  <p className="text-gray-700 font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}

export default Salesforce;
