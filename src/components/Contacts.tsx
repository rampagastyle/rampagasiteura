import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';

export const Contacts: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(DEALERSHIP_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacts" className="section-shell bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="section-heading max-w-3xl">
          <div className="section-kicker">
            <MapPin className="w-3.5 h-3.5" />
            <span>Контакты и локация</span>
          </div>
          <h2 className="section-title text-slate-900">
            Приезжайте в автосалон «АвтоВектор»
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Удобный подъезд с Варшавского шоссе, собственная охраняемая парковка для клиентов и зона выдачи
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Левая колонка: Контакты и фото фасада */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Адрес */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Адрес автосалона</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">{DEALERSHIP_INFO.address}</div>
                  <div className="text-xs text-blue-600 font-medium mt-1">{DEALERSHIP_INFO.metro}</div>

                  <button
                    onClick={handleCopyAddress}
                    className="mt-2 text-xs text-slate-600 hover:text-blue-600 flex items-center gap-1.5 font-medium transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Адрес скопирован!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Скопировать адрес</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Телефоны */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Отдел продаж и запись</div>
                  <a
                    href={`tel:${DEALERSHIP_INFO.phoneRaw}`}
                    className="text-lg font-black text-slate-900 hover:text-blue-600 transition-colors block mt-0.5"
                  >
                    {DEALERSHIP_INFO.phone}
                  </a>
                  <a
                    href={`tel:${DEALERSHIP_INFO.tollFreePhone.replace(/[^\d+]/g, '')}`}
                    className="text-xs text-slate-500 hover:text-slate-700 block mt-0.5"
                  >
                    Бесплатная линия РФ: {DEALERSHIP_INFO.tollFreePhone}
                  </a>
                </div>
              </div>

              {/* Время работы */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">График работы</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{DEALERSHIP_INFO.workingHours}</div>
                  <div className="text-xs text-emerald-600 font-medium mt-0.5">Без выходных и перерывов</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Электронная почта</div>
                  <a
                    href={`mailto:${DEALERSHIP_INFO.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors block mt-0.5"
                  >
                    {DEALERSHIP_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Фото фасада здания автосалона по ТЗ */}
            <div className="relative rounded-xl overflow-hidden aspect-[21/8] bg-inset">
              <img
                src={DEALERSHIP_INFO.exteriorImage}
                alt="Фасад здания автосалона АвтоВектор"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold">Фасад дилерского центра</div>
                    <div className="text-[11px] text-slate-300">{DEALERSHIP_INFO.address}</div>
                  </div>
                  <span className="text-[11px] bg-blue-600 px-2 py-0.5 rounded font-medium">
                    {DEALERSHIP_INFO.metro}
                  </span>
                </div>
            </div>
          </div>

          {/* Правая колонка: Интерактивная карта и навигатор */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[340px] rounded-xl overflow-hidden border border-slate-200 flex flex-col bg-inset">
              {/* Стилизованная интерактивная карта */}
              <div className="relative flex-1 w-full h-full bg-inset overflow-hidden">
                {/* Векторная сетка карты */}
                <div 
                  className="absolute inset-0 opacity-80"
                  style={{
                    backgroundImage: `
                      radial-gradient(#b2bfba 1.5px, transparent 1.5px),
                      linear-gradient(to right, #cbd4ce 1px, transparent 1px),
                      linear-gradient(to bottom, #cbd4ce 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px, 80px 80px, 80px 80px'
                  }}
                />

                {/* Дороги на карте */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  {/* Варшавское шоссе */}
                  <path d="M 120 0 L 280 600" stroke="#bc9572" strokeWidth="18" fill="none" opacity="0.4" />
                  <path d="M 120 0 L 280 600" stroke="#d2b79c" strokeWidth="14" fill="none" opacity="0.8" />
                  <path d="M 0 350 L 800 240" stroke="#8d9d99" strokeWidth="10" fill="none" opacity="0.6" />
                  <path d="M 0 160 L 800 120" stroke="#8d9d99" strokeWidth="8" fill="none" opacity="0.5" />
                  <path d="M 450 0 L 350 600" stroke="#b2bfba" strokeWidth="6" fill="none" />
                </svg>

                {/* Метка метро Южная */}
                <div className="absolute top-[24%] left-[22%] -translate-x-1/2 -translate-y-1/2 bg-surface px-2.5 py-1 rounded-md shadow-md border border-slate-300 text-[11px] font-bold text-slate-700 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-800" />
                  м. Южная
                </div>

                {/* Главный маркер: Автосалон «АвтоВектор» */}
                <div className="absolute top-[43%] left-[47%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl border border-blue-500 flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-blue-300" />
                    Автосалон «АвтоВектор»
                  </div>
                  <div className="w-9 h-9 rounded-full bg-blue-600 border-4 border-surface shadow-xl flex items-center justify-center text-white mt-1">
                    <MapPin className="w-4 h-4 fill-white" />
                  </div>
                  <div className="w-3 h-1.5 bg-slate-900/30 rounded-full blur-[1px] mt-1" />
                </div>

                {/* Плашка маршрута внизу карты */}
                <div className="absolute bottom-3 left-3 right-3 bg-surface/95 backdrop-blur-md rounded-lg p-3 border border-slate-200 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Координаты для навигатора:</div>
                    <div className="text-sm font-mono font-bold text-slate-900">{DEALERSHIP_INFO.coordinates.display}</div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={DEALERSHIP_INFO.navigationLinks.yandex}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Яндекс Навигатор</span>
                    </a>
                    <a
                      href={DEALERSHIP_INFO.navigationLinks.google}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Карты</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
