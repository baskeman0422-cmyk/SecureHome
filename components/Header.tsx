import React from 'react';
import { Send } from 'lucide-react';

interface HeaderProps {
  onNavigateHome?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {

  const handleNavClick = (id: string) => {
    if (onNavigateHome) {
      onNavigateHome();
    }
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      {/* Warning Bar */}
      <div className="bg-[#E60000] text-yellow-100 text-sm md:text-base py-2 text-center font-black px-4">
        <span className="animate-flash-text inline-flex items-center gap-2">
          ⚠️ 訪問販売での即日契約によるトラブルが急増しています
        </span>
      </div>
      
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo Button */}
          <button onClick={() => handleNavClick('root')} className="text-gray-900 font-black tracking-tighter flex items-center font-logo hover:opacity-80 transition-opacity">
            <img 
              src="https://storage.googleapis.com/blog-storage-secure-home/images/icon.png" 
              alt="Logo" 
              className="h-9 w-9 md:h-12 md:w-12 mr-2 object-contain"
            />
            {/* Increased font sizes: mobile to 1.8rem, desktop to 4xl */}
            <span className="text-[1.6rem] md:text-[2rem] leading-none mt-0.5">エコキュート適正価格協会</span>
          </button>
        </div>
        
        {/* Desktop CTA & Info (Navigation Links Removed) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-right border-r border-gray-200 pr-6 mr-2">
            <p className="text-xs text-gray-500 leading-tight">
              千葉県知事登録 第77731号
            </p>
            <p className="text-xs text-gray-400 font-medium">
              運営：セキュアホーム
            </p>
          </div>
          
          <a 
            href="https://lin.ee/CQ8BlDp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-lg hover:bg-[#05a546] transition shadow-lg font-bold transform hover:-translate-y-0.5"
          >
            <Send className="w-5 h-5" />
            <span>見積書をLINE診断</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;