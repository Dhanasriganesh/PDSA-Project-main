import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#eef3fb] py-12">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top Section - Company Info and Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-blue-600 mb-3">PDSA Technologies</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              PDSA is an independent technology company and digital transformation partner. We help businesses design, integrate, and scale their digital solutions.
            </p>
            <div className="bg-green-500 text-white px-3 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-2 mb-4">
              <span>✓</span>
              <span>E-Verified Company</span>
            </div>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-gray-800">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/client" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/technology" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Technologies
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/industry" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/career" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-gray-800">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/services/healthcare" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/services/banking-financial" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Banking & Financial
                </Link>
              </li>
              <li>
                <Link to="/services/media-entertainment" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Media & Entertainment
                </Link>
              </li>
              <li>
                <Link to="/services/technology-enablement" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Technology Enablement
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-staffing" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Strategic Staffing
                </Link>
              </li>
              <li>
                <Link to="/services/business-process-outsourcing" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Business Process Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/services/recruitment-process-outsourcing" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Recruitment Process Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/services/training-hub" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Training Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-gray-800">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/industries/financial-services" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Financial Services
                </Link>
              </li>
              <li>
                <Link to="/industries/healthcare" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/industries/media-entertainment-gaming" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Media, Entertainment & Gaming
                </Link>
              </li>
              <li>
                <Link to="/industries/energy" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Energy
                </Link>
              </li>
              <li>
                <Link to="/industries/telecommunication" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Telecommunication
                </Link>
              </li>
              <li>
                <Link to="/industries/consumer-industrial-products" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Consumer & Industrial Products
                </Link>
              </li>
              <li>
                <Link to="/industries/technology-enablement" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Technology Enablement
                </Link>
              </li>
              <li>
                <Link to="/industries/transportation-travel" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Transportation & Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-gray-800">Technologies</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/technologies/ai-machine-learning" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/technologies/cloud-computing" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="/technologies/devops" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  DevOps
                </Link>
              </li>
              <li>
                <Link to="/technologies/big-data" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Big Data Technology
                </Link>
              </li>
              <li>
                <Link to="/technologies/web-development" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/technologies/iot" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  IoT
                </Link>
              </li>
              <li>
                <Link to="/technologies/android-development" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Android Development
                </Link>
              </li>
              <li>
                <Link to="/technologies/java-python-fullstack" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Java/Python Full Stack
                </Link>
              </li>
              <li>
                <Link to="/technologies/servicenow" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  ServiceNow
                </Link>
              </li>
              <li>
                <Link to="/technologies/business-data-analyst" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Business/Data Analyst
                </Link>
              </li>
              <li>
                <Link to="/technologies/qa-engineer" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  QA Engineer
                </Link>
              </li>
              <li>
                <Link to="/technologies/data-science" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/technologies/salesforce" className="flex items-center hover:text-blue-600 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-gray-400" />
                  Salesforce
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Locations Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-orange-500 mr-4"></div>
            <h3 className="text-2xl font-bold text-gray-800">Our Locations</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* US Headquarters */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-orange-500 mr-2 text-lg" />
                <h4 className="font-bold text-gray-800 text-lg">PDSA Headquarters</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    4111-e Rose Lake Dr Charlotte NC 28217
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaPhone className="mr-2 text-blue-600" />
                      <a href="tel:+19807819639" className="hover:text-blue-600">+1 980 781 9639</a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaEnvelope className="mr-2 text-blue-600" />
                      <a href="mailto:contact@pdsatech.com" className="hover:text-blue-600">contact@pdsatech.com</a>
                    </div>
                  </div>
                </div>
                <div className="w-full h-32 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps?q=4111-e+Rose+Lake+Dr+Charlotte+NC+28217&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PDSA Headquarters Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* India Development Center */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-orange-500 mr-2 text-lg" />
                <h4 className="font-bold text-gray-800 text-lg">PDSA Development Center</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    Unit no. 1020, 9th floor, Vasavi MPM Grand, Ameerpet, Near by metro station, Hyderabad, Telangana, India
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaPhone className="mr-2 text-blue-600" />
                      <a href="tel:+917793992217" className="hover:text-blue-600">+91 77939 92217</a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaEnvelope className="mr-2 text-blue-600" />
                      <a href="mailto:contact@pdsatech.com" className="hover:text-blue-600">contact@pdsatech.com</a>
                    </div>
                  </div>
                </div>
                <div className="w-full h-32 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps?q=Vasavi+MPM+Grand,+Ameerpet,+Hyderabad,+Telangana,+India&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PDSA Development Center Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <span className="text-sm text-gray-600">© 2020 PDSA Technologies. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
