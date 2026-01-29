
import React from 'react';
import Section from '../components/Section';
import EventCard from '../components/EventCard';
import SpeakerCard from '../components/SpeakerCard';
import { Event, Speaker } from '../types';

const eventSchedule: { day: string; events: Event[] }[] = [
  {
    day: "Day 1: February 20, 2026",
    events: [
      { time: "09:00 AM - 10:00 AM", title: "Inauguration & Keynote", description: "Event kick-off with our chief guest.", type: 'seminar' },
      { time: "10:30 AM - 01:00 PM", title: "Workshop on Digital Marketing", description: "Hands-on session with industry experts.", type: 'workshop' },
      { time: "02:00 PM - 04:00 PM", title: "Biz Quiz Prelims", description: "Test your business acumen.", type: 'competition' },
    ]
  },
  {
    day: "Day 2: February 21, 2026",
    events: [
      { time: "10:00 AM - 12:00 PM", title: "Best Manager Finals", description: "The ultimate test of management skills.", type: 'competition' },
      { time: "01:30 PM - 03:00 PM", title: "Panel: The Future of AI in Business", description: "A discussion with leading AI professionals.", type: 'seminar' },
      { time: "04:00 PM - 05:00 PM", title: "Valedictory & Prize Distribution", description: "Concluding ceremony and awards.", type: 'seminar' },
    ]
  }
];

const speakers: Speaker[] = [
  { name: 'Dr. Evelyn Reed', title: 'CEO, Innovate Inc.', bio: 'A visionary leader in tech and innovation, Dr. Reed has pioneered several disruptive technologies.', imageUrl: 'https://picsum.photos/seed/evelyn_reed/400/400' },
  { name: 'Mr. Johnathan Chen', title: 'Marketing Guru, GrowthX', bio: 'Expert in digital marketing strategies and brand building with over 15 years of experience.', imageUrl: 'https://picsum.photos/seed/johnathan_chen/400/400' },
  { name: 'Ms. Anita Desai', title: 'CFO, FinSolutions', bio: 'A financial strategist known for her expertise in corporate finance and investment banking.', imageUrl: 'https://picsum.photos/seed/anita_desai/400/400' },
];

const DetailsPage: React.FC = () => {
  return (
    <>
      <Section title="Event Schedule" subtitle="Plan your participation with our detailed agenda.">
        <div className="max-w-4xl mx-auto space-y-12">
          {eventSchedule.map((day, dayIndex) => (
            <div key={dayIndex}>
              <h3 className="text-2xl font-bold text-brand-accent mb-6 border-l-4 border-brand-accent pl-4">{day.day}</h3>
              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <EventCard key={eventIndex} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Guest Speakers" className="bg-gray-800/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </Section>
      
      <Section title="Venue Details">
        <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Hindusthan College of Arts & Science</h3>
            <p className="text-gray-300 text-lg mb-6">Hindusthan Gardens, Behind Nava India, Coimbatore, Tamil Nadu 641028</p>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                 <img src="https://picsum.photos/seed/map/1200/600" alt="Map to venue" className="w-full h-full object-cover" />
            </div>
        </div>
      </Section>
    </>
  );
};

export default DetailsPage;
