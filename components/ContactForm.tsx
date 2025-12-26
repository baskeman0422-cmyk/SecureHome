
import React, { useEffect } from 'react';

interface ContactFormProps {
  onPrivacyClick?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onPrivacyClick }) => {
  useEffect(() => {
    // Tally embed script loading logic
    const scriptSrc = "https://tally.so/widgets/embed.js";
    
    const loadTally = () => {
      // @ts-ignore
      if (typeof Tally !== 'undefined') {
        // @ts-ignore
        Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((el) => {
          const iframe = el as HTMLIFrameElement;
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
      }
    };

    if (document.querySelector(`script[src="${scriptSrc}"]`) === null) {
      const s = document.createElement("script");
      s.src = scriptSrc;
      s.onload = loadTally;
      s.onerror = loadTally;
      document.body.appendChild(s);
    } else {
      loadTally();
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200" id="contact-form">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
            <span className="text-gray-600 font-bold tracking-widest text-sm bg-gray-200 px-3 py-1 rounded-full mb-3 inline-block">CONTACT</span>
            <h2 className="text-3xl font-black text-gray-900">お問い合わせ</h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
                お見積もりのご相談やご質問など、<br className="md:hidden" />お気軽にお問い合わせください。
            </p>
        </div>

        <div className="bg-white p-1 md:p-4 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <iframe 
            data-tally-src="https://tally.so/embed/obDvXP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" 
            loading="lazy" 
            width="100%" 
            height="832" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="問い合わせフォーム"
            className="w-full"
          ></iframe>
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
                ※入力された情報は<button type="button" onClick={onPrivacyClick} className="underline hover:text-gray-600">プライバシーポリシー</button>に基づき適切に管理されます。
            </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
