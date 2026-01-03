
import React, { useState, useEffect, useCallback } from 'react';
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
import Thanks from './components/Thanks';

type ViewType = 'home' | 'legal' | 'privacy' | 'thanks';

function App() {
  // デフォルトのビューを 'home' に戻す
  const [currentView, setCurrentView] = useState<ViewType>('home');

  // URLのパス（および念のためのクエリ/ハッシュ）に基づいてビューを解決する
  const resolveView = useCallback(() => {
    const path = window.location.pathname.replace('/', '');
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    
    // パス名が明示的に指定されている場合はそれに従う
    if (path === 'home') return 'home';
    if (path === 'legal') return 'legal';
    if (path === 'privacy') return 'privacy';
    if (path === 'thanks') return 'thanks';
    
    // フォールバック: ハッシュ
    if (hash === 'thanks') return 'thanks';
    if (hash === 'legal') return 'legal';
    if (hash === 'privacy') return 'privacy';
    
    // デフォルトを 'home' に設定
    return 'home';
  }, []);

  useEffect(() => {
    // 初回ロード時の判定
    setCurrentView(resolveView());

    // ブラウザの「戻る」「進む」を検知
    const handlePopState = () => {
      setCurrentView(resolveView());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [resolveView]);

  // ナビゲーション関数
  const navigateTo = (view: ViewType) => {
    setCurrentView(view);
    
    const newPath = view === 'home' ? '/' : `/${view}`;
    
    if (window.location.pathname !== newPath) {
      window.history.pushState({ view }, '', newPath);
    }
    window.scrollTo(0, 0);
  };

  const navigateToLegal = () => navigateTo('legal');
  const navigateToPrivacy = () => navigateTo('privacy');
  const navigateToHome = () => navigateTo('home');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased" id="root">
      <Header onNavigateHome={navigateToHome} />
      
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
            
            <div id="selection-area">
               <InterimCTA />
            </div>

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

        {currentView === 'thanks' && (
          <Thanks onBack={navigateToHome} />
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
