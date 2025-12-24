import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../../../assets/lottie/hero3d.json";

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-start justify-center overflow-hidden bg-white"
    >

      {/* Left Lottie - near bottom as background */}
      <div className="absolute left-10 -bottom-4 md:left-24 md:-bottom-12 w-[260px] md:w-[420px] opacity-60 z-0 pointer-events-none scale-x-[-1]">
        <Lottie animationData={heroAnimation} loop autoplay />
      </div>

      {/* Right Lottie - near bottom as background */}
      <div className="absolute right-10 -bottom-4 md:right-24 md:-bottom-12 w-[260px] md:w-[420px] opacity-80 z-0 pointer-events-none">
        <Lottie animationData={heroAnimation} loop autoplay />
      </div>

      {/* Optional: subtle top divider only (no colored gradients) */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-10 pb-24 text-blue-900">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 flex items-center space-x-3 border border-white/20 shadow-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sky-300 text-sm font-semibold tracking-wide">
                New
              </span>
              <span className="text-blue-900 text-sm font-medium">
                Introducing PDSA Technologies
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-light tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-blue-900">
              Transform your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              business with expert
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-blue-900">
              IT consulting solutions
            </span>
          </h1>

          {/* Buttons */}
       
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}

export default HeroSection;
