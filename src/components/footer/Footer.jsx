import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Explore Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/service" className="hover:text-blue-600 transition-colors duration-200">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-blue-600 transition-colors duration-200">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-6">Technology</h3>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-3">
                <li>
                  <Link to="/technology/ai" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    AI
                  </Link>
                </li>
                <li>
                  <Link to="/technology/cloud" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link to="/technology/devops" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link to="/technology/bigdata" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Big Data Technology
                  </Link>
                </li>
                <li>
                  <Link to="/technology/web" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/technology/iot" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    IoT
                  </Link>
                </li>
                <li>
                  <Link to="/technology/android" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Android Developer
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link to="/technology/fullstack" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Java/Python Full Stack
                  </Link>
                </li>
                <li>
                  <Link to="/technology/servicenow" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    ServiceNow
                  </Link>
                </li>
                <li>
                  <Link to="/technology/analyst" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Business/Data Analyst
                  </Link>
                </li>
                <li>
                  <Link to="/technology/qa" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    QA Engineer
                  </Link>
                </li>
                <li>
                  <Link to="/technology/datascience" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link to="/technology/salesforce" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Salesforce
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Industry Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-6">Industry</h3>
            <div className="grid grid-cols-1 gap-2">
              <ul className="space-y-3">
                <li>
                  <Link to="/industry/financial" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Financial Service
                  </Link>
                </li>
                <li>
                  <Link to="/industry/healthcare" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link to="/industry/media" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Media, Entertainment & Gaming
                  </Link>
                </li>
                <li>
                  <Link to="/industry/tech-enablement" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Technology Enablement
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link to="/industry/telecom" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Telecommunication
                  </Link>
                </li>
                <li>
                  <Link to="/industry/energy" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Energy
                  </Link>
                </li>
                <li>
                  <Link to="/industry/consumer" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Consumer and Industrial Products
                  </Link>
                </li>
                <li>
                  <Link to="/industry/transport" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                    Transportation and Travel
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Headquarters */}
            <div>
              <h3 className="text-gray-900 text-lg font-bold mb-4">
                PDSA Technologies Headquarter
              </h3>
              <address className="not-italic space-y-2 text-sm">
                <p>
                  <Link
                    to="https://maps.google.com/?q=9700+Research+Dr+%23100+Charlotte,+NC+28262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    9700 Research Dr #100<br />
                    Charlotte, NC 28262 USA
                  </Link>
                </p>
                <p>
                  <Link
                    to="tel:+19807819639"
                    className="hover:text-blue-400 transition-colors duration-200 block"
                  >
                    +1 (980) 781-9639
                  </Link>
                  <Link
                    to="mailto:career@tetraxai.com"
                    className="hover:text-blue-400 transition-colors duration-200 block"
                  >
                    career@tetraxai.com
                  </Link>
                </p>
              </address>
            </div>

            {/* Development Center */}
            <div>
              <h3 className="text-gray-900 text-lg font-bold mb-4">
                PDSA Technologies Development Center
              </h3>
              <address className="not-italic space-y-2 text-sm">
                <p>
                  <Link
                    to="https://maps.google.com/?q=Hyderabad,+Telangana,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Unit no. 1020, 9th floor,<br />
                    Vasaavi MPM Grand, Ameerpet,<br />
                    Near by metro station,<br />
                    Hyderabad, Telangana, India
                  </Link>
                </p>
                <p>
                  <Link
                    to="tel:+917793992217"
                    className="hover:text-blue-400 transition-colors duration-200 block"
                  >
                    +91 77939 92217
                  </Link>
                  <Link
                    to="mailto:career@tetraxai.com"
                    className="hover:text-blue-400 transition-colors duration-200 block"
                  >
                    career@tetraxai.com
                  </Link>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0 text-gray-500">
              <span className="inline-block animate-[fadeInUp_0.5s_ease-out]">&copy;</span>
              <span className="inline-block animate-[fadeInUp_0.7s_ease-out]">&nbsp;{new Date().getFullYear()}</span>
              <span className="inline-block animate-[fadeInUp_0.9s_ease-out]">&nbsp;PDSA</span>
              <span className="inline-block animate-[fadeInUp_1.1s_ease-out]">&nbsp;Technologies</span>
              <span className="inline-block animate-[fadeInUp_1.3s_ease-out]">&nbsp;Inc.</span>
              <span className="inline-block animate-[fadeInUp_1.5s_ease-out]">&nbsp;All</span>
              <span className="inline-block animate-[fadeInUp_1.7s_ease-out]">&nbsp;rights</span>
              <span className="inline-block animate-[fadeInUp_1.9s_ease-out]">&nbsp;reserved.</span>
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm hover:text-blue-600 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes fadeInUp {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}</style>
      </div>
    </footer>
  );
}

export default Footer;
