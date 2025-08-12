import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-royal-purple/95 backdrop-blur-sm py-2'
          : 'bg-gradient-to-r from-royal-purple to-dark-purple py-3'
      }`}>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <Link to='/' className='flex items-center space-x-4'>
            <div className='hidden sm:block'>
              <h1
                className={`text-white font-bold transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}>
                Community Baptist Church
              </h1>
              <small className='text-gold'>Philippians 4:13</small>
            </div>
          </Link>

          <nav className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className='text-white hover:text-gold transition-colors duration-300 font-medium'>
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className='md:hidden text-white text-2xl'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            ☰
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className='md:hidden py-4 border-t border-white/20 mt-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className='block py-3 text-white hover:text-gold transition-colors duration-300 font-medium'
                onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
