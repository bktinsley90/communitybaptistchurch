import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = ({ churchInfo }) => {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-royal-purple via-dark-purple to-royal-purple overflow-hidden pt-20'>
      {/* Background decorative elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-32 h-32 bg-gold/10 rounded-full blur-xl'></div>
        <div className='absolute bottom-20 right-20 w-40 h-40 bg-gold/5 rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg'></div>
      </div>

      <div className='relative z-10 text-center text-white px-4 max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
            Welcome to{' '}
            <span className='text-gold'>Community Baptist Church</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <p className='text-gold text-xl md:text-2xl font-medium mb-6 italic'>
            "I can do all things through Christ who strengthens me."
          </p>
          <p className='text-gold/80 text-lg mb-8'>- Philippians 4:13</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <p className='text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto'>
            Join us as we worship together, grow in faith, and serve our
            community with love and compassion. Experience God's grace and find
            your purpose in our welcoming fellowship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link
            to='/services'
            className='bg-gold hover:bg-dark-gold text-dark-purple font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
            Join Us Sunday
          </Link>
          <Link
            to='/about'
            className='border-2 border-white text-white hover:bg-white hover:text-royal-purple font-bold py-4 px-8 rounded-full transition-all duration-300'>
            Learn More
          </Link>
        </motion.div>

        {/* Service times preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className='mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20'>
          <h3 className='text-gold font-semibold mb-3'>Join Us This Week</h3>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-6 text-sm'>
            <div>
              <p className='font-semibold'>Sunday Worship</p>
              <p>9:00 AM</p>
            </div>
            <div className='hidden sm:block w-px h-8 bg-white/30'></div>
            <div>
              <p className='font-semibold'>Bible Study</p>
              <p>Wednesday 7:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce'></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
