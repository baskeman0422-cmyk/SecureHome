import React from 'react';
import { Send, AlertTriangle, FileWarning, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Rich Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-20"></div>
          
          {/* Animated Gradient Orbs - Base Colors (Red/Yellow/Gray) */}
          <div className="absolute top-[-20%] right-[-10%] w-[90%] h-[70%] bg-gradient-to-bl from-yellow-100/80 via-red-50/20 to-transparent rounded-full blur-[80px] animate-blob mix-blend-multiply z-0"></div>
          <div className="absolute bottom-[-10%] left-[-20%] w-[80%] h-[60%] bg-gradient-to-tr from-gray-100/60 via-yellow-50/40 to-transparent rounded-full blur-[60px] animate-blob animation-delay-2000 mix-blend-multiply z-0"></div>
          
          {/* Subtle Grid Pattern for Structure - Increased Opacity for Visibility */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:24px_24px] z-10"></div>
          
          {/* Radial mask to fade out grid edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        {/* Increased gap from gap-12 to gap-20 to provide more margin after the Trust Badges on mobile */}
        <div className="flex flex-col md:flex-row items-center gap-20 lg:gap-20">
          
          <div className="w-full md:w-3/5 space-y-8 relative">
            
            {/* Speech Bubble Warning (Pop Style) - Text Only - Centered */}
            <div className="animate-fade-in-up mt-8 relative z-20 text-center">
                <div className="relative inline-block filter drop-shadow-md hover:-translate-y-1 transition-transform duration-300 max-w-full">
                    {/* Bubble Body */}
                    <div className="relative bg-[#FFEB3B] border-4 border-black rounded-2xl px-6 py-4 flex items-center justify-center z-10 transform -rotate-1">
                        {/* Text Content - Added flex-wrap for mobile safety */}
                        <div className="text-black font-black text-lg md:text-xl leading-tight text-center flex flex-wrap items-center justify-center gap-x-1">
                            <span>その契約、</span>
                            <span className="text-red-600 font-black text-2xl md:text-3xl underline decoration-black decoration-4 decoration-wavy underline-offset-4">
                                ちょっと待った！
                            </span>
                        </div>
                    </div>

                    {/* Speech Bubble Tail */}
                    <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#FFEB3B] border-b-4 border-r-4 border-black transform rotate-45 z-20"></div>
                </div>
            </div>
            
            {/* Hero Heading - Centered */}
            {/* Updated font size for mobile: text-[3.2rem] for maximum impact. Highlight span updated to gradient to support wrapping. */}
            <h1 className="text-[3.2rem] md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight animate-fade-in-up delay-100 drop-shadow-sm relative z-10 text-center">
              今、訪問販売で<br/>
              <span className="inline bg-[linear-gradient(transparent_65%,#fde047_65%)] px-1 decoration-clone box-decoration-clone">
                契約しようとして
              </span>
              <br className="md:hidden"/>
              <span className="text-red-600">いませんか？</span>
            </h1>
            
            {/* Impact Statement */}
            <p className="text-lg md:text-xl text-gray-800 font-bold bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-l-8 border-red-600 shadow-xl animate-fade-in-up delay-200 leading-relaxed relative z-10">
              そのエコキュート、<br className="md:hidden"/>
              <span className="text-gray-600 text-sm font-bold block mb-2">適正価格と比較して...</span>
              <span className="relative inline-block mr-2">
                 <span className="absolute inset-0 bg-yellow-300 transform -skew-x-12 opacity-80"></span>
                 <span className="relative z-10 text-red-600 text-5xl md:text-6xl font-black tracking-tighter">
                    30万円以上
                 </span>
              </span>
              <span className="border-b-4 border-red-200 pb-1 font-black">高い可能性があります。</span>
            </p>

            {/* Call to Action Area */}
            <div className="space-y-6 pt-2 animate-fade-in-up delay-300 relative z-10">
              <p className="text-sm font-bold text-gray-600 leading-relaxed flex flex-wrap items-center gap-2">
                 <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs whitespace-nowrap border border-red-200">完全無料</span>
                 <span>契約書にサインする前に。プロが適正価格か診断します。</span>
              </p>
              
              <a href="https://lin.ee/CQ8BlDp" target="_blank" rel="noopener noreferrer" className="relative w-full md:w-auto flex items-center justify-center gap-4 bg-gradient-to-br from-[#06C755] to-[#05a546] hover:from-[#05b54c] hover:to-[#04913e] text-white text-lg font-bold px-8 py-5 rounded-2xl shadow-[0_10px_30px_-10px_rgba(6,199,85,0.6)] transform transition-all hover:scale-105 active:scale-95 group overflow-hidden ring-4 ring-green-100/50">
                {/* Shine Effect */}
                <div className="absolute top-0 -left-full w-1/2 h-full bg-white/30 skew-x-[-20deg] animate-shine"></div>
                
                <Send className="w-8 h-8 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform drop-shadow-md" />
                <div className="text-left leading-tight relative z-10">
                  <span className="text-[10px] font-black tracking-wider opacity-100 block mb-0.5 text-green-50 shadow-black drop-shadow-sm">最短5分・匿名OK</span>
                  <span className="text-xl md:text-2xl drop-shadow-md font-black">見積書をLINEで無料診断</span>
                </div>
                <ArrowRight className="w-6 h-6 opacity-80 group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Trust Badges - Centered on mobile, Left-aligned on Desktop */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs font-bold text-gray-500">
                <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"><span className="text-green-500">✔</span> 匿名OK</span>
                <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"><span className="text-green-500">✔</span> 写真はブレててもOK</span>
                <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"><span className="text-green-500">✔</span> 断り文句もアドバイス</span>
              </div>
            </div>
          </div>

          {/* Right Side Card (Updated Content) */}
          <div className="w-full md:w-2/5 animate-fade-in-up delay-500 perspective-[1000px]">
             {/* Use md:hover to prevent sticky hover states on mobile tapping */}
             <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border-2 border-red-100 relative transform md:hover:rotate-y-2 md:hover:rotate-x-2 transition-transform duration-500 group">
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>

                {/* Updated Warning Label:
                    - Mobile: text-2xl (larger), px-4 (tighter padding to fit), w-7 icon.
                    - Tablet: text-lg, px-5 (fits narrow col), w-6 icon.
                    - Desktop: text-2xl, px-8, w-8 icon.
                    - whitespace-nowrap: Ensures single line.
                */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-[#D32F2F] text-white px-4 md:px-5 lg:px-8 py-3 rounded-full font-black text-2xl md:text-lg lg:text-2xl shadow-xl z-20 flex items-center justify-center gap-2 md:gap-2 lg:gap-3 ring-4 ring-white animate-pulse w-max max-w-full whitespace-nowrap">
                   <FileWarning className="w-7 h-7 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0" />
                   <span className="leading-none pb-0.5">こんな営業トークに注意</span>
                </div>

                <ul className="space-y-4 mt-6 relative z-10">
                   <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-yellow-50 transition-colors">
                      <div className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md flex-shrink-0 mt-0.5">
                        <span className="font-bold text-xs">01</span>
                      </div>
                      <span className="font-bold text-gray-800 text-sm leading-snug">
                        「光熱費で元が取れるから<span className="bg-yellow-300 px-1">実質0円</span>になります」
                      </span>
                   </li>
                   <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-yellow-50 transition-colors">
                      <div className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md flex-shrink-0 mt-0.5">
                        <span className="font-bold text-xs">02</span>
                      </div>
                      <span className="font-bold text-gray-800 text-sm leading-snug">
                        「メーカーの代理店を名乗る急な訪問<br/><span className="text-xs text-gray-600 font-normal">(TOSHIBAの代理店です。集中工事のご案内で参りました)</span>」
                      </span>
                   </li>
                   <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-yellow-50 transition-colors">
                      <div className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md flex-shrink-0 mt-0.5">
                        <span className="font-bold text-xs">03</span>
                      </div>
                      <span className="font-bold text-gray-800 text-sm leading-snug">
                        「<span className="bg-yellow-300 px-1">今日だけの特別価格</span>/<br/>数名限定の割引価格です」
                      </span>
                   </li>
                   <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-yellow-50 transition-colors">
                      <div className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md flex-shrink-0 mt-0.5">
                        <span className="font-bold text-xs">04</span>
                      </div>
                      <span className="font-bold text-gray-800 text-sm leading-snug">
                        「スマートハウスのご案内で参りました」という急な訪問からエコキュートの営業
                      </span>
                   </li>
                </ul>
                <div className="mt-6 text-center pt-4 border-t-2 border-dashed border-gray-200">
                   <p className="text-sm font-black text-red-600 flex items-center justify-center gap-2">
                     <AlertTriangle className="w-5 h-5 fill-yellow-400 text-red-600" />
                     これらは悪質な訪問販売のサインです
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;