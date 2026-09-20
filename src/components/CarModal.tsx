import React, { useState, useEffect } from 'react';
import { X, Calendar, Shield, Gauge, Cog, Check, ArrowRight } from 'lucide-react';
import { Car } from '../types';
import { formatPrice, calculateMonthlyPayment } from '../utils/formatters';

interface CarModalProps {
  car: Car;
  onClose: () => void;
  onBookTestDrive: (carName: string) => void;
}

export const CarModal: React.FC<CarModalProps> = ({ car, onClose, onBookTestDrive }) => {
  const [activeView, setActiveView] = useState<'front' | 'side' | 'interior'>('front');
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTermMonths, setLoanTermMonths] = useState<number>(60);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
    };
  }, [onClose]);

  const downPayment = Math.round((car.price * downPaymentPercent) / 100);
  const monthlyPay = calculateMonthlyPayment(car.price, downPayment, loanTermMonths, 5.0);

  const viewOptions: { key: 'front' | 'side' | 'interior'; label: string; desc: string }[] = [
    { key: 'front', label: 'Вид спереди', desc: 'Фас' },
    { key: 'side', label: 'Вид сбоку', desc: 'Профиль' },
    { key: 'interior', label: 'Интерьер', desc: 'Салон' },
  ];

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="car-title"
        className="relative w-full max-w-4xl bg-surface rounded-xl shadow-2xl overflow-hidden border border-slate-200 max-h-[92dvh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Заголовок модального окна */}
        <div className="flex shrink-0 items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-slate-200 bg-inset sticky top-0 z-20">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-700">
                {car.bodyType}
              </span>
              <span className="text-xs text-slate-500">{car.year} г.в. • В наличии с ПТС</span>
            </div>
            <h2 id="car-title" className="text-lg sm:text-2xl font-bold text-slate-900 mt-1">
              {car.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            autoFocus
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Тело модального окна со скроллом */}
        <div className="overflow-y-auto p-4 sm:p-5 space-y-5">
          {/* Блок переключения ракурсов фотографий */}
          <div>
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-900 shadow-md">
              <img
                src={car.images[activeView]}
                alt={`${car.name} - ${activeView}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md">
                Ракурс: {viewOptions.find((v) => v.key === activeView)?.label} ({viewOptions.find((v) => v.key === activeView)?.desc})
              </div>
            </div>

            {/* Миниатюры 3 ракурсов */}
            <div className="grid grid-cols-3 gap-3 mt-3">
              {viewOptions.map((view) => (
                <button
                  key={view.key}
                  onClick={() => setActiveView(view.key)}
                  aria-pressed={activeView === view.key}
                  className={`flex flex-col sm:flex-row items-center gap-2 p-2 rounded-lg border text-left transition-all cursor-pointer ${
                    activeView === view.key
                      ? 'border-blue-600 bg-blue-50/50 shadow-sm ring-2 ring-blue-600/20'
                      : 'border-slate-200 hover:border-slate-300 bg-canvas'
                  }`}
                >
                  <img
                    src={car.images[view.key]}
                    alt={view.label}
                    className="w-full sm:w-14 h-12 sm:h-10 object-cover rounded-md shrink-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{view.label}</div>
                    <div className="text-[11px] text-slate-500">{view.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Цены и спецпредложение */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-500">Цена автомобиля в шоуруме:</div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">
                  {formatPrice(car.price)}
                </span>
                {car.oldPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    {formatPrice(car.oldPrice)}
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500">Льготный расчет кредита:</div>
              <div className="text-lg font-bold text-blue-600">
                от {formatPrice(car.monthlyPayment)} / мес.
              </div>
            </div>
          </div>

          {/* Технические характеристики */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-blue-600" />
              Технические характеристики
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <div className="py-2 border-b border-slate-200">
                <div className="text-xs text-slate-500">Двигатель</div>
                <div className="font-semibold text-slate-800 mt-0.5">{car.engine}</div>
              </div>
              <div className="py-2 border-b border-slate-200">
                <div className="text-xs text-slate-500">Мощность</div>
                <div className="font-semibold text-slate-800 mt-0.5">{car.power} л.с.</div>
              </div>
              <div className="py-2 border-b border-slate-200">
                <div className="text-xs text-slate-500">Коробка передач</div>
                <div className="font-semibold text-slate-800 mt-0.5">{car.transmission}</div>
              </div>
              <div className="py-2 border-b border-slate-200">
                <div className="text-xs text-slate-500">Привод</div>
                <div className="font-semibold text-slate-800 mt-0.5">{car.drive}</div>
              </div>
              <div className="py-2 border-b border-slate-200">
                <div className="text-xs text-slate-500">Разгон 0-100 км/ч</div>
                <div className="font-semibold text-slate-800 mt-0.5">{car.acceleration}</div>
              </div>
              <div className="py-2 border-b border-slate-200">
                <div className="text-xs text-slate-500">Расход топлива</div>
                <div className="font-semibold text-slate-800 mt-0.5">{car.consumption}</div>
              </div>
            </div>
          </div>

          {/* Комплектация и опции */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Cog className="w-5 h-5 text-blue-600" />
              Комплектация и оснащение
            </h3>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {car.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Описание модели */}
          <div className="text-sm text-slate-600 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
            <strong className="text-slate-900 block mb-1">Информация об автомобиле:</strong>
            {car.description}
          </div>

          {/* Интерактивный калькулятор кредита под этот автомобиль */}
          <div className="bg-slate-900 text-white rounded-xl p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="font-bold text-base">Кредитный калькулятор модели</h4>
                <p className="text-xs text-slate-400">Ставка от 5% годовых по госпрограмме</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Ежемесячный платеж:</div>
                <div className="text-2xl font-black text-blue-400">
                  ~ {formatPrice(monthlyPay)} / мес
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                  <span>Первый взнос:</span>
                  <span className="font-bold text-white">{downPaymentPercent}% ({formatPrice(downPayment)})</span>
                </div>
                <input
                  type="range"
                  aria-label="Первоначальный взнос"
                  min="0"
                  max="60"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                  <span>Срок кредита:</span>
                  <span className="font-bold text-white">{loanTermMonths / 12} лет ({loanTermMonths} мес)</span>
                </div>
                <input
                  type="range"
                  aria-label="Срок кредита в месяцах"
                  min="12"
                  max="84"
                  step="12"
                  value={loanTermMonths}
                  onChange={(e) => setLoanTermMonths(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Футер модального окна */}
        <div className="shrink-0 p-3 sm:p-4 bg-inset border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
          <div className="text-xs text-slate-500 hidden md:flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-600" />
            Гарантия 3 года или 100 000 км пробега
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-3 bg-surface border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Закрыть
            </button>
            <button
              onClick={() => {
                onClose();
                onBookTestDrive(car.name);
              }}
              className="py-2.5 px-3 sm:px-5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer flex-1 sm:flex-initial"
            >
              <Calendar className="w-4 h-4" />
              <span>Записаться на тест‑драйв</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
