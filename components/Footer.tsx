// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Address</h3>
            <p className="text-xl">
              Veembroederhof 119<br />
              1019 HD Amsterdam
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Email Us</h3>
            <a 
              href="mailto:hello@leftfield-services.com" 
              className="text-xl hover:underline"
            >
              hello@leftfield-services.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;