import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Events = ({ events }) => {
  const defaultEvents = [
    {
      id: 1,
      title: 'Community BBQ',
      description:
        'Join us for our annual community barbecue! Food, games, and fellowship for the whole family. Everyone is welcome!',
      date: '2025-07-28T12:00:00Z',
      location: 'Church Pavilion',
      is_featured: true,
    },
    {
      id: 2,
      title: 'Baptism Sunday',
      description:
        "Celebrating new life in Christ! If you're ready to take this important step of faith, please contact Pastor Johnson.",
      date: '2025-08-05T10:00:00Z',
      location: 'Main Sanctuary',
      is_featured: true,
    },
    {
      id: 3,
      title: 'Back to School Prayer',
      description:
        'Special prayer service for students, teachers, and school staff as we begin the new academic year.',
      date: '2025-08-12T19:00:00Z',
      location: 'Main Sanctuary',
      is_featured: true,
    },
  ];

  const displayEvents = events.length > 0 ? events : defaultEvents;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      day: date.getDate(),
      time: date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }),
    };
  };

  return (
    <section className='py-16 bg-gray-50' id='events'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-royal-purple mb-4'>
            Upcoming Events
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Join us for these special events as we fellowship together and grow
            in our faith. All are welcome to participate in our church community
            activities.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {displayEvents.map((event, index) => {
            const dateInfo = formatDate(event.date);

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'>
                <div className='bg-royal-purple text-white p-4'>
                  <div className='flex items-center justify-between'>
                    <div className='bg-gold text-royal-purple px-3 py-1 rounded-full text-sm font-bold'>
                      {dateInfo.month} {dateInfo.day}
                    </div>
                    <div className='text-sm opacity-90'>{dateInfo.time}</div>
                  </div>
                  <h3 className='text-xl font-bold mt-2'>{event.title}</h3>
                </div>

                <div className='p-6'>
                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    {event.description}
                  </p>

                  <div className='flex items-center text-sm text-royal-purple font-medium'>
                    <svg
                      className='w-4 h-4 mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {event.location}
                  </div>

                  {event.registration_required && (
                    <div className='mt-4'>
                      <button className='w-full bg-gold hover:bg-dark-gold text-royal-purple font-bold py-2 px-4 rounded transition-colors duration-300'>
                        Register Now
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-center'>
          <Link
            to='/events'
            className='inline-flex items-center bg-royal-purple hover:bg-dark-purple text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105'>
            View All Events
            <svg
              className='w-5 h-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
