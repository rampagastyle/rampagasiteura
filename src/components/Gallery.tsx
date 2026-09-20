import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/dealershipData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'Все фото' },
    { key: 'showroom', label: 'Шоурум' },
    { key: 'cars', label: 'Автомобили' },
    { key: 'service', label: 'Сервисная зона' },
    { key: 'team', label: 'Команда' },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenPhoto = (idx: number) => {
    setActivePhotoIndex(idx);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="section-shell bg-inset border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="section-heading flex flex-col xl:flex-row xl:items-end justify-between gap-4">
          <div>
            <div className="section-kicker">
              <Camera className="w-3.5 h-3.5" />
              <span>Фотоэкскурсия</span>
            </div>
            <h2 className="section-title text-slate-900">
              Галерея автосалона «АвтоВектор»
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Реальные фотографии нашего выставочного зала, сервиса, парка и специалистов
            </p>
          </div>

          {/* Фильтры категорий */}
          <div className="flex items-center gap-4 overflow-x-auto border-b border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                aria-pressed={activeCategory === cat.key}
                className={`py-2.5 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.key
                    ? 'border-blue-600 text-blue-700'
                    : 'border-transparent text-slate-600 hover:text-blue-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка фото */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredPhotos.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => handleOpenPhoto(idx)}
              aria-label={`Увеличить фото: ${photo.title}`}
              className="gallery-tile group relative rounded-lg overflow-hidden bg-slate-900 text-left cursor-pointer transition-all duration-300"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Градиентное наложение */}
              <span className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent opacity-90 transition-opacity" />

              {/* Информация и иконка зума */}
              <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </span>

              <span className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider block mb-1">
                  {photo.categoryLabel}
                </span>
                <span className="block font-semibold text-sm leading-snug">
                  {photo.title}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox модальное окно */}
      {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Кнопка закрытия */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-20 cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Стрелка влево */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-20 cursor-pointer"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Контент изображения */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[activePhotoIndex].url}
              alt={filteredPhotos[activePhotoIndex].title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center text-white max-w-lg">
              <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                {filteredPhotos[activePhotoIndex].categoryLabel} ({activePhotoIndex + 1} / {filteredPhotos.length})
              </span>
              <h3 className="text-lg font-bold mt-1">
                {filteredPhotos[activePhotoIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {filteredPhotos[activePhotoIndex].description}
              </p>
            </div>
          </div>

          {/* Стрелка вправо */}
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-20 cursor-pointer"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
