import React from 'react';
import { motion } from 'framer-motion';

const Services = ({ services }) => {
  const defaultServices = [
    {
      id: 1,
      name: 'Sunday Worship',
      description:
        'Join us for inspiring worship, biblical teaching, and fellowship every Sunday morning.',
      time: '09:00',
      day_of_week: 'Sunday',
      location: 'Main Sanctuary',
      icon: '📖',
    },
    {
      id: 2,
      name: 'Bible Study',
      description:
        "Dive deeper into God's Word through interactive study and meaningful discussion.",
      time: '19:00',
      day_of_week: 'Wednesday',
      location: 'Fellowship Hall',
      icon: '🙏',
    },
    {
      id: 3,
      name: 'Youth Ministry',
      description:
        'Engaging activities and biblical teaching designed specifically for teens and young adults.',
      time: '18:00',
      day_of_week: 'Friday',
      location: 'Youth Center',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      id: 4,
      name: 'Community Outreach',
      description:
        'Serving our community through food drives, community events, and volunteer opportunities.',
      time: null,
      day_of_week: 'Monthly',
      location: 'Various Locations',
      icon: '❤️',
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

  return (
    <section className='py-16 bg-gray-50' id='services'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-royal-purple mb-4'>
            Our Services & Ministries
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            We offer various opportunities for worship, learning, and fellowship
            throughout the week. Join us as we grow together in faith.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className='bg-white rounded-lg shadow-lg p-6 border-t-4 border-gold hover:shadow-xl transition-all duration-300'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl'>
                  {service.icon || '⛪'}
                </div>
                <h3 className='text-xl font-bold text-royal-purple mb-2'>
                  {service.name}
                </h3>
                <div className='text-gold font-semibold mb-3'>
                  {service.day_of_week}{' '}
                  {service.time && `• ${formatTime(service.time)}`}
                </div>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  {service.description}
                </p>
                {service.location && (
                  <p className='text-sm text-royal-purple font-medium'>
                    📍 {service.location}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
