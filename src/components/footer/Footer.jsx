import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Advanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-gradient-shift"></div>
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(96, 165, 250, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(96, 165, 250, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Moving White Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moving Circles */}
        <div className="absolute w-20 h-20 border-2 border-white/20 rounded-full animate-float-1"></div>
        <div className="absolute w-16 h-16 border-2 border-white/20 rounded-full animate-float-2" style={{ top: '20%', left: '10%' }}></div>
        <div className="absolute w-24 h-24 border-2 border-white/20 rounded-full animate-float-3" style={{ top: '60%', left: '80%' }}></div>
        <div className="absolute w-14 h-14 border-2 border-white/20 rounded-full animate-float-4" style={{ top: '80%', left: '30%' }}></div>
        <div className="absolute w-18 h-18 border-2 border-white/20 rounded-full animate-float-5" style={{ top: '40%', left: '70%' }}></div>
        
        {/* Moving Squares */}
        <div className="absolute w-16 h-16 border-2 border-white/20 rotate-45 animate-float-6" style={{ top: '10%', left: '50%' }}></div>
        <div className="absolute w-12 h-12 border-2 border-white/20 rotate-45 animate-float-7" style={{ top: '70%', left: '20%' }}></div>
        <div className="absolute w-20 h-20 border-2 border-white/20 rotate-45 animate-float-8" style={{ top: '30%', left: '90%' }}></div>
        
        {/* Moving Triangles */}
        <div className="absolute animate-float-9" style={{ top: '15%', left: '75%' }}>
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-white/20"></div>
        </div>
        <div className="absolute animate-float-10" style={{ top: '50%', left: '15%' }}>
          <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-white/20"></div>
        </div>
        <div className="absolute animate-float-11" style={{ top: '85%', left: '60%' }}>
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-white/20"></div>
        </div>
        
        {/* Moving Lines */}
        <div className="absolute w-32 h-0.5 bg-white/15 animate-slide-1" style={{ top: '25%', left: '0%' }}></div>
        <div className="absolute w-24 h-0.5 bg-white/15 animate-slide-2" style={{ top: '55%', left: '0%' }}></div>
        <div className="absolute w-28 h-0.5 bg-white/15 animate-slide-3" style={{ top: '75%', left: '0%' }}></div>
        
        {/* Vertical Lines */}
        <div className="absolute w-0.5 h-32 bg-white/15 animate-slide-4" style={{ top: '0%', left: '25%' }}></div>
        <div className="absolute w-0.5 h-24 bg-white/15 animate-slide-5" style={{ top: '0%', left: '65%' }}></div>
        <div className="absolute w-0.5 h-28 bg-white/15 animate-slide-6" style={{ top: '0%', left: '85%' }}></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Section - Company Info and Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="w-14 h-14 flex items-center justify-center mb-3 group bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <img 
                src="/logo.png" 
                alt="PDSA Technologies Logo" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-lg"
                onError={(e) => {
                  // Fallback if logo doesn't exist
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              PDSA is an independent technology company and digital transformation partner. We help businesses design, integrate, and scale their digital solutions.
            </p>
            <div className="bg-green-500 text-white px-3 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-2 mb-4 shadow-lg">
              <span>✓</span>
              <span>E-Verified Company</span>
            </div>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/client" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/technology" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Technologies
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/industry" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/career" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/services/healthcare" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/services/banking-financial" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Banking & Financial
                </Link>
              </li>
              <li>
                <Link to="/services/media-entertainment" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Media & Entertainment
                </Link>
              </li>
              <li>
                <Link to="/services/technology-enablement" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Technology Enablement
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-staffing" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Strategic Staffing
                </Link>
              </li>
              <li>
                <Link to="/services/business-process-outsourcing" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Business Process Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/services/recruitment-process-outsourcing" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Recruitment Process Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/services/training-hub" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Training Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-white">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/industries/financial-services" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Financial Services
                </Link>
              </li>
              <li>
                <Link to="/industries/healthcare" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/industries/media-entertainment-gaming" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Media, Entertainment & Gaming
                </Link>
              </li>
              <li>
                <Link to="/industries/energy" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Energy
                </Link>
              </li>
              <li>
                <Link to="/industries/telecommunication" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Telecommunication
                </Link>
              </li>
              <li>
                <Link to="/industries/consumer-industrial-products" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Consumer & Industrial Products
                </Link>
              </li>
              <li>
                <Link to="/industries/technology-enablement" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Technology Enablement
                </Link>
              </li>
              <li>
                <Link to="/industries/transportation-travel" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Transportation & Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-white">Technologies</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/technologies/ai-machine-learning" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/technologies/cloud-computing" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="/technologies/devops" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  DevOps
                </Link>
              </li>
              <li>
                <Link to="/technologies/big-data" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Big Data Technology
                </Link>
              </li>
              <li>
                <Link to="/technologies/web-development" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/technologies/iot" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  IoT
                </Link>
              </li>
              <li>
                <Link to="/technologies/android-development" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Android Development
                </Link>
              </li>
              <li>
                <Link to="/technologies/java-python-fullstack" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Java/Python Full Stack
                </Link>
              </li>
              <li>
                <Link to="/technologies/servicenow" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  ServiceNow
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Technologies Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-white">&nbsp;</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/technologies/business-data-analyst" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Business/Data Analyst
                </Link>
              </li>
              <li>
                <Link to="/technologies/qa-engineer" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  QA Engineer
                </Link>
              </li>
              <li>
                <Link to="/technologies/data-science" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/technologies/salesforce" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaChevronRight className="text-xs mr-2 text-blue-400/50" />
                  Salesforce
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Locations Section */}
        <div className="border-t border-gray-600/50 pt-8">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-orange-500 mr-4 shadow-lg shadow-orange-500/50"></div>
            <h3 className="text-2xl font-bold text-white">Our Locations</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* US Headquarters */}
            <div className="location-card bg-white/10 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 p-6 transition-all duration-300 relative overflow-hidden group cursor-pointer">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="location-icon-wrapper mr-2">
                    <FaMapMarkerAlt className="text-orange-400 text-lg transition-all duration-300" />
                  </div>
                  <h4 className="font-bold text-white text-lg transition-colors duration-300 group-hover:text-blue-300">PDSA Headquarters</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-300 mb-4">
                    4111-e Rose Lake Dr Charlotte NC 28217
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <FaPhone className="mr-2 text-blue-400" />
                      <a href="tel:+19807819639" className="hover:text-blue-400 transition-colors">+1 980 781 9639</a>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <FaEnvelope className="mr-2 text-blue-400" />
                      <a href="mailto:contact@pdsatech.com" className="hover:text-blue-400 transition-colors">contact@pdsatech.com</a>
                    </div>
                  </div>
                </div>
                <div className="w-full h-32 rounded-lg overflow-hidden border border-white/20 shadow-lg group-hover:border-blue-400/50 transition-all duration-300">
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
            </div>

            {/* India Development Center */}
            <div className="location-card bg-white/10 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 p-6 transition-all duration-300 relative overflow-hidden group cursor-pointer">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="location-icon-wrapper mr-2">
                    <FaMapMarkerAlt className="text-orange-400 text-lg transition-all duration-300" />
                  </div>
                  <h4 className="font-bold text-white text-lg transition-colors duration-300 group-hover:text-blue-300">PDSA Development Center</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-300 mb-4">
                      Unit no. 1020, 9th floor, Vasavi MPM Grand, Ameerpet, Near by metro station, Hyderabad, Telangana, India
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-300">
                        <FaPhone className="mr-2 text-blue-400" />
                        <a href="tel:+917793992217" className="hover:text-blue-400 transition-colors">+91 77939 92217</a>
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <FaEnvelope className="mr-2 text-blue-400" />
                        <a href="mailto:contact@pdsatech.com" className="hover:text-blue-400 transition-colors">contact@pdsatech.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-32 rounded-lg overflow-hidden border border-white/20 shadow-lg group-hover:border-blue-400/50 transition-all duration-300">
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
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600/50 mt-8 pt-6 text-center">
          <span className="text-sm text-gray-300">© 2020 PDSA Technologies. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
