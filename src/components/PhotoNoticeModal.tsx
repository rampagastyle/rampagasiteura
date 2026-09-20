import React from 'react';
import { X, Sliders, FileCode, CheckCircle, FolderOpen, PhoneCall } from 'lucide-react';
import { DEALERSHIP_CONFIG } from '../config/dealershipConfig';

interface PhotoNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoNoticeModal: React.FC<PhotoNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-title"
        className="bg-surface rounded-xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 id="guide-title" className="text-lg sm:text-xl font-bold text-slate-900">
              Как легко менять информацию и фото на сайте
            </h3>
            <p className="text-xs text-slate-500">
              Актуально на {DEALERSHIP_CONFIG.legal.copyrightYear} год. Все данные собраны в 3 файлах.
            </p>
          </div>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
          {/* Блок 1: Конфиг */}
          <div className="p-3.5 rounded-lg bg-inset border border-slate-300/80 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <PhoneCall className="w-4 h-4 text-blue-600 shrink-0" />
              <span>1. Единый файл контактов и настроек:</span>
            </div>
            <p className="text-xs text-slate-600">
              Файл: <code className="bg-surface px-1.5 py-0.5 rounded font-mono text-blue-700 font-semibold">src/config/dealershipConfig.ts</code>
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Здесь в одном месте меняются: <strong>телефон ({DEALERSHIP_CONFIG.phone})</strong>, <strong>email ({DEALERSHIP_CONFIG.email})</strong>, <strong>адрес и метро</strong>, <strong>график работы</strong>, ссылки на соцсети (VK, TG), процент кредита ({DEALERSHIP_CONFIG.creditMinRate}) и общие фото автосалона (фасад, шоурум, сервис, команда).
            </p>
          </div>

          {/* Блок 2: Автомобили */}
          <div className="p-3.5 rounded-lg bg-inset border border-slate-300/80 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <FileCode className="w-4 h-4 text-blue-600 shrink-0" />
              <span>2. Каталог авто, цены, ТТХ и 3 ракурса фото:</span>
            </div>
            <p className="text-xs text-slate-600">
              Файл: <code className="bg-surface px-1.5 py-0.5 rounded font-mono text-blue-700 font-semibold">src/data/carsData.ts</code>
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              В каждом авто меняются название, цена, характеристики и 3 ракурса в поле <code className="font-mono text-slate-800">images: &#123; front, side, interior &#125;</code> (фас, профиль, салон).
            </p>
          </div>

          {/* Блок 3: Как подгрузить свои фото */}
          <div className="p-3.5 rounded-lg bg-inset border border-slate-300/80 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <FolderOpen className="w-4 h-4 text-blue-600 shrink-0" />
              <span>3. Как загрузить свои фотографии с диска:</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Положите картинки в папку <code className="bg-surface px-1.5 py-0.5 rounded font-mono text-blue-700 font-semibold">public/images/</code> и указывайте в файлах путь вида: <code className="font-mono text-slate-800">/images/my-car.jpg</code>.
            </p>
          </div>

          {/* Полная инструкция */}
          <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-200 text-xs text-blue-900 flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong>Полная пошаговая инструкция на русском языке</strong> уже создана в корне проекта в файле <code className="font-mono font-bold">КАК_МЕНЯТЬ_ИНФОРМАЦИЮ.md</code>.
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Понятно, закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
