import React from 'react';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';

interface HeroProps {
  onOpenBooking: (type?: string, carName?: string) => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreCatalog }) => (
  <section className="hero" aria-labelledby="hero-title">
    <img
      src={DEALERSHIP_INFO.heroBackgroundImage}
      alt="Автомобиль на загородной дороге"
      className="hero-image"
      fetchPriority="high"
    />
    <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[620px]">
        <p className="hero-enter text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200 mb-3">
          Автосалон в Москве
        </p>
        <h1 id="hero-title" className="hero-enter font-bold leading-[1.05] tracking-tight">
          <span className="block text-[clamp(2.6rem,5.5vw,4.5rem)]">
            Авто<span className="text-blue-300">Вектор</span>
          </span>
          <span className="block max-w-lg mt-4 text-[clamp(1.4rem,2.7vw,2.15rem)] leading-[1.16] font-medium tracking-[-0.025em]">
            Подбор и продажа автомобилей
          </span>
        </h1>
        <p className="hero-enter-delay max-w-md mt-4 text-sm sm:text-base leading-relaxed text-slate-200">
          Большой выбор авто, выгодные условия кредита, трейд-ин и тест-драйв.
        </p>
        <div className="hero-enter-last flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={onExploreCatalog}
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 active:scale-[0.98]"
          >
            Подобрать автомобиль
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => onOpenBooking('test-drive')}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300/40 bg-slate-950/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800/80 hover:border-blue-300"
          >
            <CalendarCheck className="w-4 h-4 text-blue-200" />
            Записаться на тест-драйв
          </button>
        </div>
      </div>
    </div>
  </section>
);
