import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { churchAPI } from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await churchAPI.getEvents();
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const defaultEvents = [
    {
      id: 1,
      title: 'Community BBQ',
      description:
        "Join us for our annual community barbecue! Food, games, and fellowship for the whole family. Everyone is welcome! We'll have live music, children's activities, and plenty of delicious food.",
      date: '2025-07-28T12:00:00Z',
      location: 'Church Pavilion',
      is_featured: true,
      registration_required: false,
    },
    {
      id: 2,
      title: 'Baptism Sunday',
      description:
        "Celebrating new life in Christ! If you're ready to take this important step of faith, please contact Pastor Johnson. We'll have a special service celebrating those being baptized.",
      date: '2025-08-05T10:00:00Z',
      location: 'Main Sanctuary',
      is_featured: true,
      registration_required: true,
    },
    {
      id: 3,
      title: 'Back to School Prayer',
      description:
        'Special prayer service for students, teachers, and school staff as we begin the new academic year. Join us as we pray for wisdom, safety, and success in the coming school year.',
      date: '2025-08-12T19:00:00Z',
      location: 'Main Sanctuary',
      is_featured: true,
      registration_required: false,
    },
    {
      id: 4,
      title: 'Youth Summer Camp',
      description:
        'A week-long adventure for teens featuring outdoor activities, worship, and spiritual growth. Camp includes swimming, hiking, campfires, and daily devotions.',
      date: '2025-08-18T09:00:00Z',
      location: 'Pine Lake Camp',
      is_featured: false,
      registration_required: true,
    },
    {
      id: 5,
      title: "Women's Bible Study Retreat",
      description:
        'A weekend retreat focused on spiritual growth, fellowship, and renewal. Includes meals, accommodations, and inspiring speakers.',
      date: '2025-09-01T18:00:00Z',
      location: 'Mountain View Retreat Center',
      is_featured: false,
      registration_required: true,
    },
    {
      id: 6,
      title: "Men's Breakfast",
      description:
        'Monthly gathering for men featuring breakfast, fellowship, and biblical discussion. All men are welcome to join us for this time of community.',
      date: '2025-08-15T08:00:00Z',
      location: 'Fellowship Hall',
      is_featured: false,
      registration_required: false,
    },
  ];

  const displayEvents = events.length > 0 ? events : defaultEvents;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      day: date.getDate(),
      weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
      time: date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }),
      fullDate: date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
  };

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-royal-purple text-xl'>Loading...</div>
      </div>
    );
  }

  const featuredEvents = displayEvents.filter((event) => event.is_featured);
  const upcomingEvents = displayEvents.filter((event) => !event.is_featured);

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-royal-purple to-dark-purple text-white py-24'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className='text-5xl font-bold mb-6'>Church Events</h1>
            <p className='text-xl text-gold max-w-3xl mx-auto'>
              Join us for fellowship, worship, and community events throughout
              the year. There's always something happening at Community Baptist
              Church!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-12'>
              <h2 className='text-4xl font-bold text-royal-purple mb-4'>
                Featured Events
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                Don't miss these special upcoming events in our church
                community.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
              {featuredEvents.map((event, index) => {
                const dateInfo = formatDate(event.date);

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className='bg-white rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300'>
                    <div className='bg-gradient-to-r from-royal-purple to-dark-purple text-white p-6'>
                      <div className='flex items-center justify-between mb-4'>
                        <div className='bg-gold text-royal-purple px-4 py-2 rounded-full text-sm font-bold'>
                          {dateInfo.month} {dateInfo.day}
                        </div>
                        <span className='bg-white/20 px-3 py-1 rounded-full text-xs'>
                          Featured
                        </span>
                      </div>
                      <h3 className='text-xl font-bold'>{event.title}</h3>
                      <p className='text-gray-200 text-sm mt-2'>
                        {dateInfo.fullDate} at {dateInfo.time}
                      </p>
                    </div>

                    <div className='p-6'>
                      <p className='text-gray-600 mb-4 leading-relaxed'>
                        {event.description}
                      </p>

                      <div className='flex items-center text-sm text-royal-purple font-medium mb-4'>
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
                        <button className='w-full bg-gold hover:bg-dark-gold text-royal-purple font-bold py-2 px-4 rounded transition-colors duration-300'>
                          Register Now
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Upcoming Events */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-royal-purple mb-4'>
              All Upcoming Events
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              View our complete calendar of upcoming church activities and
              events.
            </p>
          </motion.div>

          <div className='space-y-6'>
            {displayEvents.map((event, index) => {
              const dateInfo = formatDate(event.date);

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                    <div className='flex items-start space-x-4 mb-4 md:mb-0'>
                      <div className='bg-royal-purple text-white p-3 rounded-lg text-center min-w-[80px]'>
                        <div className='text-xs font-semibold text-gold'>
                          {dateInfo.month}
                        </div>
                        <div className='text-2xl font-bold'>{dateInfo.day}</div>
                        <div className='text-xs'>{dateInfo.weekday}</div>
                      </div>

                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <h3 className='text-xl font-bold text-royal-purple'>
                            {event.title}
                          </h3>
                          {event.is_featured && (
                            <span className='bg-gold text-royal-purple px-2 py-1 rounded-full text-xs font-bold'>
                              Featured
                            </span>
                          )}
                        </div>
                        <p className='text-gray-600 mb-2'>
                          {event.description}
                        </p>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500'>
                          <span>🕐 {dateInfo.time}</span>
                          <span>📍 {event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col space-y-2'>
                      {event.registration_required && (
                        <button className='bg-gold hover:bg-dark-gold text-royal-purple font-bold py-2 px-6 rounded transition-colors duration-300'>
                          Register
                        </button>
                      )}
                      <button className='border-2 border-royal-purple text-royal-purple hover:bg-royal-purple hover:text-white font-bold py-2 px-6 rounded transition-all duration-300'>
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
            <h2 className='text-3xl font-bold mb-6'>Stay Connected</h2>
            <p className='text-xl text-gray-200 mb-8'>
              Don't miss out on upcoming events and announcements. Sign up for
              our newsletter or follow us on social media.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='bg-gold hover:bg-dark-gold text-royal-purple font-bold py-3 px-8 rounded-full transition-all duration-300'>
                Subscribe to Newsletter
              </a>
              <a
                href='#'
                className='border-2 border-white text-white hover:bg-white hover:text-royal-purple font-bold py-3 px-8 rounded-full transition-all duration-300'>
                Follow on Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
