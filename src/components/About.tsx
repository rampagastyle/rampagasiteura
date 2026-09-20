import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';

interface AboutProps {
  onOpenBooking: (type?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'showroom' | 'team'>('showroom');

  return (
    <section id="about" className="section-shell bg-inset border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Левая колонка - Картинка шоурума / команды */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Фото с переключателем вкладок */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-200">
                <img
                  src={activeTab === 'showroom' ? DEALERSHIP_INFO.showroomImage : DEALERSHIP_INFO.teamImage}
                  alt={activeTab === 'showroom' ? 'Шоурум автосалона АвтоВектор' : 'Команда менеджеров АвтоВектор'}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading="lazy"
                />
                
                {/* Бейдж переключения */}
                <div className="absolute top-3 left-3 flex gap-1 p-1 bg-surface/95 backdrop-blur-md rounded-lg">
                  <button
                    onClick={() => setActiveTab('showroom')}
                    aria-pressed={activeTab === 'showroom'}
                    className={`px-3 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      activeTab === 'showroom'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    Шоурум
                  </button>
                  <button
                    onClick={() => setActiveTab('team')}
                    aria-pressed={activeTab === 'team'}
                    className={`px-3 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      activeTab === 'team'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    Команда
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Правая колонка - Текстовое описание */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="section-kicker">
              О компании «АвтоВектор»
            </div>

            <h2 className="section-title text-slate-900 max-w-xl">
              Помогаем выбирать уверенно с {DEALERSHIP_INFO.establishedYear} года
            </h2>

            {/* 1-2 абзаца короткого и понятного текста */}
            <div className="mt-4 space-y-3 text-slate-600 text-sm leading-relaxed max-w-2xl">
              <p>
                За {DEALERSHIP_INFO.yearsOnMarket} лет работы уже более <strong className="text-slate-900 font-semibold">{DEALERSHIP_INFO.carsSold} автомобилей</strong> нашли своих владельцев в «АвтоВекторе».
                В шоуруме свыше {DEALERSHIP_INFO.carsInStock} проверенных машин с готовым ПТС: поможем сравнить модели и выбрать свою без спешки.
              </p>
              <p>
                Кредитные ставки от банков-партнёров, честный трейд-ин за 1 день и гарантия {DEALERSHIP_INFO.warrantyYears} года.
                Подбор, быстрое оформление и обслуживание в собственном техцентре в одном месте.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking('car-selection')}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Обсудить подбор</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4"
              >
                Подробнее об услугах
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
