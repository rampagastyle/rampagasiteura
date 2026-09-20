import React from 'react';
import { Fuel, Gauge, Cog, ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import { Car } from '../types';
import { formatPrice } from '../utils/formatters';

interface CarCardProps {
  car: Car;
  onOpenDetails: (car: Car) => void;
  onBookTestDrive: (carName: string) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onOpenDetails, onBookTestDrive }) => {
  return (
    <article className="bg-surface rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col group">
      {/* Контейнер изображения с бейджами */}
      <button type="button" aria-label={`Подробнее о ${car.name}`} className="relative block w-full aspect-[16/9] bg-inset overflow-hidden text-left" onClick={() => onOpenDetails(car)}>
        <img
          src={car.images.front}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Бейдж новинки / акции */}
        {car.badge && (
          <span className="absolute top-2.5 left-2.5 bg-slate-950/85 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
            {car.badge}
          </span>
        )}

        <span className="absolute bottom-2.5 right-2.5 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
          3 ракурса фото
        </span>
      </button>

      {/* Описание автомобиля */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Тип кузова и год */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-medium text-blue-600 uppercase tracking-wider">{car.bodyType}</span>
            <span>{car.year} г.в.</span>
          </div>

          {/* Название модели */}
          <h3 className="text-base font-bold text-slate-900 leading-snug">
            <button onClick={() => onOpenDetails(car)} className="text-left hover:text-blue-600 transition-colors">
              {car.name}
            </button>
          </h3>
          <p className="mt-1.5 flex items-center gap-1 text-[11px] text-emerald-700">
            <CheckCircle className="w-3 h-3" /> С ПТС в наличии
          </p>

          {/* Ключевые ТТХ */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 mt-2.5 pt-2.5 border-t border-slate-200/70 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{car.engine}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cog className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{car.transmission} • {car.drive}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Fuel className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{car.fuel}</span>
            </div>
            <div className="text-slate-500 text-[11px]">
              Разгон: <strong className="text-slate-700">{car.acceleration}</strong>
            </div>
          </div>
        </div>

        {/* Цены и кнопки */}
        <div className="mt-3 pt-3 border-t border-slate-200/70">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-[11px] text-slate-500 block font-medium">Цена</span>
              <div className="text-xl font-extrabold text-slate-900">
                {formatPrice(car.price)}
              </div>
              {car.oldPrice && (
                <div className="text-xs text-slate-500 line-through">
                  {formatPrice(car.oldPrice)}
                </div>
              )}
            </div>

            <div className="text-right">
              <span className="text-[11px] text-slate-500 block font-medium">Кредит</span>
              <div className="text-[11px] font-semibold text-blue-600 mt-1">
                от {formatPrice(car.monthlyPayment)}/мес
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenDetails(car)}
              className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Подробнее</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onBookTestDrive(car.name)}
              className="py-2.5 px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Тест‑драйв</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
