import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { Speaker } from '../types';
import SpeakerCard from '../components/SpeakerCard';
import FaqItem from '../components/FaqItem';

const featuredSpeakers: Speaker[] = [
    { name: 'Dr. Evelyn Reed', title: 'CEO, Innovate Inc.', bio: 'A visionary leader in tech and innovation.', imageUrl: 'https://picsum.photos/seed/evelyn_reed/400/400' },
    { name: 'Mr. Johnathan Chen', title: 'Marketing Guru, GrowthX', bio: 'Expert in digital marketing strategies and brand building.', imageUrl: 'https://picsum.photos/seed/johnathan_chen/400/400' },
];


const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white px-6 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary z-0">
          <img src="https://picsum.photos/seed/hero/1920/1080" alt="Exempler Event" className="w-full h-full object-cover opacity-20"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
        <div className="relative z-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
            EXEMPLER<span className="text-brand-accent">'26</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-gray-200">
            The Premier Inter-Collegiate Management Meet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-brand-accent hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Register Now
            </Link>
            <Link to="/details" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <Section title="Welcome to EXEMPLER'26" subtitle="Experience the pinnacle of management and innovation.">
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
          <p>
            EXEMPLER'26 is the flagship annual event hosted by the MBA department of Hindusthan College of Arts & Science. It's a dynamic platform for aspiring managers and entrepreneurs to showcase their talents, learn from industry leaders, and network with peers. This year, we're pushing the boundaries of what's possible with a theme centered on "Future-Ready Leadership".
          </p>
        </div>
      </Section>
      
      {/* Featured Speakers Section */}
      <Section title="Featured Speakers" className="bg-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredSpeakers.map((speaker, index) => (
                  <SpeakerCard key={index} speaker={speaker} />
              ))}
          </div>
      </Section>

      {/* Quick FAQ */}
      <Section title="Quick Questions">
        <div className="max-w-3xl mx-auto space-y-4">
          <FaqItem question="When and where is the event?" defaultOpen={true}>
            EXEMPLER'26 will be held on October 24th & 25th, 2026, at the Hindusthan College of Arts & Science campus.
          </FaqItem>
          <FaqItem question="Who can participate?">
            The event is open to all undergraduate and postgraduate students from any recognized institution.
          </FaqItem>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;