import React from 'react';

function LocationsSection() {
  const locations = [
    {
      city: 'Hyderabad',
      type: 'Registered Office',
      address: '1st Floor, TRENDZ SOLITAIRE, Vittal Rao Nagar, Madhapur, Hitec City, Hyderabad, Telangana 500081.',
      email: 'info@pdsatech.com',
      phone: '+91-7330758787',
      icon: '📍',
    },
    {
      city: 'Noida',
      type: 'Registered Office',
      address: 'C-56/30, C Block, Industrial Area, Divit Developers, 5th Floor, Noida, Uttar Pradesh 201307',
      email: 'info@pdsatech.com',
      phone: '+91-120 442 3603',
      icon: '📍',
    },
    {
      city: 'USA',
      type: 'Registered Office',
      address: '8832 Blakeney Professional Dr Suite 205, Charlotte, NC 28277, United States.',
      email: 'info@pdsatech.com',
      phone: '980-222-3242',
      icon: '📍',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our Offices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-4 border border-blue-100/50 hover:border-blue-300/70 overflow-hidden"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="text-6xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                  {location.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {location.city}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {location.type}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {location.address}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 border-t border-gray-200 pt-6">
                <div className="flex items-center justify-center text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${location.email}`} className="hover:underline">
                    {location.email}
                  </a>
                </div>
                <div className="flex items-center justify-center text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${location.phone}`} className="hover:underline">
                    {location.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocationsSection;


