import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import FeatureShowcase from './components/FeatureShowcase.jsx';
import HireFromAnywhere from './components/HireFromAnywhere.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <FeatureShowcase />
      <HireFromAnywhere />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
