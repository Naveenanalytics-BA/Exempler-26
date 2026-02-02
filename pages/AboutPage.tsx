
import React from 'react';
import Section from '../components/Section';
import { Organizer } from '../types';
import { SITE_IMAGES } from '../constants/images';

const organizers: Organizer[] = [
    { name: 'Dr. B. Sudhakar', role: 'Director - MBA Dept', imageUrl: SITE_IMAGES.avatars.male },
    { name: 'Dr. S. Saravanan', role: 'Faculty Coordinator', imageUrl: SITE_IMAGES.avatars.male },
    { name: 'Ms. S. Saritha', role: 'Student President', imageUrl: SITE_IMAGES.avatars.female },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Section title="About HICAS" subtitle="A legacy of excellence in education since 1995.">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 text-lg text-gray-300 leading-relaxed space-y-6">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-brand-accent first-letter:mr-3 first-letter:float-left">
              Hindusthan College of Arts & Science (HICAS) is a premier institution dedicated to providing quality education and fostering holistic development. Since its inception, HICAS has been at the forefront of academic innovation, research, and community engagement.
            </p>
            <p>
              Located in the heart of Coimbatore, our campus is a vibrant hub of learning, featuring state-of-the-art infrastructure designed to inspire creativity and critical thinking. Our mission is to empower students with knowledge, skills, and values to become leaders and responsible citizens in a globalized world.
            </p>
            <div className="flex items-center gap-4 p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-xl">
               <div className="p-3 bg-brand-accent/20 rounded-lg text-brand-accent">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
               </div>
               <div>
                 <p className="text-white font-bold">NAAC 'A++' Accredited</p>
                 <p className="text-sm text-gray-400">Recognized for academic excellence nationwide.</p>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden border border-gray-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gray-900 group">
              <img 
                src={SITE_IMAGES.aboutSectionImage} 
                alt="About HICAS" 
                className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = SITE_IMAGES.mbaDepartment;
                }}
              />
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg">
                <span className="text-white text-xs font-black tracking-widest uppercase">Excellence in Action</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent p-8">
                <h4 className="text-2xl font-bold text-white mb-1">Empowering Minds</h4>
                <p className="text-brand-light text-sm">Where Leadership Meets Innovation</p>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </Section>

      <Section title="The MBA Department" className="bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6 text-center">
          <p>
            The Department of Master of Business Administration at HICAS is a center for excellence in management education. We are committed to nurturing future business leaders through a rigorous curriculum, industry-oriented training, and a focus on ethical practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700">
              <span className="block text-3xl font-black text-brand-accent mb-2">25+</span>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Years Legacy</span>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700">
              <span className="block text-3xl font-black text-brand-accent mb-2">5000+</span>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Alumni Base</span>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700">
              <span className="block text-3xl font-black text-brand-accent mb-2">100%</span>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Placement Support</span>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Meet the Organizers">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizers.map((organizer, index) => (
            <div key={index} className="text-center bg-gray-800 p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-brand-accent/20 group">
              <div className="relative inline-block mb-6">
                <img 
                  src={organizer.imageUrl} 
                  alt={organizer.name} 
                  className="w-32 h-32 rounded-full mx-auto border-4 border-brand-accent shadow-xl transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = organizer.imageUrl.includes('female') ? SITE_IMAGES.avatars.female : SITE_IMAGES.avatars.male;
                  }}
                />
                <div className="absolute -bottom-2 -right-2 bg-brand-accent w-8 h-8 rounded-full flex items-center justify-center border-4 border-gray-800">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white transition-colors group-hover:text-brand-accent">{organizer.name}</h3>
              <p className="text-brand-accent font-medium mt-1 uppercase text-xs tracking-widest">{organizer.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
