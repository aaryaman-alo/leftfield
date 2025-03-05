"use client"

// components/Navbar.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="Leftfield" 
            width={150} 
            height={40} 
            className="h-8 sm:h-6 w-auto" 
          />
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12">
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

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } bg-white w-full border-t border-gray-200 transition-all duration-300 shadow-lg`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <Link 
            href="/services" 
            className="font-medium text-lg text-gray-900 hover:text-gray-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/team" 
            className="font-medium text-lg text-gray-900 hover:text-gray-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </Link>
          <Link 
            href="/contact" 
            className="font-medium text-lg text-gray-900 hover:text-gray-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;