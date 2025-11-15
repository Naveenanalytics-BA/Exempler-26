
import React, { useState } from 'react';
import Section from '../components/Section';

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    event: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you would typically send data to a server
    setSubmitted(true);
  };

  return (
    <Section title="Register for EXEMPLER'26" subtitle="Secure your spot at the most anticipated management event of the year.">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Registration Form */}
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input type="text" name="name" id="name" required onChange={handleChange} value={formData.name} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                <input type="email" name="email" id="email" required onChange={handleChange} value={formData.email} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input type="tel" name="phone" id="phone" required onChange={handleChange} value={formData.phone} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white" />
              </div>
              <div>
                <label htmlFor="college" className="block text-sm font-medium text-gray-300">College/Institution</label>
                <input type="text" name="college" id="college" required onChange={handleChange} value={formData.college} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white" />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-300">Department</label>
                <input type="text" name="department" id="department" required onChange={handleChange} value={formData.department} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white" />
              </div>
              <div>
                <label htmlFor="event" className="block text-sm font-medium text-gray-300">Event to Participate In</label>
                <select name="event" id="event" required onChange={handleChange} value={formData.event} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-white">
                  <option value="">Select an Event</option>
                  <option value="biz-quiz">Biz Quiz</option>
                  <option value="ad-zap">Ad-Zap</option>
                  <option value="best-manager">Best Manager</option>
                </select>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Submit Registration
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-brand-accent mb-4">Thank You!</h3>
              <p className="text-gray-300">Your registration has been successfully submitted. We've sent a confirmation to {formData.email}. We look forward to seeing you!</p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Instructions</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Fill out all fields accurately.</li>
              <li>Use a valid email address for confirmation.</li>
              <li>Each participant must register individually.</li>
              <li>Please check the event details for any specific prerequisites.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Deadlines</h3>
            <p>Registration closes on <span className="font-semibold text-brand-accent">October 15th, 2026.</span></p>
            <p>Late registrations will not be accepted.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Registration Fee</h3>
            <p>A nominal fee of <span className="font-semibold text-brand-accent">₹250 per participant</span> is applicable. Payment can be made online via the link sent to your registered email after form submission.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RegistrationPage;
