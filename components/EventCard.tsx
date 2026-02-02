
import React from 'react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const getEventTypeStyles = (type: Event['type']) => {
    switch (type) {
        case 'workshop': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
        case 'seminar': return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
        case 'competition': return 'bg-red-500/10 text-red-400 border-red-500/30';
        default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const typeStyles = getEventTypeStyles(event.type);

  return (
    <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-300 hover:shadow-brand-primary/20 hover:border-brand-accent/50 border border-gray-700/50">
        {event.time && (
          <div className="flex-shrink-0 w-full md:w-32 text-left">
              <p className="text-brand-accent font-bold text-lg">{event.time}</p>
          </div>
        )}
        <div className="flex-grow">
            <h4 className="text-xl font-bold text-white mb-1 tracking-tight">{event.title}</h4>
            <p className="text-gray-400 leading-relaxed">{event.description}</p>
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0">
            <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border ${typeStyles}`}>
                {event.type}
            </span>
        </div>
    </div>
  );
};

export default EventCard;
