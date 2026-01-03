
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle, Send, Check } from 'lucide-react';

interface ThanksProps {
  onBack: () => void;
}

const Thanks: React.FC<ThanksProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white pt-32 md:pt-40 pb-24 min-h-screen flex flex-col items-center overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-60 -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        
        {/* Main Success Area - Enhanced border thickness and color presence */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block w-full bg-white rounded-[3rem] p-8 md:p-12 border-[6px] md:border-[10px] border-[#4CAF50] shadow-2xl">
            {/* Success Icon - Removed background gradient/glow */}
            <div className="mb-8 flex justify-center">
              <CheckCircle className="w-24 h-24 md:w-32 md:h-32 text-[#4CAF50]" />
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              送信を<span className="text-[#4CAF50]">受け付けました</span>
            </h1>
            
            <div className="text-gray-800 text-lg md:text-2xl font-bold space-y-4 leading-relaxed max-w-lg mx-auto">
              <p>お問い合わせありがとうございます。</p>
              <p className="text-gray-600 font-medium text-base md:text-xl">
                内容を確認の上、担当者より改めてご連絡させていただきます。
              </p>
            </div>
          </div>
        </div>

        {/* LINE Conversion Card */}
        <div className="relative animate-fade-in-up delay-200">
          <div className="relative bg-white rounded-[2rem] border-2 border-gray-100 shadow-sm overflow-hidden">
            
            {/* Card Header - Simple Gray Border Style */}
            <div className="bg-gray-50/50 px-6 py-8 md:p-10 text-center border-b-2 border-gray-100">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                お急ぎの方は<br className="md:hidden"/>
                <span className="bg-[#06C755] text-white px-2 py-0.5 mx-1 inline-block rounded-sm">公式LINE</span>も便利です！
              </h2>
            </div>

            {/* Card Content */}
            <div className="p-8 md:p-10">
              <ul className="grid grid-cols-1 gap-5 mb-10">
                <li className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#06C755] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-5 h-5" strokeWidth={4} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 text-lg md:text-xl font-black leading-none mb-1 text-left">診断結果をいち早くお届け</span>
                    <span className="text-gray-500 text-sm text-left">メールより早く、スムーズに回答が届きます。</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#06C755] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-5 h-5" strokeWidth={4} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 text-lg md:text-xl font-black leading-none mb-1 text-left">LINE限定の特典・情報</span>
                    <span className="text-gray-500 text-sm text-left">補助金情報やキャンペーンのご案内を先行配信。</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#06C755] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-5 h-5" strokeWidth={4} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 text-lg md:text-xl font-black leading-none mb-1 text-left">チャットで気軽に相談OK</span>
                    <span className="text-gray-500 text-sm text-left">プロの診断士と直接トークが可能です。</span>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col gap-6">
                <a 
                  href="https://lin.ee/CQ8BlDp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-4 bg-[#06C755] text-white px-8 py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-[#05b54c] transition-all active:scale-95 shadow-lg overflow-hidden"
                >
                  <Send className="w-7 h-7" />
                  LINEで無料診断する
                </a>
                
                {/* Back to Home - Black background with white text for high visibility */}
                <button 
                  onClick={onBack}
                  className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-5 rounded-2xl font-bold transition-all text-base md:text-lg hover:bg-black shadow-md active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5" />
                  トップページに戻る
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Thanks;
