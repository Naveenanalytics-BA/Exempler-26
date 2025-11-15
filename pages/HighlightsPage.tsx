
import React from 'react';
import Section from '../components/Section';
import GalleryImage from '../components/GalleryImage';
import TestimonialCard from '../components/TestimonialCard';
import { Testimonial } from '../types';

const galleryImages = [
  'https://picsum.photos/seed/gallery1/600/400',
  'https://picsum.photos/seed/gallery2/600/400',
  'https://picsum.photos/seed/gallery3/600/400',
  'https://picsum.photos/seed/gallery4/600/400',
  'https://picsum.photos/seed/gallery5/600/400',
  'https://picsum.photos/seed/gallery6/600/400',
];

const testimonials: Testimonial[] = [
  { quote: "Exempler was an electrifying experience! The competitions were challenging and the networking opportunities were priceless.", name: "Priya Sharma", role: "Participant, Exempler'25" },
  { quote: "An exceptionally well-organized event. The quality of speakers and workshops was top-notch. Highly recommended for any management student.", name: "Rahul Verma", role: "Attendee, Exempler'25" },
  { quote: "I learned so much and made great connections. The energy was contagious. Can't wait for the next one!", name: "Anjali Singh", role: "Participant, Exempler'24" },
];

const HighlightsPage: React.FC = () => {
  return (
    <>
      <Section title="Previous Year Highlights" subtitle="Relive the moments that made our past events unforgettable.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <GalleryImage key={index} src={src} alt={`Event highlight ${index + 1}`} />
          ))}
        </div>
      </Section>

      <Section title="What Our Participants Say" className="bg-gray-800/50">
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
