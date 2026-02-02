
import React from 'react';
import Section from '../components/Section';
import GalleryImage from '../components/GalleryImage';
import TestimonialCard from '../components/TestimonialCard';
import { Testimonial } from '../types';
import { SITE_IMAGES } from '../constants/images';

const testimonials: Testimonial[] = [
  { quote: "Exempler was an electrifying experience! The competitions were challenging and the networking opportunities were priceless.", name: "Priya Sharma", role: "Participant, Exempler'25" },
  { quote: "An exceptionally well-organized event. The quality of speakers and workshops was top-notch. Highly recommended for any management student.", name: "Rahul Verma", role: "Attendee, Exempler'25" },
  { quote: "I learned so much and made great connections. The energy was contagious. Can't wait for the next one!", name: "Anjali Singh", role: "Participant, Exempler'24" },
];

const HighlightsPage: React.FC = () => {
  return (
    <>
      <Section 
        title="Event Gallery" 
        subtitle="Capturing the spirit, competition, and camaraderie of EXEMPLER through the years."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_IMAGES.gallery.map((src, index) => (
            <GalleryImage key={index} src={src} alt={`Exempler Event Moment ${index + 1}`} />
          ))}
        </div>
        
        <div className="mt-12 text-center p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
            <h4 className="text-white font-bold mb-2">Want to see your photos here?</h4>
            <p className="text-gray-400 text-sm italic">
                Tag us on Instagram with <span className="text-brand-accent">#Exempler26</span> or email your high-res photos to our media team.
            </p>
        </div>
      </Section>

      <Section title="Voices of EXEMPLER" className="bg-gray-800/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default HighlightsPage;
