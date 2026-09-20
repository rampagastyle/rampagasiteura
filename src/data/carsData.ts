import { Car } from '../types';

/**
 * КАТАЛОГ АВТОМОБИЛЕЙ АВТОСАЛОНА «АВТОВЕКТОР» (2026 год)
 * 
 * Для каждого автомобиля можно легко поменять:
 * - name, brand, bodyType, year, price, monthlyPayment
 * - ТТХ: engine, power, transmission, drive, fuel, acceleration, consumption
 * - 3 РАКУРСА ФОТОГРАФИЙ в объекте images:
 *     front: фас (вид спереди)
 *     side: профиль (вид сбоку)
 *     interior: салон (вид изнутри)
 * 
 * Фотографии можно класть прямо в папку: public/images/cars/
 * и указывать путь вида: '/images/cars/my-model-front.jpg'
 */
export const CARS_DATA: Car[] = [
  {
    id: 'car-1',
    name: 'Кроссовер X-Line Pro',
    brand: 'X-Line',
    bodyType: 'Кроссовер',
    price: 2450000,
    oldPrice: 2620000,
    monthlyPayment: 18900,
    year: 2026,
    engine: '2.0 л, 150 л.с.',
    power: 150,
    fuel: 'Бензин',
    transmission: 'АКПП',
    drive: 'Передний',
    acceleration: '9.8 сек',
    consumption: '7.4 л / 100 км',
    images: {
      front: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    },
    features: [
      'Климат-контроль 2-зонный',
      'Мультимедиа 10.25" с Apple CarPlay и Android Auto',
      'Камера кругового обзора 360°',
      'Светодиодная оптика Full-LED',
      'Теплый пакет (обогрев всех сидений и руля)'
    ],
    inStock: true,
    hasPts: true,
    badge: 'Хит продаж',
    description: 'Универсальный городской кроссовер с увеличенным клиренсом 195 мм, экономичным двигателем и современным оснащением для комфортных поездок всей семьёй.'
  },
  {
    id: 'car-2',
    name: 'Седан Grand Prime',
    brand: 'Grand',
    bodyType: 'Седан',
    price: 2190000,
    oldPrice: 2350000,
    monthlyPayment: 16800,
    year: 2026,
    engine: '1.6 л Turbo, 160 л.с.',
    power: 160,
    fuel: 'Бензин',
    transmission: 'АКПП',
    drive: 'Передний',
    acceleration: '8.5 сек',
    consumption: '6.8 л / 100 км',
    images: {
      front: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
    },
    features: [
      'Кожаный салон Nappa',
      'Адаптивный круиз-контроль',
      'Виртуальная цифровая приборная панель',
      'Премиальная акустика 8 динамиков',
      'Бесключевой доступ и запуск с кнопки'
    ],
    inStock: true,
    hasPts: true,
    badge: 'Выгода до 160 000 ₽',
    description: 'Динамичный и элегантный бизнес-седан с просторным вторым рядом, отличной шумоизоляцией и интеллектуальными ассистентами безопасности.'
  },
  {
    id: 'car-3',
    name: 'Внедорожник Terra 4x4',
    brand: 'Terra',
    bodyType: 'Внедорожник',
    price: 3680000,
    oldPrice: 3890000,
    monthlyPayment: 27500,
    year: 2026,
    engine: '2.5 л Дизель, 204 л.с.',
    power: 204,
    fuel: 'Дизель',
    transmission: 'АКПП',
    drive: 'Полный',
    acceleration: '9.2 сек',
    consumption: '8.2 л / 100 км',
    images: {
      front: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
    },
    features: [
      'Полноценный полный привод 4WD с блокировкой',
      'Дорожный просвет 225 мм',
      'Вентиляция и память настроек кресел',
      'Панорамная стеклянная крыша',
      'Электропривод двери багажника с датчиком маха'
    ],
    inStock: true,
    hasPts: true,
    badge: 'Полный привод',
    description: 'Надёжный рамный внедорожник для любых дорог и направлений. Высокая проходимость, тяговитый дизель и премиальный комфорт.'
  },
  {
    id: 'car-4',
    name: 'Лифтбек SportDrive GT',
    brand: 'SportDrive',
    bodyType: 'Лифтбек',
    price: 2820000,
    oldPrice: 3050000,
    monthlyPayment: 21500,
    year: 2026,
    engine: '2.0 л Turbo, 190 л.с.',
    power: 190,
    fuel: 'Бензин',
    transmission: 'Робот',
    drive: 'Передний',
    acceleration: '7.3 сек',
    consumption: '7.1 л / 100 км',
    images: {
      front: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80',
    },
    features: [
      'Спортивные сиденья с развитой поддержкой',
      'Спортивная выхлопная система',
      '18-дюймовые легкосплавные диски',
      'Беспроводная зарядка смартфона',
      'Система контроля слепых зон'
    ],
    inStock: true,
    hasPts: true,
    badge: 'Модель 2026',
    description: 'Атлетичный силуэт, быстрый разгон и вместительное багажное отделение с электроприводом пятой двери. Идеален для активных водителей.'
  },
  {
    id: 'car-5',
    name: 'Кроссовер Urban Max',
    brand: 'Urban',
    bodyType: 'Кроссовер',
    price: 1980000,
    oldPrice: 2140000,
    monthlyPayment: 15400,
    year: 2026,
    engine: '1.5 л Turbo, 143 л.с.',
    power: 143,
    fuel: 'Бензин',
    transmission: 'Вариатор',
    drive: 'Передний',
    acceleration: '10.2 сек',
    consumption: '6.9 л / 100 км',
    images: {
      front: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80',
    },
    features: [
      'Компактные размеры для легкой парковки',
      'Парктроники спереди и сзади',
      'LED оптика с датчиком света',
      'Экономичный вариатор нового поколения',
      'Подогрев лобового стекла и форсунок'
    ],
    inStock: true,
    hasPts: true,
    badge: 'Лучшая цена',
    description: 'Оптимальное сочетание цены и оснащения. Маневренный, экономичный и неприхотливый городской автомобиль.'
  },
  {
    id: 'car-6',
    name: 'Седан City Comfort',
    brand: 'Comfort',
    bodyType: 'Седан',
    price: 1750000,
    oldPrice: 1890000,
    monthlyPayment: 13500,
    year: 2026,
    engine: '1.6 л, 123 л.с.',
    power: 123,
    fuel: 'Бензин',
    transmission: 'АКПП',
    drive: 'Передний',
    acceleration: '11.1 сек',
    consumption: '6.5 л / 100 км',
    images: {
      front: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=1200&q=80',
    },
    features: [
      'Проверенный атмосферный двигатель',
      'Классический 6-ступенчатый автомат',
      'Объём багажника 500 литров',
      'Кондиционер с салонным фильтром',
      'Антикоррозийная обработка кузова'
    ],
    inStock: true,
    hasPts: true,
    badge: 'Кредит от 4.9%',
    description: 'Надёжный, проверенный временем седан с просторным салоном и вместительным багажником. Минимальные расходы на обслуживание.'
  },
  {
    id: 'car-7',
    name: 'Электрокроссовер Future EV',
    brand: 'Future',
    bodyType: 'Кроссовер',
    price: 3490000,
    oldPrice: 3750000,
    monthlyPayment: 26000,
    year: 2026,
    engine: 'Электро, 218 л.с.',
    power: 218,
    fuel: 'Электро',
    transmission: 'АКПП',
    drive: 'Полный',
    acceleration: '6.7 сек',
    consumption: 'Запас хода 520 км',
    images: {
      front: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    },
    features: [
      'Батарея 78 кВт⋅ч (быстрая зарядка за 30 мин)',
      'Интеллектуальный автопилот 2-го уровня',
      'Сдвоенный 15.6" дисплей с голосовым управлением',
      'Пневмоподвеска с регулировкой клиренса',
      'Бесшумный ход и мгновенный крутящий момент'
    ],
    inStock: true,
    hasPts: true,
    badge: 'Электро 2026',
    description: 'Инновационный полностью электрический кроссовер с запасом хода до 520 км, нулевым расходом топлива и передовой мультимедиа-системой.'
  },
  {
    id: 'car-8',
    name: 'Минивэн Family Star 7S',
    brand: 'Family',
    bodyType: 'Минивэн',
    price: 3250000,
    oldPrice: 3450000,
    monthlyPayment: 24200,
    year: 2026,
    engine: '2.0 л Дизель, 177 л.с.',
    power: 177,
    fuel: 'Дизель',
    transmission: 'АКПП',
    drive: 'Передний',
    acceleration: '10.5 сек',
    consumption: '7.0 л / 100 км',
    images: {
      front: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    },
    features: [
      '7 полноценных комфортабельных мест (2+2+3)',
      'Сдвижные боковые двери с электроприводом',
      '3-зонный климат-контроль с дефлекторами на 3 ряда',
      'Встроенные столики для пассажиров',
      'Огромный багажник при сложенном 3-м ряде'
    ],
    inStock: true,
    hasPts: true,
    badge: 'Для семьи',
    description: 'Идеальный семейный автомобиль на 7 посадочных мест для путешествий и города с максимальным уровнем комфорта для каждого пассажира.'
  }
];
