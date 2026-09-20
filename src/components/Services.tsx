import React, { useState } from 'react';
import { Briefcase, ArrowRight, CheckCircle2, Calculator } from 'lucide-react';
import { SERVICES } from '../data/dealershipData';
import { formatPrice, calculateMonthlyPayment } from '../utils/formatters';

interface ServicesProps {
  onOpenBooking: (type?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  // Состояние кредитного мини-калькулятора
  const [calcPrice, setCalcPrice] = useState<number>(2450000);
  const [calcDownPayment, setCalcDownPayment] = useState<number>(500000);
  const [calcTerm, setCalcTerm] = useState<number>(60);
  const calcRate = 5.0;

  const calculatedPayment = calculateMonthlyPayment(calcPrice, calcDownPayment, calcTerm, calcRate);

  return (
    <section id="services" className="section-shell bg-inset border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="section-heading max-w-3xl">
          <div className="section-kicker">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Комплексные услуги</span>
          </div>
          <h2 className="section-title text-slate-900">
            Всё для вашего автомобиля
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            От подбора и моментального одобрения кредита до постановки на учёт и планового ТО.
          </p>
        </div>

        {/* Карточки услуг с фото */}
        <div className="service-grid mb-6 items-start">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-surface rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 transition-colors duration-300 flex flex-col group"
            >
              {/* Фото услуги */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                  {service.tag}
                </div>
              </div>

              {/* Описание услуги: 2-3 строки по ТЗ */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <details className="mt-3 border-t border-slate-200/70 pt-2.5">
                    <summary className="text-xs font-semibold text-blue-600 py-1">Что входит</summary>
                    <div className="space-y-2 pt-2">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200/70 flex items-center justify-between gap-2">
                  <span className="text-[11px] leading-relaxed font-medium text-blue-600">
                    {service.highlightText}
                  </span>
                  <button
                    onClick={() => onOpenBooking(service.id === 'tradein' ? 'trade-in' : service.id)}
                    className="p-2.5 shrink-0 rounded-lg bg-inset text-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                    title={`Оформить ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Интерактивный виджет: Онлайн калькулятор кредита и трейд-ин */}
        <div className="bg-surface rounded-xl border border-slate-200 overflow-hidden p-4 sm:p-6">
          <div className="grid lg:grid-cols-12 gap-5 sm:gap-8 items-center">
            {/* Кредитный калькулятор */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-xs">
                <Calculator className="w-5 h-5" />
                <span>ОНЛАЙН-КАЛЬКУЛЯТОР КРЕДИТА</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                Комфортный платёж для вас
              </h3>

              <div className="space-y-4">
                {/* Стоимость авто */}
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    <span>Стоимость автомобиля:</span>
                    <span className="text-blue-600 font-bold">{formatPrice(calcPrice)}</span>
                  </div>
                  <input
                    type="range"
                    aria-label="Стоимость автомобиля"
                    min="1000000"
                    max="4000000"
                    step="50000"
                    value={calcPrice}
                    onChange={(e) => {
                      const price = Number(e.target.value);
                      setCalcPrice(price);
                      setCalcDownPayment((current) => Math.min(current, Math.floor(price * 0.7 / 50000) * 50000));
                    }}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                {/* Первоначальный взнос */}
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    <span>Первоначальный взнос (от 0%):</span>
                    <span className="text-slate-900 font-bold">{formatPrice(calcDownPayment)} ({Math.round((calcDownPayment / calcPrice) * 100)}%)</span>
                  </div>
                  <input
                    type="range"
                    aria-label="Первоначальный взнос"
                    min="0"
                    max={calcPrice * 0.7}
                    step="50000"
                    value={calcDownPayment}
                    onChange={(e) => setCalcDownPayment(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                {/* Срок кредита */}
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    <span>Срок кредитования:</span>
                    <span className="text-slate-900 font-bold">{calcTerm / 12} лет ({calcTerm} месяцев)</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 pt-1">
                    {[24, 36, 60, 84].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setCalcTerm(term)}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          calcTerm === term
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-canvas text-slate-700 border-slate-200 hover:bg-inset'
                        }`}
                      >
                        {term / 12} {term <= 48 ? 'года' : 'лет'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Итоговый результат расчета */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-lg p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Предварительный расчет
                </span>
                <div className="text-3xl sm:text-4xl font-black text-blue-400 mt-2">
                  {formatPrice(calculatedPayment)} <span className="text-sm font-normal text-slate-300">/ мес.</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Ставка: {calcRate}% годовых с учетом субсидии автосалона
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-y border-slate-800 py-4">
                <div className="flex justify-between">
                  <span>Сумма кредита:</span>
                  <strong className="text-white">{formatPrice(Math.max(0, calcPrice - calcDownPayment))}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Решение банков:</span>
                  <strong className="text-emerald-400">от 15 минут</strong>
                </div>
                <div className="flex justify-between">
                  <span>Первоначальный взнос:</span>
                  <strong className="text-white">{formatPrice(calcDownPayment)}</strong>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('credit')}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl shadow-lg transition-colors cursor-pointer text-center"
              >
                Подать заявку на кредит под 5%
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
