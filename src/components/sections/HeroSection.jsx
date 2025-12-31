import React from 'react';
import heroVideo from "../../assets/videos/TetraXai.mp4";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-white z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover relative z-20"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default HeroSection;