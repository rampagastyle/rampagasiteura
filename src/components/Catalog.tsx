import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, RotateCcw, Car as CarIcon } from 'lucide-react';
import { CARS_DATA } from '../data/carsData';
import { Car } from '../types';
import { CarCard } from './CarCard';
import { formatPrice } from '../utils/formatters';

interface CatalogProps {
  onOpenDetails: (car: Car) => void;
  onBookTestDrive: (carName: string) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onOpenDetails, onBookTestDrive }) => {
  const [selectedBodyType, setSelectedBodyType] = useState<string>('Все');
  const [selectedBrand, setSelectedBrand] = useState<string>('Все');
  const [selectedFuel, setSelectedFuel] = useState<string>('Все');
  const [maxPrice, setMaxPrice] = useState<number>(4000000);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'popular' | 'power'>('popular');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState<boolean>(false);

  // Список доступных типов кузова и топлива
  const bodyTypes = ['Все', 'Седан', 'Кроссовер', 'Внедорожник', 'Лифтбек', 'Минивэн'];
  const fuelTypes = ['Все', 'Бензин', 'Дизель', 'Электро'];
  const brands = useMemo(() => {
    const list = Array.from(new Set(CARS_DATA.map((c) => c.brand)));
    return ['Все', ...list];
  }, []);

  // Фильтрация
  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      if (selectedBodyType !== 'Все' && car.bodyType !== selectedBodyType) return false;
      if (selectedBrand !== 'Все' && car.brand !== selectedBrand) return false;
      if (selectedFuel !== 'Все' && car.fuel !== selectedFuel) return false;
      if (car.price > maxPrice) return false;
      if (
        searchQuery.trim() &&
        !car.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !car.engine.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'power') return b.power - a.power;
      return 0; // 'popular'
    });
  }, [selectedBodyType, selectedBrand, selectedFuel, maxPrice, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedBodyType('Все');
    setSelectedBrand('Все');
    setSelectedFuel('Все');
    setMaxPrice(4000000);
    setSearchQuery('');
    setSortBy('popular');
  };

  const hasActiveFilters =
    selectedBodyType !== 'Все' ||
    selectedBrand !== 'Все' ||
    selectedFuel !== 'Все' ||
    maxPrice < 4000000 ||
    searchQuery !== '';

  return (
    <section id="catalog" className="section-shell bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="section-heading flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <div className="section-kicker">
              <CarIcon className="w-3.5 h-3.5" />
              <span>Автомобили в наличии</span>
            </div>
            <h2 className="section-title text-slate-900">
              Каталог автомобилей
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Выберите модель с гарантией 3 года и возможностью оформления в кредит от 5%
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold text-slate-600" aria-live="polite">
              В наличии: <strong className="text-blue-600">{filteredCars.length}</strong> из {CARS_DATA.length} авто
            </span>

            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              aria-expanded={isMobileFiltersOpen}
              aria-controls="catalog-filters"
              className="lg:hidden flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold bg-inset hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Фильтры</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-blue-600" />
              )}
            </button>
          </div>
        </div>

        {/* Панель фильтров */}
        <div id="catalog-filters" className={`bg-inset border border-slate-200 rounded-xl p-4 mb-5 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Поиск */}
            <div>
              <label htmlFor="catalog-search" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Поиск по модели
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="catalog-search"
                  type="text"
                  placeholder="Например, X-Line, Prime..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-surface text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
                />
              </div>
            </div>

            {/* Тип кузова */}
            <div>
              <label htmlFor="catalog-body" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Тип кузова
              </label>
              <select
                id="catalog-body"
                value={selectedBodyType}
                onChange={(e) => setSelectedBodyType(e.target.value)}
                className="w-full px-3 py-2.5 bg-surface text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 cursor-pointer"
              >
                {bodyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Марка */}
            <div>
              <label htmlFor="catalog-brand" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Бренд / линейка
              </label>
              <select
                id="catalog-brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2.5 bg-surface text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 cursor-pointer"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Тип топлива */}
            <div>
              <label htmlFor="catalog-fuel" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Тип топлива
              </label>
              <select
                id="catalog-fuel"
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full px-3 py-2.5 bg-surface text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 cursor-pointer"
              >
                {fuelTypes.map((fuel) => (
                  <option key={fuel} value={fuel}>
                    {fuel}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Вторая линия фильтров: диапазон цены и сортировка */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-3 pt-3 border-t border-slate-200 items-center">
            {/* Ползунок цены */}
            <div className="sm:col-span-6 lg:col-span-5">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1.5">
                <span>Цена до:</span>
                <span className="text-blue-600 font-bold text-sm">{formatPrice(maxPrice)}</span>
              </div>
              <input
                type="range"
                aria-label="Максимальная цена автомобиля"
                min="1700000"
                max="4000000"
                step="50000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Сортировка */}
            <div className="sm:col-span-4 lg:col-span-4">
              <label htmlFor="catalog-sort" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Сортировать
              </label>
              <select
                id="catalog-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="w-full px-3 py-2.5 bg-surface text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 cursor-pointer"
              >
                <option value="popular">По популярности</option>
                <option value="price-asc">Сначала дешевле</option>
                <option value="price-desc">Сначала дороже</option>
                <option value="power">По мощности (л.с.)</option>
              </select>
            </div>

            {/* Сброс */}
            <div className="sm:col-span-2 lg:col-span-3 flex justify-start sm:justify-end items-end pt-2 sm:pt-4">
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Сбросить фильтры</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Быстрые теги кузовов */}
        <div className="lg:hidden flex items-center gap-4 overflow-x-auto pb-2 mb-4 text-xs border-b border-slate-200">
          {bodyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedBodyType(type)}
              aria-pressed={selectedBodyType === type}
              className={`py-2 font-semibold shrink-0 transition-colors cursor-pointer border-b-2 ${
                selectedBodyType === type
                  ? 'text-blue-700 border-blue-600'
                  : 'text-slate-600 border-transparent hover:text-blue-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Сетка автомобилей */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onOpenDetails={onOpenDetails}
                onBookTestDrive={onBookTestDrive}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 px-4 bg-surface rounded-xl border border-dashed border-slate-300">
            <CarIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">По выбранным параметрам авто не найдены</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Попробуйте увеличить максимальную цену или сбросить фильтры поиска.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Показать все автомобили</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
