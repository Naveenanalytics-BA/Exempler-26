
import React from 'react';
import Section from '../components/Section';
import FaqItem from '../components/FaqItem';

const faqs = [
    { q: "What is EXEMPLER'26?", a: "EXEMPLER'26 is an inter-collegiate management meet organized by the MBA department of Hindusthan College of Arts & Science, featuring various competitions, workshops, and seminars." },
    { q: "Who is eligible to participate?", a: "The event is open to all undergraduate and postgraduate students from any recognized college or university." },
    { q: "Is there a registration fee?", a: "Yes, there is a registration fee of ₹250 per participant. This fee gives you access to all the general events and one competitive event of your choice." },
    { q: "What is the last date for registration?", a: "The deadline for online registration is October 15th, 2026. No on-spot registrations will be available." },
    { q: "Can I participate in multiple competitive events?", a: "Participants can register for one primary competitive event. However, you can attend all workshops and seminars." },
    { q: "Will accommodation be provided for outstation participants?", a: "Unfortunately, we do not provide accommodation. However, we can provide a list of nearby hotels and PGs upon request." },
    { q: "Are certificates provided to all participants?", a: "Yes, all registered participants who attend the event will receive a certificate of participation." },
];

const FaqPage: React.FC = () => {
  return (
    <Section title="Frequently Asked Questions" subtitle="Find answers to common questions about EXEMPLER'26.">
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.q} defaultOpen={index === 0}>
            {faq.a}
          </FaqItem>
        ))}
      </div>
    </Section>
  );
};

export default FaqPage;
