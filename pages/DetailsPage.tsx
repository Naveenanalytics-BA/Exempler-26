
import React from 'react';
import Section from '../components/Section';
import EventCard from '../components/EventCard';
import { Event } from '../types';
import { SITE_IMAGES } from '../constants/images';

const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Hindusthan+College+of+Arts+%26+Science+Coimbatore";

const eventSchedule: { day: string; events: Event[] }[] = [
  {
    day: "Friday, February 20, 2026",
    events: [
      { title: "LOGIMANIACS", description: "Logistics - Navigate the complexities of supply chain and logistics management in this intense simulation.", type: 'competition' },
      { title: "STOCK WAR", description: "Finance - Test your prowess in the high-stakes world of stock trading and financial analysis.", type: 'competition' },
      { title: "BRAND BATTLE", description: "Marketing - Create compelling brand identities and revolutionary marketing strategies.", type: 'competition' },
      { title: "STATHEON", description: "Business Analytics - Decode complex datasets and provide actionable business insights for tomorrow.", type: 'competition' },
      { title: "COUPLING", description: "Connection - A unique test of team coordination and business networking capabilities.", type: 'competition' },
      { title: "HUNTER", description: "HR - Hunt for the best talent and demonstrate your human capital management skills.", type: 'competition' },
      { title: "BE FIT", description: "Health Care - Designing efficient management strategies specifically for the healthcare sector.", type: 'competition' },
      { title: "EPL AUCTION", description: "Sports Strategy - An intense auction simulation where business logic meets sports passion.", type: 'competition' },
      { title: "BOSS BRILLIANCE", description: "Best Manager - The flagship hunt for the most versatile and brilliant management professional.", type: 'competition' },
      { title: "PHOTOGRAPHY", description: "Fine Arts - Capturing the essence of corporate dynamics and event spirit through your lens.", type: 'competition' },
    ]
  }
];

const DetailsPage: React.FC = () => {
  const { campusBuilding } = SITE_IMAGES;

  return (
    <>
      <Section 
        title="Event Schedule" 
        subtitle="Discover our 10 premier competitive events for EXEMPLER'26. All competitions take place on the main event day."
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {eventSchedule.map((day, dayIndex) => (
            <div key={dayIndex} className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-brand-accent mb-6 border-l-4 border-brand-accent pl-4">{day.day}</h3>
              <div className="grid grid-cols-1 gap-4">
                {day.events.map((event, eventIndex) => (
                  <EventCard key={eventIndex} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <Section title="Venue & Campus Entrance" className="bg-gray-800/30">
        <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
                <h3 className="text-4xl font-black text-white mb-3 tracking-tighter uppercase">Hindusthan College of Arts & Science</h3>
                <p className="text-gray-400 text-xl font-medium">Hindusthan Gardens, Behind Nava India, Coimbatore</p>
                <div className="w-24 h-1.5 bg-brand-accent mx-auto mt-6 rounded-full"></div>
            </div>
            
            {/* Main Campus Entrance Photo Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900 group">
                 <div className="absolute top-0 left-0 right-0 p-6 z-20 bg-gradient-to-b from-black/80 to-transparent">
                    <p className="text-brand-accent font-black tracking-widest text-xs uppercase mb-1">Official Event Entrance</p>
                    <h4 className="text-white text-xl font-bold">Main Campus Archway</h4>
                 </div>
                 
                 <img 
                    src={campusBuilding.primary} 
                    alt="HICAS Main Campus Entrance" 
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const currentSrc = target.src;
                      
                      // Fix: Sequential fallback logic using only defined properties in SITE_IMAGES.campusBuilding to resolve TS errors
                      if (currentSrc.includes(campusBuilding.primary)) {
                        target.src = campusBuilding.venuePhoto;
                      } else if (currentSrc.includes(campusBuilding.venuePhoto)) {
                        target.src = campusBuilding.classroom;
                      } else if (!currentSrc.includes(campusBuilding.professional)) {
                        target.src = campusBuilding.professional;
                      }
                    }}
                 />

                 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent p-10 flex flex-col items-center">
                    <a 
                      href={GOOGLE_MAPS_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-brand-primary hover:bg-brand-accent text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl mb-4"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Open in Google Maps
                    </a>
                    <p className="text-gray-300 text-sm max-w-md">
                      Participants are requested to enter through the main college gate shown above. Registration desks are located 100m from this entrance.
                    </p>
                 </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700">
                    <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-6 text-brand-accent">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">Location</h4>
                    <p className="text-gray-400">Conveniently located near Nava India, within the bustling educational hub of Coimbatore.</p>
                </div>
                <div className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700">
                    <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-6 text-brand-accent">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">Facility</h4>
                    <p className="text-gray-400">The event spans the state-of-the-art MBA Block and the spacious Main Auditorium.</p>
                </div>
                <div className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700">
                    <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-6 text-brand-accent">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">Timings</h4>
                    <p className="text-gray-400">Registration begins at 08:30 AM at the entrance lobby. All events start strictly at 10:00 AM.</p>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
};

export default DetailsPage;
