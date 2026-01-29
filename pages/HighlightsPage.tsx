
import React from 'react';
import Section from '../components/Section';
import GalleryImage from '../components/GalleryImage';
import TestimonialCard from '../components/TestimonialCard';
import { Testimonial } from '../types';

/**
 * STEP TO ADD YOUR PHOTOS:
 * 1. Upload your photos to a hosting service (Imgur, Cloudinary, etc.) 
 *    OR place them in your project folder.
 * 2. Replace the URLs below with your actual image links.
 * 3. You can add as many or as few as you like.
 */
const galleryImages = [
  'https://picsum.photos/seed/event1/800/600', // Replace with your image link 1
  'https://picsum.photos/seed/event2/800/600', // Replace with your image link 2
  'https://picsum.photos/seed/event3/800/600', // Replace with your image link 3
  'https://picsum.photos/seed/event4/800/600', // Replace with your image link 4
  'https://picsum.photos/seed/event5/800/600', // Replace with your image link 5
  'https://picsum.photos/seed/event6/800/600', // Replace with your image link 6
  'https://picsum.photos/seed/event7/800/600', // Replace with your image link 7
  'https://picsum.photos/seed/event8/800/600', // Replace with your image link 8
  'https://picsum.photos/seed/event9/800/600', // Replace with your image link 9
];

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
          {galleryImages.map((src, index) => (
            <GalleryImage key={index} src={src} alt={`Exempler Event Moment ${index + 1}`} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 italic text-sm">
                Have photos from previous years you'd like to share? Tag us on social media!
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
