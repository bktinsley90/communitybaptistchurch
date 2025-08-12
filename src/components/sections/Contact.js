import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { churchAPI } from '../../services/api';

const Contact = ({ churchInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  return (
    <section className='py-16 bg-royal-purple text-white' id='contact'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-4 text-gold'>Get In Touch</h2>
          <p className='text-gray-200 max-w-2xl mx-auto'>
            We'd love to hear from you! Whether you have questions, need prayer,
            or want to get involved, don't hesitate to reach out.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h3 className='text-2xl font-bold mb-6 text-gold'>Visit Us</h3>

            <div className='space-y-6'>
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
                  <h4 className='text-lg font-semibold text-gold'>Address</h4>
                  <p className='text-gray-200 whitespace-pre-line'>
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
                  <h4 className='text-lg font-semibold text-gold'>Phone</h4>
                  <p className='text-gray-200'>{contact.phone}</p>
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
                  <h4 className='text-lg font-semibold text-gold'>Email</h4>
                  <p className='text-gray-200'>{contact.email}</p>
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
                  <h4 className='text-lg font-semibold text-gold'>
                    Service Times
                  </h4>
                  <div className='text-gray-200'>
                    <p>Sunday Worship: 9:00 AM</p>
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
            <h3 className='text-2xl font-bold mb-6 text-gold'>
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-gold font-medium mb-2'>
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent'
                    placeholder='Your Name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-gold font-medium mb-2'>
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-gold font-medium mb-2'>
                  Subject *
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent'
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-gold font-medium mb-2'>
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-vertical'
                  placeholder='Your message...'></textarea>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gold hover:bg-dark-gold disabled:opacity-50 disabled:cursor-not-allowed text-royal-purple font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105'>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className='bg-green-500/20 border border-green-500 text-green-200 px-4 py-3 rounded-lg'>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className='bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg'>
                  Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
