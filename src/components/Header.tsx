import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Car, ChevronRight } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';

interface HeaderProps {
  onOpenBooking: (type?: string, carName?: string) => void;
}

const navLinks = [
  { name: 'Каталог', href: '#catalog' },
  { name: 'О салоне', href: '#about' },
  { name: 'Преимущества', href: '#advantages' },
  { name: 'Услуги', href: '#services' },
  { name: 'Акции', href: '#promotions' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'Контакты', href: '#contacts' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMobileMenuOpen(false);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b border-slate-700/60 text-white transition-colors duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-slate-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 sm:h-[72px] items-center justify-between gap-4">
        <a href="#top" aria-label={`${DEALERSHIP_INFO.fullName}, на главную`} className="flex shrink-0 items-center gap-2.5 group">
          <Car className="w-8 h-8 text-blue-300 transition-transform group-hover:translate-x-0.5" />
          <span>
            <span className="block text-xl sm:text-2xl font-bold leading-none tracking-tight">
              Авто<span className="text-blue-300">Вектор</span>
            </span>
            <span className="block mt-1 text-[9px] tracking-[0.16em] uppercase text-slate-400">
              {DEALERSHIP_INFO.slogan}
            </span>
          </span>
        </a>

        <nav aria-label="Основная навигация" className="hidden xl:flex items-center gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="py-3 text-xs font-medium text-slate-300 transition-colors hover:text-blue-200">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block text-right">
            <a href={`tel:${DEALERSHIP_INFO.phoneRaw}`} className="text-sm font-semibold whitespace-nowrap transition-colors hover:text-blue-200">
              {DEALERSHIP_INFO.phone}
            </a>
            <p className="text-[10px] text-slate-400 mt-0.5">Ежедневно 09:00 - 21:00</p>
          </div>
          <button onClick={() => onOpenBooking('test-drive')} className="hidden sm:block rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-blue-500">
            Тест-драйв
          </button>
          <a href={`tel:${DEALERSHIP_INFO.phoneRaw}`} className="sm:hidden p-2.5 text-blue-200" aria-label="Позвонить">
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Мобильная навигация" className="xl:hidden absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto bg-slate-950 border-t border-slate-800 px-4 py-3 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between border-b border-slate-800 py-3 text-sm text-slate-200 hover:text-blue-200">
              {link.name}<ChevronRight className="w-4 h-4 text-blue-300" />
            </a>
          ))}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenBooking('test-drive'); }}
            className="mt-4 mb-1 w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold hover:bg-blue-500"
          >
            Записаться на тест-драйв
          </button>
        </nav>
      )}
    </header>
  );
};