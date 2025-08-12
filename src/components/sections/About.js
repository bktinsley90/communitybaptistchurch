import React from 'react';
import { motion } from 'framer-motion';

const About = ({ churchInfo }) => {
  const defaultInfo = {
    mission_statement:
      'To glorify God by making disciples who love Jesus, love each other, and love our community.',
    about_text:
      "Community Baptist Church has been a cornerstone of faith in our community for over 50 years. We are a welcoming congregation that believes in the power of God's love to transform lives and communities. Our mission is to glorify God by making disciples who love Jesus, love each other, and love our community. We strive to be a place where everyone can experience God's grace, find their purpose, and grow in their faith journey. Whether you're new to faith or have been walking with Jesus for years, you'll find a home here at Community Baptist Church.",
  };

  const info = churchInfo || defaultInfo;

  return (
    <section className='py-16 bg-white' id='about'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-royal-purple mb-6'>
              About Our Church
            </h2>

            <div className='space-y-6'>
              <div className='bg-gold/10 border-l-4 border-gold p-4 rounded-r-lg'>
                <h3 className='text-xl font-semibold text-royal-purple mb-2'>
                  Our Mission
                </h3>
                <p className='text-gray-700 italic'>{info.mission_statement}</p>
              </div>

              <div className='prose prose-lg text-gray-600'>
                {info.about_text.split('\n').map((paragraph, index) => (
                  <p key={index} className='mb-4 leading-relaxed'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className='mt-8 grid grid-cols-3 gap-4 text-center'>
              <div className='p-4'>
                <div className='text-2xl font-bold text-royal-purple'>50+</div>
                <div className='text-sm text-gray-600'>Years Serving</div>
              </div>
              <div className='p-4'>
                <div className='text-2xl font-bold text-royal-purple'>15+</div>
                <div className='text-sm text-gray-600'>Members</div>
              </div>
              <div className='p-4'>
                <div className='text-2xl font-bold text-royal-purple'>5+</div>
                <div className='text-sm text-gray-600'>Ministries</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'>
            <div className='relative h-96 lg:h-[500px] bg-white rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center'>
              <img
                src='/logo.png'
                alt='Community Baptist Church Logo'
                className='w-80 h-80 object-contain'
              />
            </div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-xs'>
              <h4 className='font-bold text-royal-purple mb-3'>
                Our Core Values
              </h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li className='flex items-center'>
                  <span className='text-gold mr-2'>•</span> Biblical Teaching
                </li>
                <li className='flex items-center'>
                  <span className='text-gold mr-2'>•</span> Authentic Community
                </li>
                <li className='flex items-center'>
                  <span className='text-gold mr-2'>•</span> Compassionate
                  Service
                </li>
                <li className='flex items-center'>
                  <span className='text-gold mr-2'>•</span> Faithful Worship
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
