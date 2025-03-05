// components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center bg-yellow-400"
      style={{
        backgroundImage: "url('/images/header.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 pt-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-black mb-6 leading-tighter">
            Leftfield provides business and trade consulting.<br />
            
          </h1>
          <h2 className="text-3xl font-medium mb-6 leading-tighter">
            We help companies and industries grow.<br />
            We are experts at helping you boost revenues, expand market share, and increase enterprise value.
        
          </h2>
          <p className="text-xl mb-8 max-w-2xl">
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;