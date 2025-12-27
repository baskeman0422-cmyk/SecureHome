
import React from 'react';
import { Search, FileWarning, ArrowRight, AlertCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSelection = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('selection-area');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-24 md:pt-32 md:pb-48 overflow-hidden bg-white min-h-[850px]">
      {/* Background Elements Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="max-w-4xl mx-auto h-full relative">
              
              {/* Person Images Background Split - Kept lower as requested */}
              <div className="absolute top-64 md:top-80 inset-x-0 h-[60vh] md:h-[80vh] flex">
                  {/* LEFT: AS-IS */}
                  <div className="w-1/2 h-full relative overflow-hidden">
                      <img 
                        src="https://storage.googleapis.com/blog-storage-secure-home/images/asis-background.png" 
                        alt="" 
                        className="w-full h-full object-cover object-top grayscale opacity-70 scale-[1.3] md:scale-[1.1] origin-top transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent"></div>
                      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                  </div>

                  {/* RIGHT: TO-BE */}
                  <div className="w-1/2 h-full relative overflow-hidden">
                      <img 
                        src="https://storage.googleapis.com/blog-storage-secure-home/images/tobe-background.png" 
                        alt="" 
                        className="w-full h-full object-cover object-top opacity-70 scale-[1.3] md:scale-[1.1] origin-top transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-white/60 via-white/20 to-transparent"></div>
                      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                  </div>
              </div>

              {/* Texture Layers */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-20"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] z-10"></div>
          </div>
          
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-white z-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-30 max-w-4xl">
        
        {/* HEADLINE SECTION */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24 mt-6 md:mt-10 max-w-4xl mx-auto">
            <h1 className="flex flex-col items-center animate-fade-in-up delay-100">
                <span className="text-[6.5vw] sm:text-4xl md:text-5xl font-black text-gray-900 leading-none tracking-tighter mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
                  悪質なエコキュートの
                </span>
                
                <span className="text-[11vw] sm:text-6xl md:text-7xl font-black leading-tight tracking-tighter block mt-2">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-yellow-300 px-3 py-1 text-black shadow-lg transform -rotate-1 inline-block mr-1">
                      訪問販売被害
                    </span>
                    <span className="absolute inset-0 bg-yellow-400 translate-x-1 translate-y-1 z-0 transform -rotate-1 rounded"></span>
                  </span>
                  <span 
                    className="block mt-2 text-[#DC2627] font-black drop-shadow-[0_4px_12px_rgba(220,38,39,0.35)]"
                  >
                    が<span className="underline decoration-red-200 decoration-[10px] underline-offset-4">急増中</span>です。
                  </span>
                </span>
            </h1>

            <div className="mt-10 animate-fade-in-up delay-200 relative">
              <div className="absolute inset-0 bg-white/40 blur-2xl rounded-full scale-150"></div>
              <p className="relative z-10 text-2xl md:text-4xl font-black text-gray-800 leading-tight">
                <span className="text-[#DC2627] bg-white/90 px-2 py-1">弊社では適正価格</span>を迅速にお伝えします。
              </p>
              
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm md:text-base font-black transform rotate-1 shadow-xl ring-2 ring-white">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full animate-ping"></span>
                  最短1分で診断完了
                </span>
              </div>
            </div>
        </div>

        {/* COMPARISON ESTIMATES BLOCK - Corrected Image URLs to Uppercase */}
        <div className="animate-fade-in-up delay-300 mt-24 md:mt-48 mb-14 md:mb-64 relative z-40 max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-4 sm:gap-20 lg:gap-32 px-1">
                
                {/* Bad Case Estimate */}
                <div className="w-[45%] md:w-[35%] relative flex flex-col items-center transform -rotate-3 transition-all duration-500">
                    <div className="mb-4 z-20">
                        <span className="bg-gray-800 text-white text-[15px] md:text-xl font-black px-4 py-1.5 rounded shadow-lg border border-white/20 whitespace-nowrap">
                          悪質な訪問販売
                        </span>
                    </div>

                    <div className="w-full aspect-[3/4] bg-white p-1 rounded shadow-2xl border border-gray-200 relative overflow-hidden ring-1 ring-black/5">
                        <div className="relative w-full h-full overflow-hidden bg-gray-50 rounded">
                            <img src="https://storage.googleapis.com/blog-storage-secure-home/images/ASIS.png" alt="他社見積もり" className="w-full h-full object-cover opacity-90" />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-black font-black text-3xl md:text-6xl border-4 md:border-8 border-black p-1 md:p-2 opacity-30 rotate-12">NG</span>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full bg-white/95 text-center py-1 md:py-2 border-b border-gray-200 shadow-md z-20">
                            <span className="text-gray-800 text-[2.1rem] md:text-[3.5rem] font-black">90<span className="text-xs md:text-base">万円</span></span>
                        </div>
                    </div>
                </div>

                {/* Good Case Estimate */}
                <div className="w-[48%] md:w-[40%] relative flex flex-col items-center transform rotate-2 z-10 transition-all duration-500 hover:scale-105">
                    <div className="mb-4 z-20">
                        <span className="bg-red-600 text-white text-[17px] md:text-[1.8rem] font-black px-5 py-2.5 rounded-full shadow-2xl flex items-center justify-center gap-1.5 ring-4 ring-white relative animate-soft-float whitespace-nowrap">
                            <span className="w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping"></span>
                            弊社
                        </span>
                    </div>

                    <div className="w-full aspect-[3/4] bg-white p-1 md:p-1.5 rounded shadow-[0_20px_60px_rgba(220,38,38,0.4)] border-2 border-red-500 relative overflow-hidden">
                        <div className="relative w-full h-full overflow-hidden rounded bg-red-50">
                            <img src="https://storage.googleapis.com/blog-storage-secure-home/images/TOBE.jpg" alt="弊社見積もり" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-0 left-0 w-full bg-red-600 text-center py-1 md:py-2 shadow-xl z-20 border-b-2 border-red-700/30">
                            <span className="text-white text-[2.6rem] md:text-[4.2rem] font-black leading-none drop-shadow-lg">50<span className="text-sm md:text-xl">万円~</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Content Area (Lower half) */}
        <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-12 pt-12 md:pt-0 max-w-4xl mx-auto">
          
          <div className="w-full md:w-3/5 space-y-4 relative">
            
            <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-l-[12px] border-red-600 shadow-2xl animate-fade-in-up delay-400 relative z-10">
              <p className="text-xl md:text-2xl text-gray-800 font-black leading-snug">
                そのエコキュート、<br className="md:hidden"/>
                <span className="text-gray-500 text-lg md:text-xl font-bold block mb-2">適正価格と比較して...</span>
                <span className="relative inline-block mr-2">
                   <span className="absolute inset-0 bg-yellow-300 transform -skew-x-12 opacity-80"></span>
                   <span className="relative z-10 text-[#DC2627] text-5xl md:text-6xl font-black tracking-tighter">
                      30万円以上
                   </span>
                </span>
                <span className="font-black border-b-8 border-red-100 pb-1">高い可能性があります。</span>
              </p>
            </div>

            <div className="space-y-6 pt-8 animate-fade-in-up delay-500 relative z-10">
              <a 
                href="#selection-area" 
                onClick={scrollToSelection}
                className="relative w-full md:w-auto flex items-center justify-center gap-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg font-bold px-10 py-7 rounded-3xl shadow-[0_20px_40px_-10px_rgba(220,38,38,0.4)] transform transition-all hover:scale-[1.03] active:scale-95 group overflow-hidden ring-8 ring-red-50"
              >
                <div className="absolute top-0 -left-full w-1/2 h-full bg-white/25 skew-x-[-20deg] animate-shine"></div>
                
                <div className="bg-white/20 p-2.5 rounded-2xl shadow-inner group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-left leading-tight relative z-10">
                  <span className="text-2xl md:text-4xl drop-shadow-xl font-black tracking-tight">適正価格を今すぐチェック</span>
                </div>
                
                <ArrowRight className="w-8 h-8 opacity-80 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 animate-fade-in-up delay-600 perspective-[1000px] mt-12 md:mt-0">
             <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_30px_70px_-20px_rgba(0,0,0,0.15)] border-2 border-red-100 relative transition-transform duration-500 group">
                
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-50 rounded-full blur-3xl opacity-60"></div>

                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 to-black text-white px-6 md:px-8 py-4 rounded-2xl font-black text-2xl md:text-xl lg:text-2xl shadow-2xl z-20 flex items-center justify-center gap-3 ring-4 ring-white animate-pulse w-max max-w-full whitespace-nowrap">
                   <FileWarning className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                   <span className="leading-none pb-0.5 tracking-tight">こんな営業トークに注意</span>
                </div>

                <ul className="space-y-5 mt-8 relative z-10">
                   <li className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-red-50 hover:border-red-200 transition-all">
                      <div className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md flex-shrink-0 mt-0.5 font-logo">
                        <span className="font-black text-sm">1</span>
                      </div>
                      <span className="font-black text-gray-800 text-lg leading-snug">
                        切り替える際の初期費用や工事費用は<span className="bg-yellow-300 px-1">無料</span>になる
                      </span>
                   </li>
                   <li className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-red-50 hover:border-red-200 transition-all">
                      <div className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md flex-shrink-0 mt-0.5 font-logo">
                        <span className="font-black text-sm">2</span>
                      </div>
                      <span className="font-black text-gray-800 text-lg leading-snug">
                        毎月の<span className="bg-yellow-300 px-1">光熱費が安くなる</span>
                      </span>
                   </li>
                   <li className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-red-50 hover:border-red-200 transition-all">
                      <div className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md flex-shrink-0 mt-0.5 font-logo">
                        <span className="font-black text-sm">3</span>
                      </div>
                      <span className="font-black text-gray-800 text-lg leading-snug">
                        <span className="bg-yellow-300 px-1">「給湯器が壊れる」</span>という常套句
                      </span>
                   </li>
                   <li className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-red-50 hover:border-red-200 transition-all">
                      <div className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md flex-shrink-0 mt-0.5 font-logo">
                        <span className="font-black text-sm">4</span>
                      </div>
                      <div className="font-black text-gray-800 text-lg leading-snug">
                        1回目2回目の訪問で契約を急かす(<span className="text-[#DC2627] underline">「今日だけの特別価格/数名限定の割引価格です」等</span>)
                      </div>
                   </li>
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
