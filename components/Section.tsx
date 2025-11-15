
import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
