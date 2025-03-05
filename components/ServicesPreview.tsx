// components/ServicesPreview.tsx
import Link from 'next/link';
import React from 'react';

const ServicesPreview = () => {
  return (
    <div className="min-h-screen flex items-center bg-[#FFF8E8]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Services Text Content */}
          <div className="flex flex-col space-y-16">
            {/* Trade Development */}
            <div>
              <h3 className="text-5xl font-bold mb-6">Trade Development</h3>
              <p className="text-xl mb-6">
                We work with clients to identify new global markets for their products and help them successfully sell into those geographies.
              </p>
              <Link 
                href="/services" 
                className="text-blue-700 font-medium text-xl hover:underline inline-block border-b border-blue-700"
              >
                Learn More
              </Link>
            </div>
            
            {/* Business Development */}
            <div>
              <h3 className="text-5xl font-bold mb-6">Business Development</h3>
              <p className="text-xl mb-6">
                We help our clients acquire new customers, expand their distribution channels, and enter new markets.
              </p>
              <Link 
                href="/services" 
                className="text-blue-700 font-medium text-xl hover:underline inline-block border-b border-blue-700"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right Column - Stats Graphic */}
          <div className="flex items-center justify-center">
            <div className="border border-black w-[480px] shadow-xl overflow-hidden rounded-xl" style={{aspectRatio: '4/5'}}>
              {/* Top section with gradient */}
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 p-10 flex flex-col justify-center items-center h-4/5">
                <div className="relative flex flex-col items-center justify-center h-full w-full px-6">
                  <span className="text-black font-black text-8xl mb-6 whitespace-nowrap">$750M</span>
                  <div className="h-1 w-[320px] bg-black bg-opacity-30 rounded my-4"></div>
                </div>
              </div>
              
              {/* Bottom section */}
              <div className="bg-white p-8 flex justify-center items-center h-1/5">
                <span className="text-3xl font-black tracking-wide text-center">IN CONTRACTS WON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPreview;