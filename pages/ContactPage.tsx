
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
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg">
                Send Message
              </button>
            </form>
          ) : (
             <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-brand-accent mb-4">Message Sent!</h3>
              <p className="text-gray-300">Thank you for reaching out. We will get back to you at {formData.email} shortly.</p>
            </div>
          )}
        </div>

        {/* Contact Details */}
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-bold text-white mb-2">Event Coordinators</h3>
                <p><span className="font-semibold">Student Coordinator:</span> R. Prakash</p>
                <p>
                    <a href="tel:+919876543210" className="hover:text-brand-accent">+91 98765 43210</a>
                </p>
                <p><span className="font-semibold">Faculty Coordinator:</span> Prof. Anitha K.</p>
                 <p>
                    <a href="tel:+919123456789" className="hover:text-brand-accent">+91 91234 56789</a>
                </p>
            </div>
             <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p>For general inquiries:</p>
                <p><a href="mailto:exempler26@hicas.ac.in" className="text-brand-accent hover:underline">exempler26@hicas.ac.in</a></p>
             </div>
             <div>
                <h3 className="text-xl font-bold text-white mb-2">Venue Address</h3>
                <p>Hindusthan College of Arts & Science</p>
                <p>Hindusthan Gardens, Behind Nava India,</p>
                <p>Coimbatore, Tamil Nadu 641028</p>
             </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
