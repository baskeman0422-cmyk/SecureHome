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
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      <Header />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <Warning />
            
            {/* Banner Area */}
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
      
      {/* Only show Sticky Footer on Home page */}
      {currentView === 'home' && <StickyFooter />}
    </div>
  );
}

export default App;