
import React from 'react';
import { Camera, Send, FileCheck, MessageSquare } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Step: React.FC<{ number: string; icon: React.ReactNode; title: string; desc: string; isLast?: boolean; index: number }> = ({ number, icon, title, desc, isLast, index }) => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.5 });
    
  return (
    <div 
        ref={elementRef}
        className={`relative flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex-1 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
        style={{ transitionDelay: `${index * 200}ms` }}
    >
        {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gray-200 z-0 transform -translate-y-1/2"></div>
        )}
        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-4 relative z-10 transform transition hover:scale-110 duration-300">
        {icon}
        <span className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center text-sm font-black border-2 border-white shadow">
            {number}
        </span>
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-base text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

const Flow: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-white overflow-hidden relative" id="flow">
       <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 max-w-4xl mx-auto">
            
            <div className="w-full md:w-auto md:flex-shrink-0 text-center md:text-left flex flex-col items-center md:items-start max-w-md">
                <span className="text-red-600 font-bold tracking-widest text-sm bg-red-50 px-3 py-1 rounded-full mb-3 inline-block">EASY STEPS</span>
                <h2 className="text-3xl font-black text-gray-900 mt-4">無料診断の流れ</h2>
                <p className="text-gray-600 mt-4 font-medium text-lg">
                    面倒な入力は一切不要。<br/>
                    スマホで写真を撮って LINEで送るだけ。<br/>
                    <span className="text-red-600 font-bold">最短5分</span>でプロが回答します。
                </p>
                
                <div className="mt-8 relative mx-auto md:mx-0 w-full max-w-[280px]">
                    <div className="relative rounded-[2.5rem] border-[10px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl aspect-[9/15] h-auto flex flex-col">
                        <div className="h-6 bg-gray-900 w-full flex justify-end px-4 items-center gap-1.5 z-20 relative flex-shrink-0">
                             <div className="w-4 h-4 rounded-full border border-gray-600 opacity-50"></div>
                             <div className="w-3 h-3 rounded-full bg-gray-600 opacity-50"></div>
                        </div>
                        <div className="bg-[#1e2329] p-3 text-white text-[10px] flex items-center justify-center relative shadow-md z-10 border-b border-gray-800 flex-shrink-0">
                             <span className="font-bold">エコキュート適正価格協会</span>
                        </div>
                        
                        <div className="p-3 bg-[#7193c1] flex-1 flex flex-col gap-3 overflow-hidden pb-4 pt-4">
                             
                             <div className="self-start max-w-[85%] animate-fade-in-up delay-100">
                                <div className="bg-white p-2.5 rounded-2xl rounded-tl-none shadow-sm relative">
                                    <p className="text-xs text-gray-800 leading-snug">見積もりの写真送ります。</p>
                                </div>
                             </div>

                             <div className="self-start max-w-[75%] animate-fade-in-up delay-200">
                                <div className="bg-transparent">
                                    <img 
                                        src="https://storage.googleapis.com/blog-storage-secure-home/images/ASIS.png" 
                                        className="rounded-xl border-2 border-white/50 w-32 h-auto object-cover shadow-sm" 
                                        alt="Sent document"
                                    />
                                </div>
                             </div>

                             <div className="self-end max-w-[85%] mt-1 animate-fade-in-up delay-300">
                                <div className="bg-[#85e249] p-2.5 rounded-2xl rounded-tr-none shadow-sm text-xs leading-relaxed text-black relative text-left">
                                     <p className="mb-0.5 font-bold">診断結果:</p>
                                     <p className="leading-tight">拝見しました。相場より<br/><span className="font-bold text-red-600 bg-white/50 px-1 rounded inline-block my-0.5">30万円ほど高い</span><br/>可能性があります。</p>
                                     <span className="absolute -left-6 bottom-0 text-[8px] text-white opacity-80">既読<br/>10:05</span>
                                </div>
                             </div>

                        </div>
                        
                        <div className="absolute bottom-6 right-4 bg-red-600 text-white p-3 rounded-full shadow-[0_10px_20px_rgba(220,38,38,0.4)] animate-bounce border-2 border-white z-20 scale-90">
                            <span className="text-xs font-black whitespace-nowrap">簡単送信！</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:flex-1 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Step 
                    number="01" 
                    icon={<Camera className="w-7 h-7" />} 
                    title="見積書を撮影" 
                    desc="訪問販売で提示された見積書をスマホで撮影してください。" 
                    index={0}
                />
                <Step 
                    number="02" 
                    icon={<Send className="w-7 h-7" />} 
                    title="LINEで送信" 
                    desc="公式LINEに写真を送信。「これ高い？」の一言だけでOK。" 
                    index={1}
                />
                <Step 
                    number="03" 
                    icon={<FileCheck className="w-7 h-7" />} 
                    title="診断結果が届く" 
                    desc="プロが適正価格を診断。「本来の相場」をご返信します。" 
                    index={2}
                />
                <Step 
                    number="04" 
                    icon={<MessageSquare className="w-7 h-7" />} 
                    title="比較・検討" 
                    desc="結果を見て、断るか弊社に依頼するかご自由にご判断ください。" 
                    isLast
                    index={3}
                />
                </div>
                
                <div className="mt-12 text-center md:text-right">
                    <a 
                      href="https://lin.ee/CQ8BlDp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto bg-[#06C755] hover:bg-[#05b54c] text-white text-xl font-bold px-12 py-5 rounded-full shadow-xl shadow-green-200 active:scale-95 transition-all animate-bounce-slow ring-4 ring-green-100 inline-flex items-center justify-center gap-2 mx-auto md:mx-0"
                    >
                        <Send className="w-6 h-6" />
                        まずはLINEで無料診断する
                    </a>
                </div>
            </div>

        </div>
       </div>
    </section>
  );
};

export default Flow;
