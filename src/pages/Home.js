import React, { useState, useEffect } from 'react';
import { churchAPI } from '../services/api';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Events from '../components/sections/Events';
import Contact from '../components/sections/Contact';

const Home = () => {
  const [churchInfo, setChurchInfo] = useState(null);
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [churchRes, servicesRes, eventsRes] = await Promise.all([
          churchAPI.getChurchInfo(),
          churchAPI.getServices(),
          churchAPI.getFeaturedEvents(),
        ]);

        setChurchInfo(churchRes.data[0] || null);
        setServices(servicesRes.data);
        setEvents(eventsRes.data);
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

  return (
    <div>
      <Hero churchInfo={churchInfo} />
      <Services services={services} />
      <About churchInfo={churchInfo} />
      <Events events={events} />
      <Contact churchInfo={churchInfo} />
    </div>
  );
};

export default Home;
