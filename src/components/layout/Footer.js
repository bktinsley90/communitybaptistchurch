import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-dark-purple text-white'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Church Info */}
          <div className='col-span-1 md:col-span-2'>
            <div className='mb-4'>
              <h3 className='text-xl font-bold'>Community Baptist Church</h3>
              <p className='text-gold text-sm'>Philippians 4:13</p>
            </div>
            <p className='text-gray-300 mb-4'>
              Join us as we worship together, grow in faith, and serve our
              community with love and compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-gold'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-300 hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-300 hover:text-white transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-gray-300 hover:text-white transition-colors'>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/events'
                  className='text-gray-300 hover:text-white transition-colors'>
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-300 hover:text-white transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-gold'>
              Contact Info
            </h4>
            <div className='space-y-2 text-gray-300'>
              <p>
                📍 297 Fuller Road
                <br />
                Spartanburg, SC 29307
              </p>
              <p>📞 (803) 659-5555</p>
              <p>✉️ info@cbcspartanburg.org</p>
              <div className='mt-4'>
                <p className='font-semibold text-white'>Service Times:</p>
                <p>Sunday: 9:00 AM</p>
                <p>Wednesday: 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-600 mt-8 pt-8 text-center'>
          <p className='text-gray-300'>
            &copy; 2025 Community Baptist Church. All rights reserved.
          </p>
          <p className='text-gold mt-2 italic'>
            "I can do all things through Christ who strengthens me." -
            Philippians 4:13
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
