
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Warning from './components/Warning';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Flow from './components/Flow';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';
import Legal from './components/Legal';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactForm from './components/ContactForm';
import InterimCTA from './components/InterimCTA';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'legal' | 'privacy'>('home');

  const navigateToLegal = () => {
    setCurrentView('legal');
    window.scrollTo(0, 0);
  };

  const navigateToPrivacy = () => {
    setCurrentView('privacy');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    if (window.location.hash === '') {
        window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased" id="root">
      <Header onNavigateHome={() => setCurrentView('home')} />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <Warning />
            
            <div className="bg-red-600 py-4 overflow-hidden">
              <div className="container mx-auto px-4 text-center">
                <p className="text-white font-black text-lg md:text-xl animate-pulse">
                  「今日契約しないと高くなる」は嘘です！まずは落ち着いてご相談ください。
                </p>
              </div>
            </div>

            <Comparison />
            
            <Features />
            
            <Flow />
            
            {/* Selection UI for LINE or Contact Form */}
            <div id="selection-area">
               <InterimCTA />
            </div>

            {/* Contact Form above FAQ as requested */}
            <ContactForm onPrivacyClick={navigateToPrivacy} />
            <FAQ />
          </>
        )}
        
        {currentView === 'legal' && (
          <Legal onBack={navigateToHome} />
        )}

        {currentView === 'privacy' && (
          <PrivacyPolicy onBack={navigateToHome} />
        )}
      </main>

      <Footer 
        onLegalClick={navigateToLegal} 
        onPrivacyClick={navigateToPrivacy}
        onHomeClick={navigateToHome} 
      />
      
      {currentView === 'home' && <StickyFooter />}
    </div>
  );
}

export default App;
