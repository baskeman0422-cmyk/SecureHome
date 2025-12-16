import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white pt-24 md:pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors text-base font-bold"
        >
          <ArrowLeft className="w-5 h-5" />
          トップページに戻る
        </button>

        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center leading-snug">
          プライバシーポリシー<br/>
          <span className="text-lg md:text-xl font-bold text-gray-600">（個人情報保護方針）</span>
        </h1>

        <div className="text-base md:text-lg text-gray-700 leading-relaxed mb-12 text-center md:text-left">
            <p>
                株式会社セキュアホーム（以下「当社」と記載）は、お客様の個人情報の重要性を深く認識し、その保護に取り組むことが重要な責務であると考えています。当社は、以下の通り個人情報保護方針を定め、全社を挙げて個人情報の適切な取り扱いと保護を推進いたします。
            </p>
        </div>

        <div className="space-y-12 text-base md:text-lg text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4">
              1. 個人情報の取得について
            </h2>
            <p className="text-gray-600">
                当社は、適法かつ公正な手段によって、お客様の個人情報を取得いたします。お客様からのお問い合わせ、工事のお申し込み、現地調査、アフターサービス等の機会を通じて、必要な範囲で個人情報をご提供いただきます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4">
              2. 個人情報の利用目的
            </h2>
            <p className="text-gray-600 mb-4">当社が取得した個人情報は、以下の目的の範囲内で利用いたします。</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                <li><span className="font-bold text-gray-800">工事・サービスの提供:</span> エコキュート設置、外壁塗装、リフォーム工事等の施工、およびそれに伴うご連絡、資材の配送、現場管理のため。</li>
                <li><span className="font-bold text-gray-800">アフターサポート:</span> 施工後の定期点検、メンテナンス、修理対応、メーカー保証の申請手続きのため。</li>
                <li><span className="font-bold text-gray-800">お問い合わせ対応:</span> 当社サービスに関するご質問、ご相談、お見積り依頼への回答のため。</li>
                <li><span className="font-bold text-gray-800">サービス向上のため:</span> 当社のサービス改善を目的としたアンケート等の実施のため。</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <span className="font-bold text-gray-800 block mb-1">※営業活動に関する方針</span>
                <p className="text-sm text-gray-600">
                    当社は、お客様の不安を煽るような強引な営業や、目的外の不当な勧誘のために個人情報を利用することは一切ございません。
                </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4">
              3. 個人情報の管理
            </h2>
            <p className="text-gray-600">
                当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4">
              4. 個人情報の第三者への提供
            </h2>
            <p className="text-gray-600 mb-4">当社は、次の場合を除き、お客様の個人情報を第三者に開示・提供いたしません。</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
                <li>お客様の同意がある場合</li>
                <li>
                    <span className="font-bold text-gray-800">業務委託に伴う提供</span><br/>
                    施工や配送、保証登録など、利用目的の達成に必要な範囲内で、協力会社やメーカー等に業務を委託する場合。（この場合、委託先に対して適切な監督を行います）<br/>
                    <span className="text-sm text-gray-500 block mt-1">例：エコキュートの機器保証登録のために、メーカーへお客様情報（設置場所・氏名等）を登録する場合など</span>
                </li>
                <li>法令に基づき開示が必要な場合</li>
                <li>人の生命、身体または財産の保護のために必要があり、本人の同意を得ることが困難である場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4">
              5. 個人情報の開示・訂正・利用停止等
            </h2>
            <p className="text-gray-600">
                お客様がご本人の個人情報の開示・訂正・追加・削除・利用停止等をご希望される場合には、ご本人であることを確認の上、法令に従い速やかに対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4">
              6. クッキー（Cookie）について
            </h2>
            <p className="text-gray-600">
                当社のWebサイトでは、お客様により良いサービスを提供するためにクッキーを使用することがありますが、これにより個人を特定できる情報の収集を行うものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4">
              7. 法令・規範の遵守と見直し
            </h2>
            <p className="text-gray-600">
                当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4">
              8. お問い合わせ窓口
            </h2>
            <p className="text-gray-600 mb-4">当社の個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。</p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="font-bold text-lg text-gray-900 mb-2">株式会社セキュアホーム</p>
                <div className="space-y-1 text-sm text-gray-600">
                    <p>〒160-0022 東京都新宿区新宿2-8-1 新宿セブンビル205号</p>
                    <p>運営責任者：鈴木</p>
                    <p className="mt-2 flex items-center gap-2">
                        <span className="font-bold">電話番号：</span>
                        <a href="tel:0433822106" className="text-blue-600 hover:underline">043-382-2106</a>
                    </p>
                </div>
            </div>
          </section>

        </div>
        
        <div className="mt-16 text-center">
            <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
            >
            <ArrowLeft className="w-4 h-4" />
            トップページに戻る
            </button>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;