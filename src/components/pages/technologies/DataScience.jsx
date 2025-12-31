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
      <main className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Lifecycle Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{technology.lifecycle.title}</h2>
            <p className="text-gray-600 mb-6">{technology.lifecycle.description}</p>
            <ul className="space-y-4">
              {technology.lifecycle.points.map(point => (
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Impact of Data Science</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {technology.benefits.map(benefit => (
                <div key={benefit} className="p-4">
                  <div className="text-4xl text-blue-500 mb-2">📈</div>
                  <p className="text-gray-700 font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}

export default DataScience;
