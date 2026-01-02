import React from 'react';

function PageHeroSection({ title, subtitle, backgroundImage }) {
  return (
    <section 
      className="min-h-screen text-white relative overflow-hidden flex items-center justify-center"
      style={backgroundImage ? {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      } : {}}
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-100 leading-relaxed animate-fade-in-up-delay drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHeroSection;