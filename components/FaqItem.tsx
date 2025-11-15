
import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left font-semibold text-white focus:outline-none"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-5 pt-0 text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
