// app/landing-page/page.tsx
import * as React from 'react';
import HeroBanner from '../components/landing-page/HeroBanner';
import EventList from '../components/landing-page/EventList';
import { Event } from '../types/events';

const LandingPage: React.FC = () => {
  const featuredEvent: Event = {
    id: '1',
    title: 'Sunday Service',
    description: 'Join us for our weekly worship service.',
    imageUrl: '/images/sunday-service.jpg',
    startDate: new Date(),
    endDate: new Date(),
  };

  const events: Event[] = [
    {
      id: '2',
      title: 'Midweek Service',
      description: 'Join us for our midweek prayer and Bible study.',
      imageUrl: '/images/church-service.jpeg',
      startDate: new Date(),
      endDate: new Date(),
    },
    // ... more events
  ];

  return (
    <div className="bg-image bg-cover bg-center" style={{ backgroundImage: 'url(/images/church.jpeg)' }}>
      <HeroBanner featuredEvent={featuredEvent} />
      <EventList events={events} />
    </div>
  );
};

export default LandingPage;