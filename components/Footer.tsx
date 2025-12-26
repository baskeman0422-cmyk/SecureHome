import React from 'react';
import { MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onLegalClick?: () => void;
  onPrivacyClick?: () => void;
  onHomeClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick, onPrivacyClick, onHomeClick }) => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 pt-16 pb-24 md:pb-12 border-t border-gray-800 font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">

          {/* Company Brand */}
          <div className="space-y-6 md:w-1/3">
             <div className="flex flex-col gap-1">
                 <button onClick={onHomeClick} className="flex items-center gap-3 text-left group transition-transform active:scale-95 duration-200">
                    {/* Logo Image */}
                    <img 
                      src="https://storage.googleapis.com/blog-storage-secure-home/images/icon.png" 
                      alt="Logo" 
                      className="h-8 w-8 object-contain flex-shrink-0"
                    />
                    <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-gray-100 transition-colors">エコキュート適正価格協会</span>
                  </button>
                  {/* Increased text size from xs to sm */}
                  <p className="text-sm text-gray-500 pl-11">運営：セキュアホーム</p>
              </div>
              {/* Increased text size */}
              <p className="text-gray-400 text-base leading-relaxed">
                訪問販売による高額被害を未然に防ぎ、エコキュートの適正価格での普及を目指しています。お客様に寄り添った「透明な価格」をご提案します。
              </p>
              <div className="inline-flex items-center gap-3 bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700/50">
                 <ShieldCheck className="w-5 h-5 text-gray-400" />
                 <div className="flex flex-col">
                    {/* Increased text size from xs to sm */}
                    <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">License</span>
                    {/* Increased text size */}
                    <span className="text-sm md:text-base text-gray-300 font-medium">
                        登録電気工事業者 千葉県知事登録 第77731号
                    </span>
                 </div>
              </div>
          </div>

          {/* Locations & Contact */}
          <div className="md:w-1/2 flex flex-col md:flex-row gap-10">
            <div className="flex-1">
                <h4 className="font-bold text-sm text-white mb-6 uppercase tracking-wider opacity-80">
                    Office
                </h4>
                <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                            <MapPin className="w-4 h-4 text-gray-400" />
                        </div>
                        <div>
                            {/* Increased text size from xs to sm */}
                            <span className="text-sm font-bold text-gray-500 block mb-0.5">本店</span>
                            {/* Increased text size */}
                            <p className="text-base text-gray-300 leading-relaxed">
                                〒160-0022<br/>
                                東京都新宿区新宿2-8-1<br/>
                                新宿セブンビル205号
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                            <MapPin className="w-4 h-4 text-gray-400" />
                        </div>
                        <div>
                            {/* Increased text size from xs to sm */}
                            <span className="text-sm font-bold text-gray-500 block mb-0.5">千葉支店</span>
                            {/* Increased text size */}
                            <p className="text-base text-gray-300 leading-relaxed">
                                〒261-0023<br/>
                                千葉県千葉市美浜区中瀬1-6<br/>
                                BAY POINT幕張 2階
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex gap-6">
                <button onClick={onLegalClick} className="hover:text-white transition-all duration-200 active:scale-95 inline-block">特定商取引法に基づく表記</button>
                <button onClick={onPrivacyClick} className="hover:text-white transition-all duration-200 active:scale-95 inline-block">プライバシーポリシー</button>
            </div>
            <div className="font-medium opacity-60">
                 &copy; {new Date().getFullYear()} EcoCute Fair Price Association / Secure Home Co., Ltd.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;