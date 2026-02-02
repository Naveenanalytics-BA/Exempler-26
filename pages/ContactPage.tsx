
import React, { useState } from 'react';
import Section from '../components/Section';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Section title="Get In Touch" subtitle="Have questions? We're here to help.">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-2xl border border-gray-700">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white p-2.5" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white p-2.5" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white p-2.5" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white p-2.5"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg">
                Send Message
              </button>
            </form>
          ) : (
             <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-accent mb-4">Message Sent!</h3>
              <p className="text-gray-300">Thank you for reaching out. We will get back to you at {formData.email} shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-accent hover:underline text-sm font-medium">Send another message</button>
            </div>
          )}
        </div>

        {/* Contact Details */}
        <div className="space-y-8 text-gray-300">
            <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-brand-accent rounded-full"></span>
                    Event Coordinators
                </h3>
                <div className="space-y-4">
                    <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50">
                        <p className="text-brand-accent font-bold text-sm uppercase tracking-wider mb-1">Faculty Coordinator</p>
                        <p className="text-white font-semibold text-lg">Dr. S. Saravanan</p>
                        <p className="text-gray-400 text-sm mb-2">Associate Professor</p>
                        <a href="tel:+919380546058" className="inline-flex items-center gap-2 text-brand-light hover:text-brand-accent transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                            +91 93805 46058
                        </a>
                    </div>

                    <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50">
                        <p className="text-brand-accent font-bold text-sm uppercase tracking-wider mb-1">Student Coordinator</p>
                        <p className="text-white font-semibold text-lg">Ms. S. Saritha</p>
                        <a href="tel:+918778800384" className="inline-flex items-center gap-2 text-brand-light hover:text-brand-accent transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                            +91 87788 00384
                        </a>
                    </div>
                </div>
            </div>
             <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-1 h-6 bg-brand-accent rounded-full"></span>
                    Email Us
                </h3>
                <p className="text-gray-400 mb-1">For general inquiries:</p>
                <p><a href="mailto:exemplarhicasmba@gmail.com" className="text-brand-accent hover:text-brand-light font-bold text-lg underline decoration-brand-accent/30 underline-offset-4">exemplarhicasmba@gmail.com</a></p>
             </div>
             <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-1 h-6 bg-brand-accent rounded-full"></span>
                    Venue Address
                </h3>
                <div className="text-gray-400 leading-relaxed">
                    <p className="text-white font-medium">Hindusthan College of Arts & Science</p>
                    <p>Hindusthan Gardens, Behind Nava India,</p>
                    <p>Coimbatore, Tamil Nadu 641028</p>
                </div>
             </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
