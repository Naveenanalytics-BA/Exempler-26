
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import FaqItem from '../components/FaqItem';
import { SITE_IMAGES } from '../constants/images';

const HomePage: React.FC = () => {
  const { campusBuilding, heroBackground, eventPoster, posterFallback } = SITE_IMAGES;

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-center text-white px-6 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary z-0">
          <img 
            src={heroBackground} 
            alt="Exempler Event Background" 
            className="w-full h-full object-cover opacity-60 transition-all duration-1000"
            onError={(e) => { (e.target as HTMLImageElement).src = campusBuilding.professional; }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900 z-10"></div>
        <div className="relative z-20 max-w-5xl mx-auto">
          <div className="mb-4 inline-block px-4 py-1.5 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent font-bold text-sm tracking-widest uppercase animate-pulse">
            February 20, 2026
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none" style={{textShadow: '0 5px 20px rgba(0,0,0,0.8)'}}>
            EXEMPLER<span className="text-brand-accent">'26</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 text-gray-200 font-medium">
            Empowering the Next Generation of <span className="text-brand-accent">Future-Ready Leaders</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register" className="group relative bg-brand-accent hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_10px_30px_rgba(66,165,245,0.4)] overflow-hidden">
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link to="/details" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Explore Events
            </Link>
          </div>
        </div>
      </div>
      
      {/* Introduction */}
      <Section title="The Ultimate Management Meet" subtitle="Hindusthan College of Arts & Science presents EXEMPLER'26.">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-gray-300 text-xl leading-relaxed">
            Hosted by the Department of MBA, <strong>EXEMPLER'26</strong> is more than just a competition. It is a high-octane arena where strategy, creativity, and leadership converge. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
            <div className="text-left space-y-4">
              <h3 className="text-2xl font-bold text-white">Why Join Us?</h3>
              <p className="text-gray-400">Experience a day filled with intellectual challenges, networking with industry experts, and a platform to showcase your managerial talent on a national scale.</p>
              <ul className="space-y-2 text-brand-light">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  10 Professional Competitions
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  Cash Prizes & Certifications
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  Networking Opportunities
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 group bg-gray-900">
               <img 
                  src={campusBuilding.frontView} 
                  alt="HICAS Front View" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = campusBuilding.professional;
                  }}
               />
               <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
               <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-lg text-[10px] text-white font-mono uppercase tracking-tighter">
                  HICAS Entrance
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Official Poster Section */}
      <Section title="Official Event Poster" subtitle="Everything you need to know in one glance." className="bg-gray-800/30">
        <div className="max-w-xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(66,165,245,0.3)] border border-brand-accent/30 group bg-gray-900 min-h-[400px] flex items-center justify-center">
            <img 
              src={eventPoster} 
              alt="EXEMPLER'26 Official Event Poster" 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = posterFallback;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
               <a 
                 href={eventPoster} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-white text-brand-dark px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
               >
                 View Full Size
               </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6 italic">
            * Save or share this poster with your colleagues to stay updated.
          </p>
        </div>
      </Section>

      {/* Quick Stats/Features */}
      <div className="bg-brand-primary/10 py-16 border-y border-brand-primary/20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-brand-accent">10</p>
            <p className="text-gray-400 uppercase text-xs tracking-widest font-bold mt-2">Competitions</p>
          </div>
          <div>
            <p className="text-4xl font-black text-brand-accent">50+</p>
            <p className="text-gray-400 uppercase text-xs tracking-widest font-bold mt-2">Colleges</p>
          </div>
          <div>
            <p className="text-4xl font-black text-brand-accent">500+</p>
            <p className="text-gray-400 uppercase text-xs tracking-widest font-bold mt-2">Participants</p>
          </div>
          <div>
            <p className="text-4xl font-black text-brand-accent">₹1L+</p>
            <p className="text-gray-400 uppercase text-xs tracking-widest font-bold mt-2">Total Prizes</p>
          </div>
        </div>
      </div>

      {/* Quick FAQ */}
      <Section title="Essential Info">
        <div className="max-w-3xl mx-auto space-y-4">
          <FaqItem question="Where will EXEMPLER'26 take take place?" defaultOpen={true}>
            The event will be hosted at the main campus of Hindusthan College of Arts & Science, Coimbatore, specifically centered in the MBA Block and the Main Auditorium.
          </FaqItem>
          <FaqItem question="What is the registration deadline?">
            Online registrations remain open until February 15th, 2026. Spot registrations may be available subject to slot availability, but pre-registration is highly recommended.
          </FaqItem>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
