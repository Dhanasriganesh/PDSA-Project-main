import React from 'react';

function IoT() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white h-[65vh] py-16 relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1600&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>IoT Solutions</h1>
            <p className="text-xl text-white leading-relaxed" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
              Connect, monitor, and control devices with intelligent IoT platforms and edge computing
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Smart Connected Ecosystems
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our IoT solutions enable seamless device connectivity, real-time monitoring, and intelligent automation 
                across industrial, healthcare, and smart city applications with enterprise-grade security.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">1M+</div>
                  <div className="text-sm opacity-90">Connected Devices</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">99.5%</div>
                  <div className="text-sm opacity-90">Network Reliability</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">IoT Services</h3>
              <ul className="space-y-4">
                {[
                  'Device Connectivity',
                  'Edge Computing',
                  'Real-time Analytics',
                  'Sensor Networks',
                  'Remote Monitoring',
                  'Predictive Maintenance'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">IoT Applications Across Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Smart Manufacturing</h3>
              <p className="text-gray-600 mb-4">Industrial IoT solutions for predictive maintenance and process optimization.</p>
              <div className="text-sm text-gray-500">
                • Equipment monitoring • Quality control • Energy management
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Smart Cities</h3>
              <p className="text-gray-600 mb-4">Urban IoT infrastructure for traffic, utilities, and environmental monitoring.</p>
              <div className="text-sm text-gray-500">
                • Traffic management • Smart lighting • Waste management
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Healthcare IoT</h3>
              <p className="text-gray-600 mb-4">Connected medical devices and remote patient monitoring systems.</p>
              <div className="text-sm text-gray-500">
                • Patient monitoring • Asset tracking • Telemedicine
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Agriculture</h3>
              <p className="text-gray-600 mb-4">Precision farming with soil sensors, weather monitoring, and crop analytics.</p>
              <div className="text-sm text-gray-500">
                • Soil monitoring • Irrigation control • Crop analytics
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Retail & Logistics</h3>
              <p className="text-gray-600 mb-4">Supply chain visibility, inventory tracking, and customer analytics.</p>
              <div className="text-sm text-gray-500">
                • Asset tracking • Inventory management • Customer insights
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Energy & Utilities</h3>
              <p className="text-gray-600 mb-4">Smart grid management, renewable energy monitoring, and consumption optimization.</p>
              <div className="text-sm text-gray-500">
                • Smart meters • Grid monitoring • Energy optimization
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Connect Your World</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Build intelligent IoT ecosystems that transform how you monitor and control your operations
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default IoT;