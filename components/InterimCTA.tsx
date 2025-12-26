
import React from 'react';
import { Send, Mail, ArrowRight } from 'lucide-react';

const InterimCTA: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-gray-900 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-black text-white mb-8 leading-tight">
                    「この金額、本当に適正？」<br/>
                    <span className="text-yellow-400">少しでも迷ったら</span>、まずはご相談を。
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                    {/* LINE Button */}
                    <a 
                        href="https://lin.ee/CQ8BlDp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between bg-[#06C755] hover:bg-[#05b54c] text-white px-6 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] md:min-w-[320px]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <Send className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <span className="text-xs font-bold block opacity-90">最短5分・写真で診断</span>
                                <span className="text-xl font-black">LINEで無料診断</span>
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-50 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Email Button */}
                    <button 
                        onClick={scrollToContact}
                        className="group flex items-center justify-between bg-white hover:bg-gray-50 text-gray-900 px-6 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] md:min-w-[320px]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <span className="text-xl font-black">メールでお問い合わせ</span>
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                
                <p className="mt-6 text-sm text-gray-400">
                    ※しつこい営業や無理な勧誘は一切行いませんのでご安心ください。
                </p>
            </div>
        </div>
    </section>
  );
};

export default InterimCTA;
