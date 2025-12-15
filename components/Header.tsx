import React from 'react';
import { Send } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      {/* Updated Warning Bar: Increased font size */}
      <div className="bg-[#E60000] text-yellow-100 text-sm md:text-base py-2 text-center font-black px-4">
        <span className="animate-flash-text inline-flex items-center gap-2">
          ⚠️ 訪問販売での即日契約によるトラブルが急増しています
        </span>
      </div>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-gray-900 font-black text-lg md:text-2xl tracking-tighter flex items-center font-logo">
            {/* Logo Image */}
            <img 
              src="https://storage.googleapis.com/blog-storage-secure-home/images/icon.png" 
              alt="Logo" 
              className="h-6 w-6 md:h-8 md:w-8 mr-2 object-contain"
            />
            エコキュート適正価格診断センター
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            {/* Increased from text-[10px] to text-xs */}
            <p className="text-xs text-gray-500 leading-tight">
              千葉県知事登録 第77731号
            </p>
            <p className="text-xs text-gray-400 font-medium">
              運営：セキュアホーム
            </p>
          </div>
          {/* Button remains Green, now with link */}
          <a 
            href="https://lin.ee/CQ8BlDp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#06C755] text-white px-5 py-2 rounded-lg hover:bg-[#05a546] transition shadow-lg font-bold"
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