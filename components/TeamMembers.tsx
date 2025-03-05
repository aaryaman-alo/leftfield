// components/TeamMembers.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamMembers = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-16">The Leftfield Team</h2>
        
        {/* Mohan Ramani */}
        <div className="grid md:grid-cols-5 gap-10 mb-20">
          <div className="md:col-span-1">
            <Image 
              src="/images/mohan.jpg" 
              alt="Mohan Ramani" 
              width={300} 
              height={300} 
              className="w-full grayscale"
            />
          </div>
          <div className="md:col-span-4">
            <h3 className="text-4xl font-bold mb-6">Mohan Ramani</h3>
            
            <div className="text-lg space-y-4">
              <p>
                Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development, P&L management, strategy development, and execution with both start-up and mature organizations in the United States, Europe and India.
              </p>
              <p>
                Over the last decade, he has helped deliver significant enterprise value for clients by developing significant business development opportunities with large enterprise customers, establishing effective distribution channels in new markets, and expanding their market share in their existing markets.
              </p>
              <p>
                As Founder and Managing Director at Leftfield Services, he brings all of his experience, knowledge and relationships to bear to achieve our clients' objectives.
              </p>
            </div>
            
            <div className="mt-6">
              <Link 
                href="https://linkedin.com" 
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
        
        {/* Marcus Matthews */}
        <div className="grid md:grid-cols-5 gap-10 mb-20">
          <div className="md:col-span-1">
            <Image 
              src="/images/marcus.jpg" 
              alt="Marcus Matthews" 
              width={300} 
              height={300} 
              className="w-full grayscale"
            />
          </div>
          <div className="md:col-span-4">
            <h3 className="text-4xl font-bold mb-6">Marcus Matthews</h3>
            
            <div className="text-lg space-y-4">
              <p>
                Marcus is an experienced public affairs expert who is highly skilled in the development of strategic opportunities and commercial relationships. His career encompasses insurance, startups, and general business. Marcus is a qualified governance and compliance professional, and corporate secretary with the Institute of Governance.
              </p>
              <p>
                He is a proven advocate with an extensive understanding of public policy processes and ethical lobbying. Marcus has represented industry interests and led delegations on contentious issues before parliamentary committees.
              </p>
              <p>
                He is talented at the refinement of messaging and the identification of value propositions that are relative to a target market. Marcus maintains an awareness of the EU subsidy landscape, and is responsible for growing relationships with value-add stakeholders and developing strategic client opportunities.
              </p>
            </div>
            
            <div className="mt-6">
              <Link 
                href="https://linkedin.com" 
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
      </div>
    </div>
  );
};

export default TeamMembers;