// components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-yellow-400">
      {/* Background image for larger screens only (sm and up) */}
      <div 
        className="absolute inset-0 w-full h-full hidden sm:block"
        style={{
          backgroundImage: "url('/images/header.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-6 pt-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            Leftfield provides business and trade consulting.
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl">
            We help companies and industries grow. We are experts at helping you boost revenues, expand market share, and increase enterprise value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;