// components/ServicesPreview.tsx
import Link from 'next/link';
import React from 'react';

const ServicesPreview = () => {
  return (
    <div className="min-h-screen flex items-center bg-[#FFF8E8]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Trade Development (formerly Business Development) */}
          <div>
            <h3 className="text-5xl font-bold mb-6">Trade Development</h3>
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
          
          {/* Stats for Business Development */}
          <div className="mx-auto mb-10">
            <div className="border border-black">
              <div className="bg-[#FFDD66] p-8 flex justify-center items-center">
                <span className="text-7xl font-black">$750M</span>
              </div>
              <div className="bg-white p-4 flex justify-center items-center">
                <span className="text-2xl font-bold">IN CONTRACTS WON</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
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
      </div>
    </div>
  );
};

export default ServicesPreview;