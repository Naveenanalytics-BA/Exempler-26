
import React from 'react';
import { Speaker } from '../types';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 group">
        <div className="relative">
            <img src={speaker.imageUrl} alt={speaker.name} className="w-full h-56 object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                <p className="text-brand-accent font-semibold">{speaker.title}</p>
            </div>
        </div>
      <div className="p-4">
        <p className="text-gray-400 text-sm">{speaker.bio}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
