import React from 'react';

function DevOps() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white h-[65vh] py-16 relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1600&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>DevOps Excellence</h1>
              <p className="text-xl text-white leading-relaxed" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
                Streamlined CI/CD pipelines and automated infrastructure for rapid, reliable deployments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Accelerate Development Lifecycle
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our DevOps solutions reduce deployment time by 90%, increase reliability, and enable continuous delivery 
                with automated testing, monitoring, and infrastructure management.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">90%</div>
                  <div className="text-sm opacity-90">Faster Deployments</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-sm opacity-90">Uptime Achieved</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">DevOps Services</h3>
              <ul className="space-y-4">
                {[
                  'CI/CD Pipeline Setup',
                  'Infrastructure as Code',
                  'Container Orchestration',
                  'Automated Testing',
                  'Monitoring & Alerting',
                  'Security Integration'
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

      {/* DevOps Tools & Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">DevOps Tools & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-bold mb-3 text-blue-600">CI/CD Tools</h3>
              <p className="text-gray-600 text-sm">Jenkins, GitLab CI, GitHub Actions, Azure DevOps</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-bold mb-3 text-blue-600">Cloud Platforms</h3>
              <p className="text-gray-600 text-sm">AWS, Azure, Google Cloud, Kubernetes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-bold mb-3 text-blue-600">Monitoring</h3>
              <p className="text-gray-600 text-sm">Prometheus, Grafana, ELK Stack, Datadog</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-bold mb-3 text-blue-600">Infrastructure</h3>
              <p className="text-gray-600 text-sm">Terraform, Ansible, Docker, Helm</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Optimize Your Development Pipeline</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Transform your development process with our proven DevOps methodologies
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

export default DevOps;