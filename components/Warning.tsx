import React from 'react';
import { TACTICS } from '../constants';
import { TacticItem } from '../types';
import { AlertTriangle, ShieldAlert } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WarningCard: React.FC<{ tactic: TacticItem; index: number }> = ({ tactic, index }) => {
    // Use threshold 0 for mobile reliability
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0 });
    
    return (
        <div 
            ref={elementRef}
            className={`bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-400 relative overflow-hidden reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertTriangle className="w-24 h-24 text-black" />
            </div>
            {/* Caution Striping Effect on top border */}
            <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FCD34D, #FCD34D 10px, #000 10px, #000 20px)' }}></div>
            
            <div className="relative z-10 mt-2">
            <div className="flex items-center gap-2 mb-3">
                <span className="bg-black text-yellow-400 text-xs font-black px-3 py-1 rounded-sm">手口 {index + 1}</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-3 border-b-2 border-yellow-100 pb-2">
                {tactic.title}
            </h3>
            {/* Increased description text size */}
            <p className="text-gray-800 font-medium leading-relaxed text-base md:text-lg">
                {tactic.description}
            </p>
            </div>
        </div>
    );
};

const Warning: React.FC = () => {
  return (
    <section className="py-16 bg-[#FFF9C4]"> {/* Yellow-50/100ish */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
             <div className="absolute inset-0 bg-yellow-400 transform skew-x-[-10deg]"></div>
             <span className="relative z-10 inline-flex items-center gap-2 text-black font-black tracking-widest text-lg px-6 py-2">
                <ShieldAlert className="w-6 h-6" /> WARNING
             </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-black mt-2 leading-tight">
            これらは<span className="text-[#D32F2F] text-4xl md:text-5xl inline-block border-b-4 border-black mx-2">「要注意」</span>な<br className="md:hidden"/>高額契約のサインです
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TACTICS.map((tactic, index) => (
            <WarningCard key={tactic.title} tactic={tactic} index={index} />
          ))}
        </div>
        
        <div className="mt-10 text-center bg-black p-6 rounded-xl border-4 border-yellow-400 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
           {/* Caution Tape Effect */}
           <div className="absolute -left-10 top-5 w-40 h-8 bg-yellow-400 text-black text-xs font-black flex items-center justify-center transform -rotate-45 border-2 border-black">KEEP OUT</div>
           <div className="absolute -right-10 bottom-5 w-40 h-8 bg-yellow-400 text-black text-xs font-black flex items-center justify-center transform -rotate-45 border-2 border-black">DANGER</div>

           <p className="font-bold text-white text-lg md:text-xl relative z-10">
             「自分もこれを言われた！」と思ったら、<br className="md:hidden"/>
             <span className="text-yellow-400 underline decoration-yellow-400 underline-offset-4">即決せずにご相談ください。</span>
           </p>
        </div>
      </div>
    </section>
  );
};

export default Warning;