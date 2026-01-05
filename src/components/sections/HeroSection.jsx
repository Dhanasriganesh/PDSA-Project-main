import React from 'react';
import heroVideo from "../../assets/videos/TetraXai.mp4";

function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden
      h-[50vh] min-h-[400px] 
      sm:h-[60vh] sm:min-h-[500px]
      md:h-[70vh] md:min-h-[600px]
      lg:h-[80vh] lg:min-h-[700px]
      xl:h-screen xl:min-h-[800px]
      2xl:min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* White overlay - can be adjusted for opacity if needed */}
        <div className="absolute inset-0 bg-white z-10"></div>
        
        {/* Video Container */}
        <div className="absolute inset-0 w-full h-full relative z-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          >
            <source src={heroVideo} type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {/* Optional: Content overlay area for future content */}
      <div className="relative z-30 w-full h-full flex items-center justify-center pointer-events-none">
        {/* Content can be added here in the future */}
      </div>
    </section>
  );
}

export default HeroSection;