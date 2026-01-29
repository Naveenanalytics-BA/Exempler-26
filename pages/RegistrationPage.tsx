
import React from 'react';
import Section from '../components/Section';

const RegistrationPage: React.FC = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScP-1Gsq5IsUt-i0kYjmeU2HpAinrgEUj62KVqCG7R5iuVwyA/viewform?usp=sharing&ouid=102938352164021029705";

  return (
    <Section title="Register for EXEMPLER'26" subtitle="Join the future of management. Registration is now open!">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Direct Registration Action */}
        <div className="bg-gray-800/80 p-8 rounded-2xl shadow-2xl border border-brand-primary/30 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-full mb-2">
            <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Official Registration Form</h3>
          <p className="text-gray-300">
            To ensure a seamless experience, we are using a dedicated registration portal. Click the button below to fill out your details.
          </p>
          
          <div className="pt-4">
            <a 
              href={googleFormUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full bg-brand-primary hover:bg-brand-dark text-white font-extrabold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/40 text-lg"
            >
              Go to Registration Form
            </a>
            <p className="mt-4 text-xs text-gray-500 break-all">
              Short Link: <span className="text-brand-light">bit.ly/exempler26-reg</span>
            </p>
          </div>

          <div className="pt-6 border-t border-gray-700 flex items-center justify-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Secure Registration via Google Forms
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-8">
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quick Instructions
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">•</span>
                <span>Ensure you have your <strong>College ID card</strong> handy for the form.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">•</span>
                <span>Select your primary competitive event carefully.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">•</span>
                <span>Registration is <strong>free of cost</strong> for all participants.</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-primary/10 border border-brand-primary/30 p-6 rounded-xl text-center">
            <p className="text-sm uppercase tracking-widest text-brand-accent font-bold mb-1">Registration Status</p>
            <p className="text-2xl font-bold text-white">OPEN NOW</p>
          </div>

          <div className="text-sm text-gray-500 italic">
            * Note: For team events, the team lead must fill the form and include all member names. Limited slots available on a first-come, first-served basis.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RegistrationPage;
