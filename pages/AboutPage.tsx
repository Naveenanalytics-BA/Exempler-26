
import React from 'react';
import Section from '../components/Section';
import { Organizer } from '../types';

const organizers: Organizer[] = [
    { name: 'Dr. S. Kumar', role: 'Head of MBA Dept.', imageUrl: 'https://picsum.photos/seed/org1/400/400' },
    { name: 'Prof. R. Menon', role: 'Faculty Coordinator', imageUrl: 'https://picsum.photos/seed/org2/400/400' },
    { name: 'Vijay Anand', role: 'Student President', imageUrl: 'https://picsum.photos/seed/org3/400/400' },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Section title="About HICAS" subtitle="A legacy of excellence in education.">
        <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-4">
          <p>Hindusthan College of Arts & Science (HICAS) is a premier institution dedicated to providing quality education and fostering holistic development. Since its inception, HICAS has been at the forefront of academic innovation, research, and community engagement.</p>
          <p>Our mission is to empower students with knowledge, skills, and values to become leaders and responsible citizens in a globalized world. We offer a wide range of undergraduate and postgraduate programs across various disciplines.</p>
        </div>
      </Section>

      <Section title="The MBA Department" className="bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-4">
          <p>The Department of Master of Business Administration at HICAS is a center for excellence in management education. We are committed to nurturing future business leaders through a rigorous curriculum, industry-oriented training, and a focus on ethical practices.</p>
          <p>Our faculty comprises experienced academicians and industry professionals who bring a wealth of knowledge to the classroom. EXEMPLER is our pride, a platform where our students apply their learning and hone their management skills.</p>
        </div>
      </Section>

      <Section title="Meet the Organizers">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizers.map((organizer, index) => (
            <div key={index} className="text-center bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <img src={organizer.imageUrl} alt={organizer.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-accent"/>
              <h3 className="text-xl font-bold text-white">{organizer.name}</h3>
              <p className="text-brand-accent">{organizer.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
