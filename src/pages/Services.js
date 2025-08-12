import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { churchAPI } from '../services/api';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await churchAPI.getServices();
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const defaultServices = [
    {
      id: 1,
      name: 'Sunday Worship Service',
      description:
        'Join us for our main worship service featuring contemporary music, biblical preaching, and communion. Our service is designed to help you connect with God and grow in your faith.',
      time: '10:00',
      day_of_week: 'Sunday',
      location: 'Main Sanctuary',
      icon: '⛪',
    },
    {
      id: 2,
      name: 'Wednesday Bible Study',
      description:
        "Dive deeper into God's Word through our interactive Bible study. We explore different books of the Bible and discuss how to apply biblical principles to our daily lives.",
      time: '19:00',
      day_of_week: 'Wednesday',
      location: 'Fellowship Hall',
      icon: '📖',
    },
    {
      id: 3,
      name: 'Friday Youth Ministry',
      description:
        'A dynamic program for teenagers featuring games, music, biblical teaching, and fellowship. We focus on helping young people develop a strong foundation of faith.',
      time: '18:00',
      day_of_week: 'Friday',
      location: 'Youth Center',
      icon: '🎯',
    },
    {
      id: 4,
      name: "Children's Sunday School",
      description:
        'Age-appropriate Bible lessons, crafts, and activities for children ages 3-12. Our trained teachers create a fun and safe environment for learning about Jesus.',
      time: '09:00',
      day_of_week: 'Sunday',
      location: "Children's Wing",
      icon: '👶',
    },
    {
      id: 5,
      name: 'Adult Sunday School',
      description:
        'In-depth Bible study and discussion for adults. Multiple classes available covering different topics and books of the Bible.',
      time: '09:00',
      day_of_week: 'Sunday',
      location: 'Various Classrooms',
      icon: '👥',
    },
    {
      id: 6,
      name: 'Prayer Meeting',
      description:
        "Join us for a time of corporate prayer, intercession, and seeking God's will for our church and community.",
      time: '19:00',
      day_of_week: 'Tuesday',
      location: 'Prayer Room',
      icon: '🙏',
    },
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  const formatTime = (timeString) => {
    if (!timeString) return '';
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-royal-purple text-xl'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-royal-purple to-dark-purple text-white py-24'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className='text-5xl font-bold mb-6'>Our Services</h1>
            <p className='text-xl text-gold max-w-3xl mx-auto'>
              Join us for worship, fellowship, and spiritual growth throughout
              the week. There's a place for everyone in our church family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {displayServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className='bg-white rounded-lg shadow-lg p-6 border-t-4 border-gold hover:shadow-xl transition-all duration-300'>
                <div className='text-center mb-6'>
                  <div className='w-16 h-16 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl'>
                    {service.icon}
                  </div>
                  <h3 className='text-xl font-bold text-royal-purple mb-2'>
                    {service.name}
                  </h3>
                  <div className='text-gold font-semibold mb-4'>
                    {service.day_of_week} • {formatTime(service.time)}
                  </div>
                </div>

                <p className='text-gray-600 mb-4 leading-relaxed'>
                  {service.description}
                </p>

                <div className='border-t pt-4'>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-royal-purple font-medium'>
                      📍 {service.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-royal-purple mb-4'>
              What to Expect
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              If you're new to our church, here's what you can expect when you
              visit us.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                icon: '👋',
                title: 'Warm Welcome',
                description:
                  'Our friendly greeters will welcome you and help you feel at home.',
              },
              {
                icon: '🎵',
                title: 'Inspiring Music',
                description:
                  'Contemporary worship music that lifts your spirit and glorifies God.',
              },
              {
                icon: '📖',
                title: 'Biblical Teaching',
                description:
                  "Practical, life-applicable messages from God's Word.",
              },
              {
                icon: '☕',
                title: 'Fellowship Time',
                description:
                  'Connect with others over coffee and refreshments after service.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='text-4xl mb-4'>{item.icon}</div>
                <h3 className='text-lg font-bold text-royal-purple mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-600 text-sm'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-royal-purple text-white'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl font-bold mb-6'>Join Us This Week</h2>
            <p className='text-xl text-gray-200 mb-8'>
              We'd love to have you worship with us! Come as you are and
              experience God's love in our welcoming community.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='bg-gold hover:bg-dark-gold text-royal-purple font-bold py-3 px-8 rounded-full transition-all duration-300'>
                Plan Your Visit
              </a>
              <a
                href='/events'
                className='border-2 border-white text-white hover:bg-white hover:text-royal-purple font-bold py-3 px-8 rounded-full transition-all duration-300'>
                View Events
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
