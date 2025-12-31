import React from 'react';
import PageHeroSection from '../../sections/PageHeroSection';

const technology = {
  name: 'ServiceNow Development',
  introduction: 'ServiceNow development creates custom applications and workflows on the cloud platform to automate business processes and streamline enterprise operations.',
  keyAreas: {
    title: 'Key Areas of ServiceNow Development',
    description: 'ServiceNow developers work across various areas of the platform to build and maintain custom solutions.',
    technologies: [
      { name: 'IT Service Management (ITSM)', description: 'Automating IT services, including incident, problem, and change management, to improve efficiency and service quality.' },
      { name: 'Custom Application Development', description: 'Building new applications from scratch using ServiceNow\'s App Engine to meet specific business needs that are not covered by out-of-the-box modules.' },
      { name: 'Workflow and Process Automation', description: 'Designing and implementing automated workflows to streamline business processes, reducing manual effort and improving accuracy.' },
      { name: 'Integration with Third-Party Systems', description: 'Connecting ServiceNow with other enterprise systems (like HR, ERP, and CRM) using REST, SOAP, and IntegrationHub.' },
      { name: 'Service Portal Development', description: 'Creating user-friendly, web-based portals for employees and customers to access services, submit requests, and find information.' },
    ],
  },
  coreComponents: {
    title: 'Core Platform Components',
    description: 'The ServiceNow platform is built on a set of core components that developers leverage.',
    technologies: [
      { name: 'Now Platform', description: 'The underlying cloud platform that provides the core services, database, and application development tools.' },
      { name: 'Scripts (JavaScript)', description: 'Using server-side and client-side JavaScript to create custom business logic and UI enhancements.' },
      { name: 'Flow Designer', description: 'A no-code/low-code tool for creating automated processes and workflows.' },
      { name: 'CMDB (Configuration Management Database)', description: 'A central repository that stores information about all technical services and assets.' },
    ],
  },
  benefits: [
    'Increased operational efficiency through automation.',
    'Improved visibility into business processes and IT services.',
    'Enhanced user experience with self-service portals.',
    'Rapid application development with low-code tools.',
    'Scalable platform that grows with your business needs.',
  ],
};

function ServiceNow() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeroSection 
        title={technology.name}
        subtitle={technology.introduction}
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
      />
      <main className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Key Areas Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{technology.keyAreas.title}</h2>
            <p className="text-gray-600 mb-6">{technology.keyAreas.description}</p>
            <ul className="space-y-4">
              {technology.keyAreas.technologies.map(tech => (
                <li key={tech.name} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">✓</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Components Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{technology.coreComponents.title}</h2>
            <p className="text-gray-600 mb-6">{technology.coreComponents.description}</p>
            <ul className="space-y-4">
              {technology.coreComponents.technologies.map(tech => (
                <li key={tech.name} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">✓</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Benefits of ServiceNow</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {technology.benefits.map(benefit => (
                <div key={benefit} className="p-4">
                  <div className="text-4xl text-blue-500 mb-2">⚙️</div>
                  <p className="text-gray-700 font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}

export default ServiceNow;
