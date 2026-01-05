import React from 'react';
import PageHeroSection from '../../sections/PageHeroSection';

const technology = {
  name: 'Data Science',
  introduction: 'Data science extracts valuable insights from structured and unstructured data using scientific methods, statistics, and algorithms to drive informed business decisions.',
  lifecycle: {
    title: 'The Data Science Lifecycle',
    description: 'Data science projects typically follow a lifecycle that includes several key stages, from data acquisition to communication of results.',
    points: [
      { name: 'Business Understanding & Problem Formulation', description: 'Defining the business problem and the questions to be answered with data.' },
      { name: 'Data Acquisition & Collection', description: 'Gathering raw data from various sources, such as databases, APIs, and files.' },
      { name: 'Data Preparation & Cleaning', description: 'Handling missing values, correcting inconsistencies, and transforming data into a usable format.' },
      { name: 'Exploratory Data Analysis (EDA)', description: 'Analyzing datasets to summarize their main characteristics, often with visual methods.' },
      { name: 'Modeling & Machine Learning', description: 'Building, training, and evaluating predictive or descriptive models to answer the business question.' },
      { name: 'Communication & Visualization', description: 'Presenting the findings and insights to stakeholders in a clear and compelling way.' },
    ],
  },
  coreConcepts: {
    title: 'Core Concepts & Techniques',
    description: 'Data science leverages a wide array of techniques and concepts to uncover insights.',
    points: [
      { name: 'Statistics & Probability', description: 'The mathematical foundation for making inferences and predictions from data.' },
      { name: 'Machine Learning & AI', description: 'Algorithms that allow computers to learn from data and make predictions or decisions.' },
      { name: 'Big Data Technologies', description: 'Tools and platforms (like Hadoop and Spark) for processing and analyzing massive datasets.' },
      { name: 'Data Visualization', description: 'The practice of turning data into visual representations like charts and graphs to highlight trends.' },
      { name: 'Programming (Python & R)', description: 'Using programming languages to manipulate data and build models.' },
    ],
  },
  benefits: [
    'Empowers management to make better, data-driven decisions.',
    'Helps identify trends and predict future outcomes.',
    'Improves operational efficiency and business processes.',
    'Enhances customer understanding and personalization.',
    'Drives innovation by identifying new product or service opportunities.',
  ],
};

function DataScience() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeroSection 
        title={technology.name}
        subtitle={technology.introduction}
        backgroundImage="https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=1600&q=80"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Lifecycle Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{technology.lifecycle.title}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{technology.lifecycle.description}</p>
            <ul className="space-y-3 sm:space-y-4">
              {technology.lifecycle.points.map(point => (
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

          {/* Core Concepts Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{technology.coreConcepts.title}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{technology.coreConcepts.description}</p>
            <ul className="space-y-3 sm:space-y-4">
              {technology.coreConcepts.points.map(point => (
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
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Impact of Data Science</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 text-center">
              {technology.benefits.map(benefit => (
                <div key={benefit} className="p-3 sm:p-4">
                  <div className="text-3xl sm:text-4xl text-blue-500 mb-2">📈</div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}

export default DataScience;
