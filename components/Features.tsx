import React, { useState, useEffect } from 'react';
import { STRENGTHS } from '../constants';
import { StrengthItem } from '../types';
import { Wallet, Smile, Shield, Settings } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const iconMap: { [key: string]: React.ReactNode } = {
  wallet: <Wallet className="w-5 h-5 md:w-6 md:h-6" />,
  smile: <Smile className="w-5 h-5 md:w-6 md:h-6" />,
  shield: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
  settings: <Settings className="w-5 h-5 md:w-6 md:h-6" />,
};

const cardImages = [
  "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80&w=800", // Wallet/Money
  "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?auto=format&fit=crop&q=80&w=800", // Smile/People
  "https://storage.googleapis.com/blog-storage-secure-home/images/certification.jpg", // Certification
  "https://plus.unsplash.com/premium_photo-1676666379051-383ed1b005e8?auto=format&fit=crop&q=80&w=800", // Tech/Machines
];

const FeatureCard: React.FC<{ strength: StrengthItem; index: number }> = ({ strength, index }) => {
    // Standard reveal animation
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
    const bgImage = cardImages[index];
    const [isActive, setIsActive] = useState(false);

    // POINT 03 (index 2) requires the image to be aligned to the top
    const imgPositionClass = index === 2 ? 'object-top' : 'object-center';

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Separate observer for the "active" state in the middle of the screen
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsActive(entry.isIntersecting);
            },
            {
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={elementRef}
            className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col-reverse md:flex-row reveal-on-scroll ${isVisible ? 'is-visible' : ''} min-h-auto md:min-h-[180px]`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Left Content Side */}
            <div className="p-4 md:p-8 flex-1 flex flex-col justify-center relative z-10 w-full md:w-[60%]">
                
                {/* Stylish Number Badge - Changed to Red */}
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs md:text-sm font-black px-3 py-1 rounded-br-xl z-20">
                    POINT 0{index + 1}
                </div>
                
                <div className="relative z-10 pt-4 md:pt-2">
                    <div className="flex items-center gap-2 mb-2 md:mb-4">
                        {/* Icon - Changed to Red */}
                        <div className="w-7 h-7 md:w-10 md:h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            {iconMap[strength.iconName] || <Shield className="w-4 h-4" />}
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-gray-900 leading-tight group-hover:text-red-700 transition-colors">
                            {strength.title}
                        </h3>
                    </div>
                    
                    <p className="text-base md:text-base lg:text-lg text-gray-600 leading-normal font-medium pl-1">
                        {strength.description}
                    </p>
                </div>
            </div>

            {/* Right Image Side */}
            <div className="w-full md:w-[40%] relative overflow-hidden flex-shrink-0 h-48 md:h-auto">
                 <div className="absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-110 h-full w-full">
                    <img 
                        src={bgImage} 
                        alt={strength.title} 
                        className={`w-full h-full object-cover ${imgPositionClass} transition-all duration-700 
                            ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-80'} 
                            lg:grayscale lg:opacity-80 lg:group-hover:grayscale-0 lg:group-hover:opacity-100`}
                    />
                 </div>
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5 opacity-50"></div>
            </div>
        </div>
    );
}

const Features: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="features">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gray-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob"></div>
            <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-yellow-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-2000"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 relative">
            <div className="text-center md:text-left w-full md:w-2/3">
                <span className="text-red-600 font-bold tracking-widest text-sm bg-red-50 px-3 py-1 rounded-full mb-3 inline-block">OUR STRENGTH</span>
                <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
                なぜ、弊社なら<br className="md:hidden" />
                <span className="text-red-600 relative inline-block mx-1">
                    もっと安く・安全
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-red-100 -z-10"></span>
                </span>
                に<br className="md:hidden" />導入できるのか？
                </h2>
                <p className="mt-4 md:mt-6 text-gray-600 font-medium text-base md:text-lg">
                    <span className="font-bold text-gray-900">「安かろう悪かろう」ではありません。</span><br/>
                    徹底的なコストカットと、プロの職人による直接施工で実現しています。
                </p>
            </div>
        </div>
        
        {/* Grid Layout restricted to narrower container */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 max-w-3xl mx-auto">
          {STRENGTHS.map((strength, index) => (
            <FeatureCard key={strength.title} strength={strength} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;