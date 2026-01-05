import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logomain from '../../assets/logo-main.png';

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between 
          h-16 sm:h-20 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group shrink-0">
            <div className="h-10 w-auto sm:h-12 md:h-14 flex items-center justify-center">
              <img 
                src={logomain} 
                alt="PDSA Technologies Logo" 
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 max-w-[120px] sm:max-w-[140px] md:max-w-none"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            <Link 
              to="/" 
              className="px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 whitespace-nowrap"
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
                className="px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 flex items-center whitespace-nowrap"
              >
                Services
                <svg className="w-3 h-3 xl:w-4 xl:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-56 xl:w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 mt-1">
                  <Link to="/services/healthcare" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Healthcare</Link>
                  <Link to="/services/banking-financial" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Banking & Financial</Link>
                  <Link to="/services/media-entertainment" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Media & Entertainment</Link>
                  <Link to="/services/technology-enablement" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Technology Enablement</Link>
                  <Link to="/services/strategic-staffing" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Strategic Staffing</Link>
                  <Link to="/services/business-process-outsourcing" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Business Process Outsourcing</Link>
                  <Link to="/services/recruitment-process-outsourcing" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Recruitment Process Outsourcing</Link>
                  <Link to="/services/training-hub" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Training Hub</Link>
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
                className="px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 flex items-center whitespace-nowrap"
              >
                Industries
                <svg className="w-3 h-3 xl:w-4 xl:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 w-56 xl:w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 mt-1">
                  <Link to="/industries/financial-services" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Financial Services</Link>
                  <Link to="/industries/healthcare" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Healthcare</Link>
                  <Link to="/industries/media-entertainment-gaming" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Media, Entertainment & Gaming</Link>
                  <Link to="/industries/energy" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Energy</Link>
                  <Link to="/industries/telecommunication" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Telecommunication</Link>
                  <Link to="/industries/consumer-industrial-products" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Consumer & Industrial Products</Link>
                  <Link to="/industries/technology-enablement" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Technology Enablement</Link>
                  <Link to="/industries/transportation-travel" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Transportation & Travel</Link>
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
                className="px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 flex items-center whitespace-nowrap"
              >
                Technologies
                <svg className="w-3 h-3 xl:w-4 xl:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {activeDropdown === 'technologies' && (
                <div className="absolute top-full left-0 w-56 xl:w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto mt-1">
                  <Link to="/technologies/ai-machine-learning" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">AI & Machine Learning</Link>
                  <Link to="/technologies/cloud-computing" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Cloud Computing</Link>
                  <Link to="/technologies/devops" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">DevOps</Link>
                  <Link to="/technologies/big-data" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Big Data Technology</Link>
                  <Link to="/technologies/iot" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">IoT</Link>
                  <Link to="/technologies/android-development" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Android Development</Link>
                  <Link to="/technologies/java-python-fullstack" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Java/Python Full Stack</Link>
                  <Link to="/technologies/servicenow" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">ServiceNow</Link>
                  <Link to="/technologies/business-data-analyst" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Business/Data Analyst</Link>
                  <Link to="/technologies/qa-engineer" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">QA Engineer</Link>
                  <Link to="/technologies/data-science" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Data Science</Link>
                  <Link to="/technologies/salesforce" className="block px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Salesforce</Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/client" 
              className="px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 whitespace-nowrap"
            >
              Clients
            </Link>
            <Link 
              to="/about" 
              className="px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 whitespace-nowrap"
            >
              About
            </Link>
            <Link 
              to="/career" 
              className="px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 whitespace-nowrap"
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Get Started Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <Link
              to="/contact"
              className="hidden lg:block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold text-xs xl:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Started
            </Link>
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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
          <div className="lg:hidden py-3 sm:py-4 border-t border-gray-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-0.5 sm:space-y-1">
              <Link
                to="/"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/service"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Service
              </Link>
              <Link
                to="/industry"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Industry
              </Link>
              <Link
                to="/technology"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link
                to="/client"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Client
              </Link>
              <Link
                to="/about"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/career"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="mt-3 sm:mt-4 mx-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 sm:py-3 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-center font-semibold text-sm sm:text-base shadow-lg"
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
