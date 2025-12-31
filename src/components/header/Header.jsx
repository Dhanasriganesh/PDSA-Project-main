import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header if scrolled to top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="PDSA Technologies Logo" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if logo doesn't exist
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                PDSA
              </span>
              <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                Technologies Inc.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/service" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 flex items-center"
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link to="/services/healthcare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Healthcare</Link>
                  <Link to="/services/banking-financial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Banking & Financial</Link>
                  <Link to="/services/media-entertainment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Media & Entertainment</Link>
                  <Link to="/services/technology-enablement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Technology Enablement</Link>
                  <Link to="/services/strategic-staffing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Strategic Staffing</Link>
                  <Link to="/services/business-process-outsourcing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Business Process Outsourcing</Link>
                  <Link to="/services/recruitment-process-outsourcing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Recruitment Process Outsourcing</Link>
                  <Link to="/services/training-hub" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Training Hub</Link>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/industry" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 flex items-center"
              >
                Industries
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link to="/industries/financial-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Financial Services</Link>
                  <Link to="/industries/healthcare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Healthcare</Link>
                  <Link to="/industries/media-entertainment-gaming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Media, Entertainment & Gaming</Link>
                  <Link to="/industries/energy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Energy</Link>
                  <Link to="/industries/telecommunication" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Telecommunication</Link>
                  <Link to="/industries/consumer-industrial-products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Consumer & Industrial Products</Link>
                  <Link to="/industries/technology-enablement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Technology Enablement</Link>
                  <Link to="/industries/transportation-travel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Transportation & Travel</Link>
                </div>
              )}
            </div>

            {/* Technologies Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('technologies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/technology" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 flex items-center"
              >
                Technologies
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {activeDropdown === 'technologies' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto">
                  <Link to="/technologies/ai-machine-learning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">AI & Machine Learning</Link>
                  <Link to="/technologies/cloud-computing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Cloud Computing</Link>
                  <Link to="/technologies/devops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">DevOps</Link>
                  <Link to="/technologies/big-data" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Big Data Technology</Link>
                  <Link to="/technologies/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Web Development</Link>
                  <Link to="/technologies/iot" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">IoT</Link>
                  <Link to="/technologies/android-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Android Development</Link>
                  <Link to="/technologies/java-python-fullstack" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Java/Python Full Stack</Link>
                  <Link to="/technologies/servicenow" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">ServiceNow</Link>
                  <Link to="/technologies/business-data-analyst" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Business/Data Analyst</Link>
                  <Link to="/technologies/qa-engineer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">QA Engineer</Link>
                  <Link to="/technologies/data-science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Data Science</Link>
                  <Link to="/technologies/salesforce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Salesforce</Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/client" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Clients
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              About
            </Link>
            <Link 
              to="/career" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Get Started Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/service"
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Service
              </Link>
              <Link
                to="/industry"
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Industry
              </Link>
              <Link
                to="/technology"
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link
                to="/client"
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Client
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/career"
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="mt-4 mx-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-center font-semibold shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
