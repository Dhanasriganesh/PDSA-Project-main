import React from 'react';
import PageHeroSection from '../../sections/PageHeroSection';

const role = {
  name: 'QA Engineer',
  introduction: 'QA Engineers ensure software quality by identifying defects and verifying that products meet customer expectations and business requirements before release.',
  responsibilities: {
    title: 'Core Responsibilities',
    description: 'A QA Engineer\'s role is multifaceted, involving a range of tasks from planning to execution and reporting.',
    points: [
      { name: 'Test Planning and Design', description: 'Creating detailed, comprehensive, and well-structured test plans and test cases based on software requirements.' },
      { name: 'Test Execution', description: 'Performing manual and automated tests to identify, record, and document bugs and defects.' },
      { name: 'Regression Testing', description: 'Ensuring that new code changes do not adversely affect existing functionalities.' },
      { name: 'Performance Testing', description: 'Testing the software\'s performance, scalability, and reliability under different load conditions.' },
      { name: 'Defect Tracking and Management', description: 'Logging and tracking defects in a bug tracking system and working with developers to resolve them.' },
      { name: 'Process Improvement', description: 'Continuously improving the testing process and staying up-to-date with new testing tools and strategies.' },
    ],
  },
  skills: {
    title: 'Essential Skills',
    description: 'A successful QA Engineer combines technical expertise with a meticulous attention to detail.',
    points: [
      { name: 'Attention to Detail', description: 'A keen eye for identifying even the smallest inconsistencies and defects.' },
      { name: 'Analytical & Problem-Solving Skills', description: 'The ability to understand complex systems and troubleshoot issues effectively.' },
      { name: 'Test Automation', description: 'Proficiency with automation tools like Selenium, Cypress, or Playwright to write and maintain test scripts.' },
      { name: 'Understanding of SDLC', description: 'Knowledge of the software development lifecycle and methodologies like Agile and Scrum.' },
      { name: 'Communication Skills', description: 'Clear and concise communication with developers, project managers, and other stakeholders.' },
    ],
  },
  benefits: [
    'Improves product quality and reliability.',
    'Reduces development costs by finding bugs early.',
    'Enhances customer satisfaction and trust.',
    'Increases development speed by preventing post-release issues.',
    'Ensures the software meets business and user requirements.',
  ],
};

function QAEngineer() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeroSection 
        title={role.name}
        subtitle={role.introduction}
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Responsibilities Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{role.responsibilities.title}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{role.responsibilities.description}</p>
            <ul className="space-y-3 sm:space-y-4">
              {role.responsibilities.points.map(point => (
                <li key={point.name} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">✓</div>
                  <div className="ml-3 sm:ml-4">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800">{point.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{role.skills.title}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{role.skills.description}</p>
            <ul className="space-y-3 sm:space-y-4">
              {role.skills.points.map(point => (
                <li key={point.name} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">✓</div>
                  <div className="ml-3 sm:ml-4">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800">{point.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Value of Quality Assurance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 text-center">
              {role.benefits.map(benefit => (
                <div key={benefit} className="p-3 sm:p-4">
                  <div className="text-3xl sm:text-4xl text-blue-500 mb-2">🛡️</div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}

export default QAEngineer;
