
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const HighlightsPage = lazy(() => import('./pages/HighlightsPage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex justify-center items-center h-screen text-brand-accent">Loading page...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/highlights" element={<HighlightsPage />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/faq" element={<FaqPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
