// components/Advisors.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Advisors = () => {
  return (
    <div className="pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Sanjay Ram */}
        <div className="grid md:grid-cols-5 gap-10 mb-20">
          <div className="md:col-span-1">
            <Image 
              src="/images/sanjay.png" 
              alt="Sanjay Ram" 
              width={300} 
              height={300} 
              className="w-full grayscale"
            />
          </div>
          <div className="md:col-span-4">
            <h3 className="text-4xl font-bold mb-6">Sanjay Ram</h3>
            
            <div className="text-lg space-y-4">
              <p>
                Sanjay Ramabhadran has served in senior executive / board roles at global and regional engineering firms providing engineering and program/construction management services on aviation, transportation, and water / wastewater / flood protection projects.
              </p>
              <p>
                He is on the Board of the Metropolitan Transit Authority (Houston METRO) that serves a 1,300 square mile service area and is currently the Chair of the Capital & Strategic Planning Committee and member of the Finance & Audit Committee. He is the immediate Past President and current Chairman of the Texas Lyceum - a state-wide leadership group focused on public policy issues impacting Texas.
              </p>
              <p>
                His civic involvement has included serving as Chairman of the Board of Directors of Leadership Houston; Steering Committee Member – Houston General Plan; Senior Fellow – American Leadership Forum; President of the HESS Club; President of the Indo-American Chamber of Commerce of Greater Houston; Chairperson of the Houston Mayor&apos;s International Trade and Development Council (South Asia); City of Houston – Building and Standards Commission; Connecting Communities Initiative at Rice University&apos;s Kinder Institute; and Board of Directors of the Indo-American Charity Foundation.
              </p>
              <p>
                A graduate of BITS-Pilani and Texas A&M University, he is a registered Professional Engineer.
              </p>
            </div>

            <div className="mt-6">
              <Link 
                href="https://www.linkedin.com/in/sanjay-ramabhadran-293778a/" 
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

        {/* William Pazos */}
        <div className="grid md:grid-cols-5 gap-10 mb-20">
          <div className="md:col-span-1">
            <Image 
              src="/images/bill.jpg" 
              alt="William Pazos" 
              width={300} 
              height={300} 
              className="w-full grayscale"
            />
          </div>
          <div className="md:col-span-4">
            <h3 className="text-4xl font-bold mb-6">William Pazos</h3>
            
            <div className="text-lg space-y-4">
              <p>
                Bill is a carbon market pioneer who has managed emerging market and high yield investments for more than 25 years and currently serves as director of Kuber Energy, a renewable energy and climate finance advisory company in Singapore and COO & co-Founder of AirCarbon, a digital carbon exchange in Singapore.
              </p>
              <p>
                Previously, he was a Managing Director at Standard Bank. In this capacity he was the Global Head of Carbon origination and Finance, as well as a member of the board of Standard Merchant Bank Singapore. As the CEO and founding partner of Ecoinvest Carbon S.A., a joint venture company with Bunge S.A., he built what became one of the world&apos;s largest aggregator of carbon credits.
              </p>
              <p>
                In his early career he was a bond trader at JP Morgan Chase (MHTCo.) in New York as well as a partner at Dartley a large Emerging Markets Fixed Income Fund. He holds a Bachelor Degree in Economics with a concentration in Mathematics from The College of Wooster, Ohio, and an MBA in International Management from ASU&apos;s Thunderbird Graduate School of International Management.
              </p>
            </div>
            
            <div className="mt-6">
              <Link 
                href="https://www.linkedin.com/in/william-pazos-1273a113/" 
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

export default Advisors;