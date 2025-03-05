// components/TeamPreview.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const TeamPreview = () => {
  return (
    <div className="py-20 bg-[#0A1026] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16">The Leftfield Team</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mohan Ramani */}
          <div className='flex flex-row gap-4'>
            <div className="mb-4 aspect-square overflow-hidden">
              <Image 
                src="/images/mohan.jpg" 
                alt="Mohan Ramani" 
                width={300} 
                height={300} 
                className="w-[300px] grayscale object-cover rounded-lg"
              />
            </div>
            <div>
                <h3 className="text-3xl font-bold mb-4">Mohan Ramani</h3>
                <Link 
                href="https://www.linkedin.com/in/mohan-ramani-4441b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
                >
                <svg 
                    className="h-8 w-8" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                >
                    <path 
                    fillRule="evenodd" 
                    d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" 
                    clipRule="evenodd" 
                    />
                </svg>
                </Link>
            </div>
          </div>
          
          {/* Marcus Matthews */}
          <div className='flex flex-row gap-4'>
            <div className="aspect-square overflow-hidden mb-4">
              <Image 
                src="/images/marcus.jpg" 
                alt="Marcus Matthews" 
                width={300} 
                height={300} 
                className="w-[300px] grayscale object-cover rounded-lg"
              />
            </div>
            <div>
            <h3 className="text-3xl font-bold mb-4">Marcus Matthews</h3>
            <Link 
              href="https://www.linkedin.com/in/marcus-matthews/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <svg 
                className="h-8 w-8" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button 
            className="inline-block px-8 py-3 border-2 border-white text-white font-medium text-lg hover:text-blue-950 hover:bg-white"
          >
            <a href="/team">
            Learn More About Us
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPreview;