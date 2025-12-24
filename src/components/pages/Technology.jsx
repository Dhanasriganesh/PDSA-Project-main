import React, { useEffect, useRef, useState } from 'react';
import { getTechnologyImage } from '../../utils/industryUtils';

function TechnologyItem({ technology, index, isEven }) {
  const techRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (techRef.current) {
      observer.observe(techRef.current);
    }

    return () => {
      if (techRef.current) {
        observer.unobserve(techRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={techRef}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className={`w-full md:flex-1 transition-all duration-1000 ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}>
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{technology.name}</h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">{technology.description}</p>
          <div className="flex flex-wrap gap-2">
            {technology.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm font-medium border border-blue-100"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={`w-full md:flex-1 flex items-center justify-center transition-all duration-1000 ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}>
        <div className="w-full h-48 md:h-64 rounded-2xl shadow-2xl overflow-hidden">
          <img
            src={getTechnologyImage(technology.name)}
            alt={technology.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function Technology() {
  const technologies = [
    {
      name: 'AI & Machine Learning',
      description: 'Leverage the power of artificial intelligence to automate processes and gain actionable insights.',
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Natural Language Processing', 'Computer Vision'],
    },
    {
      name: 'Cloud Computing',
      description: 'Scalable cloud infrastructure solutions on leading platforms.',
      tools: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
    },
    {
      name: 'DevOps',
      description: 'Streamline development and deployment with modern DevOps practices.',
      tools: ['Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible', 'Prometheus'],
    },
    {
      name: 'Big Data Technologies',
      description: 'Process and analyze large datasets to extract valuable business insights.',
      tools: ['Hadoop', 'Spark', 'Kafka', 'Elasticsearch', 'Snowflake'],
    },
    {
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge frameworks.',
      tools: ['React', 'Node.js', 'Next.js', 'TypeScript', 'GraphQL'],
    },
    {
      name: 'IoT',
      description: 'Connect and manage devices in smart, interconnected systems.',
      tools: ['MQTT', 'AWS IoT', 'Azure IoT', 'Edge Computing', 'Sensor Integration'],
    },
    {
      name: 'Android Development',
      description: 'Native and cross-platform mobile applications for Android.',
      tools: ['Kotlin', 'Java', 'Flutter', 'React Native', 'Firebase'],
    },
    {
      name: 'Java/Python Full Stack',
      description: 'End-to-end development solutions using Java and Python ecosystems.',
      tools: ['Spring Boot', 'Django', 'Flask', 'FastAPI', 'Microservices'],
    },
    {
      name: 'ServiceNow',
      description: 'Enterprise service management and workflow automation.',
      tools: ['ServiceNow Platform', 'ITSM', 'ITOM', 'Custom Applications'],
    },
    {
      name: 'Business/Data Analyst',
      description: 'Transform data into actionable business intelligence and insights.',
      tools: ['Tableau', 'Power BI', 'SQL', 'Python', 'R'],
    },
    {
      name: 'QA Engineer',
      description: 'Ensure software quality through comprehensive testing strategies.',
      tools: ['Selenium', 'Jest', 'Cypress', 'JIRA', 'Test Automation'],
    },
    {
      name: 'Data Science',
      description: 'Advanced analytics and predictive modeling for data-driven decisions.',
      tools: ['Python', 'R', 'Jupyter', 'Pandas', 'Scikit-learn'],
    },
    {
      name: 'Salesforce',
      description: 'CRM solutions and custom applications on the Salesforce platform.',
      tools: ['Salesforce CRM', 'Apex', 'Lightning', 'Salesforce Integration'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
          alt="Technologies"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Technologies</h1>
            <p className="text-xl text-white/90">
              Cutting-edge technologies we work with
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {technologies.map((tech, index) => (
              <TechnologyItem
                key={index}
                technology={tech}
                index={index}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Need Expertise in These Technologies?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Our team of experts can help you leverage these technologies for your business
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

export default Technology;

