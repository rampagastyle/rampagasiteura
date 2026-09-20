import React from 'react';
import { Car, MapPin, Phone, Mail, Clock, ArrowUp, Info } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';

interface FooterProps {
  onOpenPhotoGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPhotoGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Каталог автомобилей', href: '#catalog' },
    { name: 'О компании «АвтоВектор»', href: '#about' },
    { name: 'Преимущества покупки', href: '#advantages' },
    { name: 'Услуги и кредитование', href: '#services' },
    { name: 'Спецпредложения и акции', href: '#promotions' },
    { name: 'Фотогалерея салона', href: '#gallery' },
    { name: 'Контакты и схема проезда', href: '#contacts' },
    { name: 'Запись на тест-драйв', href: '#booking' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-9 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-6 border-b border-slate-800/80">
          {/* Колонка 1: Бренд и о нас */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="text-blue-300">
                <Car className="w-8 h-8" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  Авто<span className="text-blue-300">Вектор</span>
                </span>
                <p className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
                  Автомобили с характером
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Информационный портал официального автосалона «АвтоВектор». 
              Продажа новых автомобилей с ПТС, льготные кредитные программы от 5%, 
              быстрый выкуп и Трейд-ин за 1 день.
            </p>

            <div className="pt-2">
              {onOpenPhotoGuide && (
                <button
                  onClick={onOpenPhotoGuide}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-blue-400 border border-slate-700/60 transition-colors cursor-pointer"
                >
                  <Info className="w-4 h-4" />
                  <span>Инструкция: как подгрузить свои фото</span>
                </button>
              )}
            </div>
          </div>

          {/* Колонка 2: Навигация */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Навигация по сайту
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 3: Контакты салона */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Контакты
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{DEALERSHIP_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{DEALERSHIP_INFO.workingHours}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={`tel:${DEALERSHIP_INFO.phoneRaw}`} className="text-white font-bold hover:text-blue-400">
                {DEALERSHIP_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={`mailto:${DEALERSHIP_INFO.email}`} className="text-slate-400 hover:text-white">
                {DEALERSHIP_INFO.email}
              </a>
            </div>
          </div>

          {/* Колонка 4: Соцсети и режим */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Мы в сети
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={DEALERSHIP_INFO.socials.vk}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-xs font-bold text-white transition-colors"
                title="ВКонтакте"
              >
                VK
              </a>
              <a
                href={DEALERSHIP_INFO.socials.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-500 flex items-center justify-center text-xs font-bold text-white transition-colors"
                title="Telegram"
              >
                TG
              </a>
              <a
                href={DEALERSHIP_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-rose-600 flex items-center justify-center text-xs font-bold text-white transition-colors"
                title="YouTube"
              >
                YT
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 text-blue-400" />
              <span>Наверх страницы</span>
            </button>
          </div>
        </div>

        {/* Копирайт и юридический дисклеймер */}
        <div className="pt-5 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {DEALERSHIP_INFO.copyrightYear} {DEALERSHIP_INFO.fullName}. Все права защищены.
          </div>
          <div className="text-slate-400 text-center md:text-right max-w-xl text-[11px] leading-relaxed">
            {DEALERSHIP_INFO.legalNotice}
          </div>
        </div>
      </div>
    </footer>
  );
};
