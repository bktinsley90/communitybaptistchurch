import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { churchAPI } from '../services/api';

const Contact = () => {
  const [churchInfo, setChurchInfo] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChurchInfo = async () => {
      try {
        const response = await churchAPI.getChurchInfo();
        setChurchInfo(response.data[0] || null);
      } catch (error) {
        console.error('Error fetching church info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChurchInfo();
  }, []);

  const defaultContact = {
    address: '123 Faith Street\nCommunity City, ST 12345',
    phone: '(555) 123-4567',
    email: 'info@communitybaptist.org',
  };

  const contact = churchInfo || defaultContact;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await churchAPI.submitContact(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
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
            <h1 className='text-5xl font-bold mb-6'>Contact Us</h1>
            <p className='text-xl text-gold max-w-3xl mx-auto'>
              We'd love to hear from you! Whether you have questions, need
              prayer, or want to get involved, don't hesitate to reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <h2 className='text-3xl font-bold text-royal-purple mb-8'>
                Get In Touch
              </h2>

              <div className='space-y-8'>
                <div className='flex items-start space-x-4'>
                  <div className='bg-gold text-royal-purple p-3 rounded-full'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-royal-purple mb-2'>
                      Visit Us
                    </h3>
                    <p className='text-gray-600 whitespace-pre-line'>
                      {contact.address}
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='bg-gold text-royal-purple p-3 rounded-full'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-royal-purple mb-2'>
                      Call Us
                    </h3>
                    <p className='text-gray-600'>{contact.phone}</p>
                    <p className='text-sm text-gray-500 mt-1'>
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='bg-gold text-royal-purple p-3 rounded-full'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-royal-purple mb-2'>
                      Email Us
                    </h3>
                    <p className='text-gray-600'>{contact.email}</p>
                    <p className='text-sm text-gray-500 mt-1'>
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='bg-gold text-royal-purple p-3 rounded-full'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-royal-purple mb-2'>
                      Service Times
                    </h3>
                    <div className='text-gray-600 space-y-1'>
                      <p>Sunday Worship: 10:00 AM</p>
                      <p>Wednesday Bible Study: 7:00 PM</p>
                      <p>Friday Youth Ministry: 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <div className='bg-gray-50 p-8 rounded-lg'>
                <h2 className='text-3xl font-bold text-royal-purple mb-6'>
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-royal-purple font-medium mb-2'>
                        Full Name *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-purple focus:border-transparent'
                        placeholder='Your Name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-royal-purple font-medium mb-2'>
                        Email Address *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-purple focus:border-transparent'
                        placeholder='your.email@example.com'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-royal-purple font-medium mb-2'>
                      Subject *
                    </label>
                    <select
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-purple focus:border-transparent'>
                      <option value=''>Select a subject</option>
                      <option value='General Inquiry'>General Inquiry</option>
                      <option value='Prayer Request'>Prayer Request</option>
                      <option value='New Member Information'>
                        New Member Information
                      </option>
                      <option value='Event Registration'>
                        Event Registration
                      </option>
                      <option value='Volunteer Opportunities'>
                        Volunteer Opportunities
                      </option>
                      <option value='Pastor Meeting Request'>
                        Pastor Meeting Request
                      </option>
                      <option value='Other'>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-royal-purple font-medium mb-2'>
                      Your Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-purple focus:border-transparent resize-vertical'
                      placeholder='Please share your message, questions, or prayer requests...'></textarea>
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-royal-purple hover:bg-dark-purple disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105'>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg'>
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg'>
                      Sorry, there was an error sending your message. Please try
                      again or call us directly.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-royal-purple mb-4'>
              Find Us
            </h2>
            <p className='text-gray-600'>
              We're located in the heart of the community, easily accessible
              with parking available.
            </p>
          </motion.div>

          <div className='bg-gray-300 h-96 rounded-lg flex items-center justify-center'>
            <div className='text-center'>
              <div className='text-6xl text-gray-500 mb-4'>🗺️</div>
              <p className='text-gray-600'>
                Interactive map would be embedded here
              </p>
              <p className='text-sm text-gray-500 mt-2'>
                (Google Maps, MapBox, or similar mapping service)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
