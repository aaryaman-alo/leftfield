// components/GovernmentRelations.tsx
import React from 'react';

const GovernmentRelations = () => {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-12">Government Relations</h2>
        
        <div className="bg-[#FFF8E8] p-12 mb-16">
          <div className="max-w-xs mx-auto mb-10">
            <div className="border border-black">
              <div className="bg-[#FFDD66] p-8 flex justify-center items-center">
                <span className="text-7xl font-black">$900M</span>
              </div>
              <div className="bg-white p-4 flex justify-center items-center">
                <span className="text-2xl font-bold">IN US & EU GOVT. FINANCING</span>
              </div>
            </div>
          </div>
          
          <div className="text-2xl space-y-12 pl-8">
            <div>
              <p className="font-medium">
                1. We help you access low cost debt, infrastructure subsidies, and other relevant financing sources.
              </p>
            </div>
            <div>
              <p className="font-medium">
                2. We have worked in 21 US States and with 3 Presidential administrations across both parties.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8 max-w-6xl">
          <p className="text-xl">
            In addition to the commercial services outlined above, we also assist clients in their government relations and regulatory management.
          </p>
          
          <p className="text-xl">
            The LFS team has 20 years of experience in successfully creating opportunities and winning orders from almost every department and agency of the Federal government, 21 states, and dozens of state agencies and local and municipal governments. Over the last decade, the team has delivered $500 Million in revenues for our clients from government and agency engagements.
          </p>
          
          <p className="text-xl font-medium mt-10">
            In that area, the relevant members of the team have:
          </p>
          
          <p className="text-xl">
            In the US, delivered approximately $400M in government subsidies including grants, low interest loans, tax credits, tax abatements and earmarks
          </p>
          
          <ul className="text-xl space-y-4 pl-8 list-disc">
            <li>
              <span>worked in twenty-one different US States</span>
            </li>
            <li>
              <span>worked with three different Presidential administrations from both parties</span>
            </li>
          </ul>
          
          <p className="text-xl">
            In the EU, delivered €450M in value to clients through a variety of mechanisms including access to low cost debt, infrastructure subsidies, and regulatory guidance.
          </p>
          
          <p className="text-xl font-medium mt-10">
            Clients include:
          </p>
          
          <ul className="text-xl space-y-4 pl-8 list-disc">
            <li>
              <span>Fortune 500 and 5000 firms</span>
            </li>
            <li>
              <span>Trade Associations and Advocacy groups</span>
            </li>
            <li>
              <span>Colleges and Universities</span>
            </li>
            <li>
              <span>Health Care and Hospital organizations</span>
            </li>
            <li>
              <span>Other companies of all shapes, stages and sizes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GovernmentRelations;