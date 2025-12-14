import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalProps {
  onBack: () => void;
}

const Legal: React.FC<LegalProps> = ({ onBack }) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white pt-24 md:pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-all duration-200 active:scale-95 text-sm font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          トップページに戻る
        </button>

        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-12 text-center">
          特定商取引法に基づく表記
        </h1>

        <div className="space-y-12 text-sm md:text-base text-gray-700 leading-relaxed">
          
          {/* Section 1: Business Info */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">
              1. 事業者情報
            </h2>
            <div>
              <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-bold text-gray-900">販売業者名</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">株式会社セキュアホーム</dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-bold text-gray-900">運営責任者</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">鈴木</dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-bold text-gray-900">所在地</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2 space-y-2">
                    <p><span className="font-bold text-gray-500 text-xs block">本店</span>〒160-0022 東京都新宿区新宿2-8-1 新宿セブンビル205号</p>
                    <p><span className="font-bold text-gray-500 text-xs block">千葉支店</span>〒261-0023 千葉県千葉市美浜区中瀬1-6 BAY POINT幕張 2階</p>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-bold text-gray-900">電話番号</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                    043-382-2106<br/>
                    <span className="text-gray-500 text-xs">（受付時間: 平日 9:00〜18:00）</span>
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Section 2: Price */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">
              2. 販売価格・費用について
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">販売価格</h3>
                <p>各商品ページまたはお見積書に記載</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">価格の透明性について</h3>
                <p className="leading-relaxed text-gray-600">
                  当社は、訪問販売による高額請求被害を未然に防ぐため、エコキュートをはじめとする住宅設備の「適正価格」での普及に努めています。
                  「なぜこの工事が必要なのか」「なぜこの価格なのか」を明確にご説明し、不当な上乗せや根拠のない大幅値引きといった不透明な価格提示は一切いたしません。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">商品代金以外の必要料金</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>消費税</li>
                  <li>振込手数料（銀行振込の場合）</li>
                  <li>遠方出張費（対応エリア外の場合のみ事前にご案内します）</li>
                </ul>
                <p className="mt-2 text-xs text-gray-500">※現場調査の結果、追加工事が必要な場合は、必ず着工前にご説明・お見積りいたします。</p>
              </div>
            </div>
          </section>

          {/* Section 3: Payment */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">
              3. お支払い・引き渡し
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">お支払い方法</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>銀行振込</li>
                  <li>リフォームローン</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">お支払い時期</h3>
                <dl className="space-y-2">
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                        <dt className="font-bold text-gray-700 min-w-[120px]">銀行振込</dt>
                        <dd className="text-gray-600">工事完了後、7日以内にお願いいたします。</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                        <dt className="font-bold text-gray-700 min-w-[120px]">リフォームローン</dt>
                        <dd className="text-gray-600">各契約会社の規定に基づきます。</dd>
                    </div>
                </dl>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">商品の引き渡し時期（施工時期）</h3>
                <p className="mb-2 text-gray-600">ご契約後、お客様と施工日程を調整し、決定した期日に工事を行います。</p>
                <dl className="space-y-2">
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                        <dt className="font-bold text-gray-700 min-w-[120px]">在庫がある場合</dt>
                        <dd className="text-gray-600">ご契約から1週間〜2週間程度</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                        <dt className="font-bold text-gray-700 min-w-[120px]">取り寄せの場合</dt>
                        <dd className="text-gray-600">納期確定次第ご連絡いたします。</dd>
                    </div>
                </dl>
              </div>
            </div>
          </section>

          {/* Section 4: Returns/Cancel */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">
              4. 返品・キャンセル・保証
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">キャンセル・返品について</h3>
                <dl className="space-y-3">
                    <div>
                        <dt className="font-bold text-gray-700 text-sm">工事請負契約締結後</dt>
                        <dd className="text-gray-600 mt-1">原則として、お客様都合によるキャンセル・返品はお受けできません。</dd>
                    </div>
                    <div>
                        <dt className="font-bold text-gray-700 text-sm">初期不良</dt>
                        <dd className="text-gray-600 mt-1">施工完了時に機器の不具合があった場合は、直ちに新品交換またはメーカー修理対応を行います。</dd>
                    </div>
                </dl>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">クーリング・オフについて</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    訪問販売等の特定商取引法の対象となる契約については、法定の契約書面受領日から8日以内であれば、書面または電磁的記録により無条件で契約の解除（クーリング・オフ）が可能です。当社はお客様の権利を尊重し、法令遵守を徹底しております。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">保証内容（セキュアホームの強み）</h3>
                <dl className="space-y-3">
                    <div>
                        <dt className="font-bold text-gray-700 text-sm">メーカー保証</dt>
                        <dd className="text-gray-600 mt-1">商品ごとのメーカー規定に準じます。</dd>
                    </div>
                    <div>
                        <dt className="font-bold text-gray-700 text-sm">施工保証・アフターサポート</dt>
                        <dd className="text-gray-600 mt-1">施工後こそが本当のお付き合いの始まりと考えております。独自の定期点検と長期サポート体制を整え、万が一の不具合や将来のメンテナンスにも迅速に対応いたします。</dd>
                    </div>
                </dl>
              </div>
            </div>
          </section>

          {/* Section 5: Business Content */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">
              5. 事業内容・資格
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">事業内容</h3>
                <p className="text-gray-600">住宅設備機器の販売・施工（エコキュート、給湯器、蓄電池等）、外壁・屋根塗装工事、リフォーム全般</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">保有資格</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>第二種電気工事士</li>
                  <li>給水装置工事主任技術者</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
        
        <div className="mt-16 text-center">
            <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all duration-200 active:scale-95 shadow-lg active:shadow-sm"
            >
            <ArrowLeft className="w-4 h-4" />
            トップページに戻る
            </button>
        </div>
      </div>
    </section>
  );
};

export default Legal;