
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
      <p className="text-gray-300 italic flex-grow">"{testimonial.quote}"</p>
      <div className="mt-4 pt-4 border-t border-gray-700">
        <p className="font-bold text-white">{testimonial.name}</p>
        <p className="text-sm text-brand-accent">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
