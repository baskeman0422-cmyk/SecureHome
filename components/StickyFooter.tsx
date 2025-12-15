import React from 'react';
import { Send } from 'lucide-react';

const StickyFooter: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-40 p-3 border-t border-gray-200 pb-safe">
      <a 
        href="https://lin.ee/CQ8BlDp"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-[#06C755] text-white rounded-xl p-3 shadow-[0_10px_20px_rgba(0,0,0,0.4)] active:scale-95 transition-transform animate-shake-glow relative overflow-hidden ring-2 ring-white"
      >
        {/* Shine Overlay */}
        <div className="absolute top-0 -left-full w-1/2 h-full bg-white/30 skew-x-[-20deg] animate-shine"></div>
        
        <div className="flex items-center justify-center gap-3 relative z-10">
           <Send className="w-8 h-8 drop-shadow-sm" />
           <div className="text-center">
             {/* Increased font size from xs to sm */}
             <p className="text-sm leading-none font-bold mb-1 opacity-100 text-green-50 drop-shadow-sm">見積書を撮って送るだけ</p>
             <p className="text-2xl font-black leading-none drop-shadow-md">LINEで無料診断する</p>
           </div>
        </div>
      </a>
    </div>
  );
};

export default StickyFooter;