import React, { useState } from 'react';
import { Tag, Calendar, Gift, ArrowRight, X } from 'lucide-react';
import { PROMOTIONS } from '../data/dealershipData';
import { PromoItem } from '../types';

interface PromotionsProps {
  onOpenBooking: (type?: string, note?: string) => void;
}

export const Promotions: React.FC<PromotionsProps> = ({ onOpenBooking }) => {
  const [selectedPromo, setSelectedPromo] = useState<PromoItem | null>(null);

  return (
    <section id="promotions" className="section-shell bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="section-heading flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="section-kicker text-rose-700">
              <Gift className="w-3.5 h-3.5" />
              <span>Выгода месяца</span>
            </div>
            <h2 className="section-title text-slate-900">
              Акции и специальные предложения
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Действительны при бронировании автомобиля до конца текущего месяца
            </p>
          </div>
        </div>

        {/* Сетка карточек акций */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROMOTIONS.map((promo) => (
            <div
              key={promo.id}
              className="bg-surface rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-rose-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {promo.badge}
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  <span>{promo.period}</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">
                    {promo.benefit}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {promo.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPromo(promo)}
                    className="flex-1 py-2.5 px-2 lg:px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Подробнее
                  </button>
                  <button
                    onClick={() => onOpenBooking('credit', promo.title)}
                    className="flex-1 py-2.5 px-2 lg:px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Участвовать</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно деталей акции */}
      {selectedPromo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div role="dialog" aria-modal="true" aria-labelledby="promotion-title" className="bg-surface rounded-xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative max-h-[90dvh] overflow-y-auto">
            <button
              onClick={() => setSelectedPromo(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              aria-label="Закрыть акцию"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold mb-3">
              <Tag className="w-3.5 h-3.5" />
              <span>{selectedPromo.badge}</span>
            </div>

            <h3 id="promotion-title" className="text-xl font-bold text-slate-900 mb-2 pr-6">
              {selectedPromo.title}
            </h3>

            <div className="bg-rose-50 text-rose-800 font-bold text-sm p-3 rounded-xl mb-4">
              {selectedPromo.benefit} • {selectedPromo.period}
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedPromo.description} Предложение суммируется с льготной программой автокредитования. 
              Для бронирования условий зафиксируйте спеццену по кнопке ниже.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedPromo(null)}
                className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl"
              >
                Закрыть
              </button>
              <button
                onClick={() => {
                  const title = selectedPromo.title;
                  setSelectedPromo(null);
                  onOpenBooking('credit', title);
                }}
                className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl"
              >
                Зафиксировать выгоду
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
