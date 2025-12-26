import React from 'react';
import { Send, Mail } from 'lucide-react';

const StickyFooter: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md z-40 p-2.5 pb-safe border-t border-gray-200 shadow-[0_-10px_30px_rgba(0,0,0,0.15)]">
      <div className="flex gap-2 max-w-full">
        {/* Email Inquiry Button (Updated with shake-glow and shine) */}
        <button 
          onClick={scrollToContact}
          className="flex-1 bg-gray-900 text-white rounded-2xl py-3 px-2 active:scale-95 transition-transform flex flex-col items-center justify-center gap-0.5 relative overflow-hidden border border-gray-800 animate-shake-glow"
        >
          {/* Shine Overlay for Email Button */}
          <div className="absolute top-0 -left-full w-1/2 h-full bg-white/10 skew-x-[-20deg] animate-shine"></div>
          
          <Mail className="w-5 h-5 text-gray-400 relative z-10" />
          <span className="text-[10px] font-bold opacity-70 relative z-10">フォームから</span>
          <span className="text-xs font-black tracking-tighter relative z-10">メールで相談</span>
        </button>

        {/* LINE Button (Primary - Larger) */}
        <a 
          href="https://lin.ee/CQ8BlDp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2.5] bg-[#06C755] text-white rounded-2xl py-3 px-4 shadow-[0_8px_20px_rgba(6,199,85,0.4)] active:scale-95 transition-transform flex items-center justify-center gap-3 relative overflow-hidden animate-shake-glow"
        >
          {/* Shine Overlay */}
          <div className="absolute top-0 -left-full w-1/2 h-full bg-white/30 skew-x-[-20deg] animate-shine"></div>
          
          <div className="bg-white/20 p-2 rounded-full flex-shrink-0 shadow-inner">
            <Send className="w-6 h-6 drop-shadow-sm" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-[10px] leading-none font-bold opacity-90 mb-0.5 tracking-wide">最短5分・写真で診断</span>
            <span className="text-lg font-black leading-none tracking-tight">LINEで無料診断</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default StickyFooter;