import React from 'react';
import { Percent, RefreshCw, Gauge, ShieldCheck, Wrench, FileCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { ADVANTAGES, DEALERSHIP_INFO } from '../data/dealershipData';

interface AdvantagesProps {
  onOpenBooking: (type?: string) => void;
}

export const Advantages: React.FC<AdvantagesProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Percent':
        return <Percent className="w-6 h-6 text-blue-300" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-blue-300" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-blue-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-300" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-blue-300" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-blue-300" />;
      default:
        return <CheckCircle className="w-6 h-6 text-blue-300" />;
    }
  };

  return (
    <section id="advantages" className="section-shell bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="section-heading max-w-3xl">
          <div className="section-kicker text-blue-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Почему выбирают «АвтоВектор»</span>
          </div>
          <h2 className="section-title text-white">
            Преимущества для наших клиентов
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Каждый процесс оптимизирован для вашей безопасности, экономии времени и максимальной выгоды.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1 mb-6">
          {ADVANTAGES.map((adv, index) => (
            <div
              key={index}
              className="border-t border-slate-700/80 py-4 flex items-start gap-3"
            >
              <div className="shrink-0 mt-0.5">{getIcon(adv.iconName)}</div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1.5">
                  {adv.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {adv.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Общая стильная иллюстрация/баннер сервисной зоны автосалона */}
        <div className="border-t border-slate-700 pt-6">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Собственный технический центр
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                Забота об автомобиле после покупки
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Диагностика по 85 параметрам, 12 сервисных постов и склад оригинальных запчастей.
                Обслуживаем там же, где вы покупаете автомобиль.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking('trade-in')}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-xl inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Оценить авто по Трейд‑ин</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-slate-400">
                  Оценка занимает до 30 минут
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 h-52 sm:h-60 relative rounded-xl overflow-hidden">
              <img
                src={DEALERSHIP_INFO.serviceZoneImage}
                alt="Автомобиль в сервисной зоне АвтоВектор"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
