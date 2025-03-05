"use client"

// components/Navbar.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FFF8E8] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="Leftfield" 
            width={150} 
            height={40} 
            className="h-8 w-auto" 
          />
        </Link>
        <div className="flex space-x-12">
          <Link 
            href="/services" 
            className={`font-medium text-lg ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            } hover:text-gray-600`}
          >
            Services
          </Link>
          <Link 
            href="/team" 
            className={`font-medium text-lg ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            } hover:text-gray-600`}
          >
            Team
          </Link>
          <Link 
            href="/contact" 
            className={`font-medium text-lg ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            } hover:text-gray-600`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;