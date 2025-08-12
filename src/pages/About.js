import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { churchAPI } from '../services/api';

const About = () => {
  const [churchInfo, setChurchInfo] = useState(null);
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [churchRes, staffRes] = await Promise.all([
          churchAPI.getChurchInfo(),
          churchAPI.getStaff(),
        ]);

        setChurchInfo(churchRes.data[0] || null);
        setStaff(staffRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-royal-purple text-xl'>Loading...</div>
      </div>
    );
  }

  const defaultInfo = {
    mission_statement:
      'To glorify God by making disciples who love Jesus, love each other, and love our community.',
    about_text:
      "Community Baptist Church has been a cornerstone of faith in our community for over 50 years. We are a welcoming congregation that believes in the power of God's love to transform lives and communities.",
  };

  const info = churchInfo || defaultInfo;

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-royal-purple to-dark-purple text-white py-24'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className='text-5xl font-bold mb-6'>About Our Church</h1>
            <p className='text-xl text-gold max-w-3xl mx-auto'>
              Discover our history, mission, and the people who make Community
              Baptist Church a place where faith comes alive and community
              thrives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & History */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h2 className='text-4xl font-bold text-royal-purple mb-6'>
                Our Mission
              </h2>
              <div className='bg-gold/10 border-l-4 border-gold p-6 rounded-r-lg mb-6'>
                <p className='text-lg italic text-gray-700'>
                  {info.mission_statement}
                </p>
              </div>
              <p className='text-gray-600 leading-relaxed'>{info.about_text}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'>
              <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='text-xl font-bold text-royal-purple mb-4'>
                  Our Beliefs
                </h3>
                <ul className='space-y-2 text-gray-600'>
                  <li className='flex items-center'>
                    <span className='text-gold mr-2'>✓</span> The Bible as God's
                    inspired Word
                  </li>
                  <li className='flex items-center'>
                    <span className='text-gold mr-2'>✓</span> Salvation through
                    faith in Jesus Christ
                  </li>
                  <li className='flex items-center'>
                    <span className='text-gold mr-2'>✓</span> The importance of
                    baptism and communion
                  </li>
                  <li className='flex items-center'>
                    <span className='text-gold mr-2'>✓</span> The power of
                    prayer and fellowship
                  </li>
                  <li className='flex items-center'>
                    <span className='text-gold mr-2'>✓</span> Service to our
                    community and world
                  </li>
                </ul>
              </div>

              <div className='bg-royal-purple text-white p-6 rounded-lg'>
                <h3 className='text-xl font-bold text-gold mb-4'>Our Vision</h3>
                <p>
                  To be a beacon of hope and love in our community, where people
                  from all walks of life can experience God's transforming grace
                  and find their purpose in serving others.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      {staff.length > 0 && (
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-12'>
              <h2 className='text-4xl font-bold text-royal-purple mb-4'>
                Our Staff
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                Meet the dedicated individuals who serve our congregation and
                community with passion and commitment.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {staff.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='bg-white rounded-lg shadow-lg overflow-hidden'>
                  <div className='h-64 bg-gradient-to-br from-royal-purple to-light-purple flex items-center justify-center'>
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className='w-full h-full object-cover'
                      />
                    ) : (
                      <div className='text-white text-6xl'>👤</div>
                    )}
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-royal-purple mb-2'>
                      {member.name}
                    </h3>
                    <p className='text-gold font-semibold mb-3'>
                      {member.position}
                    </p>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {member.bio}
                    </p>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className='inline-block mt-4 text-royal-purple hover:text-gold transition-colors'>
                        {member.email}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className='py-16 bg-royal-purple text-white'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl font-bold mb-6'>
              Ready to Join Our Family?
            </h2>
            <p className='text-xl text-gray-200 mb-8'>
              We'd love to welcome you into our church community. Come as you
              are!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='bg-gold hover:bg-dark-gold text-royal-purple font-bold py-3 px-8 rounded-full transition-all duration-300'>
                Get In Touch
              </a>
              <a
                href='/services'
                className='border-2 border-white text-white hover:bg-white hover:text-royal-purple font-bold py-3 px-8 rounded-full transition-all duration-300'>
                Visit This Sunday
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
