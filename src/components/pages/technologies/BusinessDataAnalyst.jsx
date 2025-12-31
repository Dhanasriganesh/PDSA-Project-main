import React from 'react';
import PageHeroSection from '../../sections/PageHeroSection';

const role = {
  name: 'Business & Data Analyst',
  introduction: 'Business and Data Analysts bridge business needs with data-driven insights, analyzing information to identify trends and recommend strategic improvements.',
  responsibilities: {
    title: 'Core Responsibilities',
    description: 'This hybrid role combines the strategic thinking of a business analyst with the technical skills of a data analyst.',
    points: [
      { name: 'Requirement Gathering', description: 'Collaborating with stakeholders to understand business problems, objectives, and requirements.' },
      { name: 'Data Collection & Cleaning', description: 'Sourcing data from various systems, ensuring its accuracy, and preparing it for analysis.' },
      { name: 'Data Analysis & Interpretation', description: 'Using statistical tools to analyze data, identify patterns, and extract actionable insights.' },
      { name: 'Process Improvement', description: 'Identifying opportunities to optimize business processes and workflows based on data.' },
      { name: 'Reporting & Visualization', description: 'Creating dashboards, reports, and visualizations to communicate findings to both technical and non-technical audiences.' },
      { name: 'Strategic Recommendations', description: 'Providing data-backed recommendations to support strategic decision-making and business growth.' },
    ],
  },
  skills: {
    title: 'Essential Skills',
    description: 'A successful Business and Data Analyst possesses a diverse set of skills.',
    points: [
      { name: 'Analytical & Critical Thinking', description: 'Ability to dissect problems, evaluate information, and make logical decisions.' },
      { name: 'SQL & Database Management', description: 'Proficiency in querying and managing relational databases.' },
      { name: 'BI & Visualization Tools (Tableau, Power BI)', description: 'Experience with tools to create compelling data visualizations.' },
      { name: 'Statistical Knowledge', description: 'Understanding of statistical concepts and experience with tools like R or Python.' },
      { name: 'Communication & Stakeholder Management', description: 'Excellent ability to communicate complex ideas clearly and manage expectations.' },
    ],
  },
  benefits: [
    'Drive strategic, data-informed decision-making.',
    'Improve operational efficiency and reduce costs.',
    'Identify new business opportunities and revenue streams.',
    'Enhance understanding of customer behavior.',
    'Foster a data-driven culture within the organization.',
  ],
};

function BusinessDataAnalyst() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeroSection 
        title={role.name}
        subtitle={role.introduction}
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
      />
      <main className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Responsibilities Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{role.responsibilities.title}</h2>
            <p className="text-gray-600 mb-6">{role.responsibilities.description}</p>
            <ul className="space-y-4">
              {role.responsibilities.points.map(point => (
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

          {/* Skills Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{role.skills.title}</h2>
            <p className="text-gray-600 mb-6">{role.skills.description}</p>
            <ul className="space-y-4">
              {role.skills.points.map(point => (
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Business Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {role.benefits.map(benefit => (
                <div key={benefit} className="p-4">
                  <div className="text-4xl text-blue-500 mb-2">💡</div>
                  <p className="text-gray-700 font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}

export default BusinessDataAnalyst;
