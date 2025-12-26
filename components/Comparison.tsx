import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CheckCircle, ShieldCheck, ArrowRight, ZoomIn, X } from 'lucide-react';

const Comparison: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <section className="pt-8 pb-24 bg-white" ref={elementRef} id="comparison">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Title Section */}
        <div className={`relative z-20 text-center mb-6 md:mb-[-3.5rem] transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <h2 className="text-[1.82rem] sm:text-2xl md:text-3xl font-black text-gray-900 leading-snug drop-shadow-sm px-2" style={{ textWrap: 'balance' }}>
                <span className="inline-block">同じ商品でも、</span>
                <span className="inline-block relative mx-2">
                     <span className="absolute inset-x-0 bottom-2 h-4 bg-yellow-300 -z-10"></span>
                    <span className="text-4xl md:text-5xl text-red-600">30万円</span>
                </span>
                <span className="inline-block">も差が出ることがあります</span>
            </h2>
            <p className="mt-4 font-bold inline-block px-4 py-1 text-gray-700 bg-transparent relative top-2 text-[1.45rem] md:text-lg">
                その差額の正体は…？
            </p>
        </div>

        {/* Chart Section */}
        <div className="relative z-10 bg-gray-50 rounded-t-3xl rounded-b-[3rem] p-6 md:p-12 pt-8 md:pt-24 overflow-visible shadow-inner pb-32 md:pb-48 border-t border-gray-200 max-w-4xl mx-auto">
            
            <div className="relative flex flex-row gap-4 md:gap-16 items-end justify-center h-auto min-h-[400px]">
                
                {/* Reference Line */}
                <div className={`absolute left-0 right-0 bottom-36 md:bottom-48 z-0 pointer-events-none transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                     <div className="border-t-4 border-dashed border-red-300 w-full relative opacity-60">
                     </div>
                </div>

                {/* High Price Bar */}
                <div className="flex-1 max-w-[180px] flex flex-col items-center group relative z-10">
                    <div className="text-center mb-16 h-16 flex flex-col justify-end">
                        <span className="font-black text-gray-800 block text-base md:text-lg whitespace-nowrap bg-gray-200 px-2 py-1 rounded">訪問販売業者</span>
                        <span className="text-sm md:text-sm text-gray-600 block leading-tight mt-1 font-bold">（高額な手数料込み）</span>
                    </div>
                    
                    <div className="relative w-full h-72 md:h-96 flex items-end justify-center">
                        <div 
                        className={`w-full flex flex-col rounded-t-xl overflow-hidden absolute bottom-0 shadow-2xl bar-growth ${isVisible ? 'is-active' : ''}`} 
                        style={{ height: '100%' }}
                        >
                            <div className="h-1/2 bg-[#4a4a4a] w-full relative border-b-2 border-dashed border-gray-500 flex flex-col items-center justify-center p-2">
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(135deg, #000 10%, transparent 10%, transparent 50%, #000 50%, #000 60%, transparent 60%, transparent 100%)', backgroundSize: '20px 20px' }}></div>
                                
                                <div className="relative z-10 flex flex-col items-center">
                                    <span className="bg-red-600 text-white font-black px-2 py-0.5 rounded text-xs md:text-xs mb-1 shadow-sm whitespace-nowrap animate-pulse">
                                        ここが上乗せ！
                                    </span>
                                    <span className="text-gray-100 font-bold text-base md:text-base text-center leading-tight">
                                        営業マンの<br/>歩合給
                                    </span>
                                    <span className="text-gray-400 text-xs mt-1">(中間マージン)</span>
                                </div>
                            </div>

                            <div className="h-1/2 bg-[#757575] w-full flex flex-col items-center justify-center relative border-t border-white/10">
                                <span className="text-gray-200 text-sm md:text-sm font-bold text-center leading-tight">
                                    本来の<br/>適正価格分
                                </span>
                            </div>
                        </div>
                        
                        {/* Total Price Bubble */}
                        <div className={`absolute -top-14 left-1/2 transform -translate-x-1/2 w-[140%] z-20 flex flex-col items-center justify-center transition-opacity duration-500 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                             <div className="relative bg-white border-4 border-gray-800 text-gray-900 px-4 py-2 rounded-full shadow-xl mb-1 flex items-baseline justify-center">
                                <span className="absolute inset-0 bg-yellow-300 rounded-full opacity-50 transform translate-y-1 translate-x-1 -z-10"></span>
                                <span className="text-4xl md:text-6xl font-black tracking-tighter">90</span>
                                <span className="text-sm md:text-lg font-bold ml-1">万円</span>
                             </div>
                             <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-gray-800"></div>
                        </div>
                    </div>
                </div>

                <div className={`hidden md:flex pb-20 items-center justify-center text-gray-400 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <ArrowRight className="w-8 h-8" />
                </div>

                {/* Secure Home Bar */}
                <div className="flex-1 max-w-[180px] flex flex-col items-center group relative z-10">
                    <div className="text-center mb-20 h-16 flex flex-col justify-end relative z-10">
                        <span className="font-bold text-red-600 text-lg md:text-2xl block whitespace-nowrap transform scale-110">弊社</span>
                        <span className="text-sm text-red-500 font-bold block leading-tight mt-1">（Web直販価格）</span>
                    </div>
                    
                    <div className="relative w-full h-36 md:h-48 flex items-end justify-center">
                        <div 
                        className={`w-full bg-gradient-to-b from-red-500 to-red-600 rounded-t-xl absolute bottom-0 shadow-2xl border-4 border-yellow-400 bar-growth ${isVisible ? 'is-active' : ''}`} 
                        style={{ height: '100%', transitionDelay: '0.2s' }}
                        >
                            <div className="h-full flex flex-col items-center justify-end pb-3 md:pb-5 text-white">
                                <span className="font-bold text-sm md:text-lg drop-shadow-md opacity-90">適正価格</span>
                            </div>
                        </div>

                        {/* Pop-out Label */}
                        <div className={`absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                             <div className="bg-yellow-400 text-yellow-900 font-black px-4 py-2 rounded-full shadow-xl text-sm whitespace-nowrap animate-bounce border-2 border-white flex items-center gap-1">
                                <CheckCircle className="w-4 h-4" />
                                余計なコスト0円
                            </div>
                            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-yellow-400 mx-auto"></div>
                        </div>

                         {/* Price Bubble */}
                         <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center transition-opacity duration-500 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} w-full`}>
                            <div className="relative inline-block">
                                <span className="relative z-10 text-5xl md:text-7xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-tighter">60</span>
                            </div>
                            <span className="text-lg md:text-2xl text-white font-bold drop-shadow-md">万円</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mt-8 md:mt-10 text-center transition-opacity duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-sm md:text-base text-gray-500 bg-white inline-block px-4 py-2 rounded-full border border-gray-200 shadow-sm leading-relaxed text-left md:text-center">
                    ※価格差のイメージです。訪問販売業者の価格構造には「人件費」や「広告費」が大きく上乗せされています。
                </p>
            </div>
        </div>

        {/* Real Photo Section */}
        <div className={`relative z-20 -mt-12 md:-mt-20 px-4 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-30">
                <div className="w-8 h-8 bg-white transform rotate-45 shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.05)] rounded-sm"></div>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] p-6 md:p-8 relative overflow-hidden group border border-gray-100 max-w-4xl mx-auto">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-full opacity-50 blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-50 to-gray-200 rounded-full opacity-50 blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-2/5 text-center md:text-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-bold tracking-wider uppercase mb-1">
                            <ShieldCheck className="w-3 h-3 text-red-600" />
                            Evidence
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-snug">
                            <span className="inline-block relative">
                                論より証拠。
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-10 opacity-70"></span>
                            </span><br/>
                            実際の見積書をご覧ください
                        </h3>
                        <p className="text-gray-600 font-medium leading-relaxed text-base md:text-lg">
                            こちらは実際に他社と弊社で相見積もりを取られた際のお客様の資料です。<br/><br/>
                            <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded inline-block">商品・工事内容はほぼ同じ</span>
                            <br className="hidden md:block"/>でも、中間マージンの有無だけでこれだけの差が生まれます。
                        </p>
                    </div>

                    <div className="w-full md:w-3/5 perspective-[1000px]">
                        <div 
                            className="relative transform transition-all duration-700 hover:scale-[1.02] cursor-zoom-in"
                            onClick={openModal}
                        >
                            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-2 relative overflow-hidden group-hover:shadow-3xl transition-shadow group-image">
                                <img 
                                    src="https://storage.googleapis.com/blog-storage-secure-home/images/comparison_image.png" 
                                    alt="見積書比較" 
                                    className="w-full h-auto rounded-lg filter contrast-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-700"></div>
                            </div>
                            
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                                    <ZoomIn className="w-4 h-4" />
                                    <span>タップで拡大</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-10 left-10 right-10 h-10 bg-black/20 blur-3xl rounded-[100%] z-[-1]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>

    {/* Full Screen Image Modal */}
    {isModalOpen && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300 animate-fade-in-up"
            onClick={closeModal}
        >
            <button 
                onClick={closeModal} 
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2 z-[110]"
            >
                <X className="w-8 h-8" />
            </button>
            <div 
                className="relative w-full h-full flex items-center justify-center" 
                onClick={(e) => e.stopPropagation()}
            >
                <img 
                    src="https://storage.googleapis.com/blog-storage-secure-home/images/comparison_image.png" 
                    alt="見積書比較 拡大" 
                    className="max-w-full max-h-full object-contain rounded shadow-2xl"
                />
            </div>
        </div>
    )}
    </>
  );
};

export default Comparison;