import React from 'react';

function PageHeroSection({ title, subtitle, backgroundImage }) {
  return (
    <section className="text-white h-[65vh] py-16 relative overflow-hidden flex items-center">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover object-center" />
        </div>
      )}
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-100 leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHeroSection;