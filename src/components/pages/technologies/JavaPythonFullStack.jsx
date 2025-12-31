import React from 'react';
import PageHeroSection from '../../sections/PageHeroSection';

const technology = {
  name: 'Java & Python Full Stack Development',
  introduction: 'Full-stack development with Java and Python enables building complete web applications from frontend to backend, delivering scalable and robust solutions for modern businesses.',
  frontend: {
    title: 'Frontend Development',
    description: 'The frontend is what users directly interact with. It involves structuring content, styling, and adding interactivity.',
    technologies: [
      { name: 'HTML', description: 'The standard markup language for creating web pages.' },
      { name: 'CSS', description: 'A style sheet language used for describing the presentation of a document written in HTML.' },
      { name: 'JavaScript', description: 'A programming language that enables interactive web pages.' },
      { name: 'Frontend Frameworks (React, Angular, Vue.js)', description: 'Libraries and frameworks that streamline frontend development.' },
    ],
  },
  backendJava: {
    title: 'Backend Development with Java',
    description: 'Java is a robust, scalable, and widely used language for backend development, particularly in enterprise-level applications.',
    technologies: [
      { name: 'Java', description: 'The core programming language for building the application logic.' },
      { name: 'Spring Framework (Spring Boot)', description: 'A powerful framework for building scalable and secure backend systems.' },
      { name: 'Hibernate', description: 'An object-relational mapping tool for Java environments.' },
      { name: 'Databases (MySQL, PostgreSQL, Oracle)', description: 'Relational databases used for data storage and retrieval.' },
    ],
  },
  backendPython: {
    title: 'Backend Development with Python',
    description: 'Python is known for its simplicity, readability, and versatility, making it popular for rapid development, data science, and AI/ML integration.',
    technologies: [
      { name: 'Python', description: 'The core programming language, praised for its clean syntax.' },
      { name: 'Django & Flask', description: 'Prominent web frameworks for building robust backend services and APIs.' },
      { name: 'Databases (SQLite, PostgreSQL, MongoDB)', description: 'Both relational and NoSQL databases are commonly used.' },
      { name: 'AI/ML Integration', description: 'Python excels at integrating machine learning and data science libraries.' },
    ],
  },
  benefits: [
    'End-to-end project ownership and understanding.',
    'Versatility to work on both client and server-side tasks.',
    'Faster development cycles and easier team collaboration.',
    'Ability to build complete, functional applications from scratch.',
  ],
};

function JavaPythonFullStack() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeroSection 
        title={technology.name}
        subtitle={technology.introduction}
        backgroundImage="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&q=80"
      />
      <main className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{technology.frontend.title}</h2>
            <p className="text-gray-600 mb-6">{technology.frontend.description}</p>
            <ul className="space-y-4">
              {technology.frontend.technologies.map(tech => (
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

          {/* Backend Sections */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{technology.backendJava.title}</h2>
              <p className="text-gray-600 mb-6">{technology.backendJava.description}</p>
              <ul className="space-y-4">
                {technology.backendJava.technologies.map(tech => (
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
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{technology.backendPython.title}</h2>
              <p className="text-gray-600 mb-6">{technology.backendPython.description}</p>
              <ul className="space-y-4">
                {technology.backendPython.technologies.map(tech => (
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
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Benefits of Full Stack Development</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {technology.benefits.map(benefit => (
                <div key={benefit} className="p-4">
                  <div className="text-4xl text-blue-500 mb-2">🚀</div>
                  <p className="text-gray-700 font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}

export default JavaPythonFullStack;
