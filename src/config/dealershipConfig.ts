/**
 * ЕДИНЫЙ КОНФИГУРАЦИОННЫЙ ФАЙЛ АВТОСАЛОНА (2026 год)
 * 
 * Здесь вы можете в ОДНОМ месте поменять все базовые контакты, тексты,
 * режим работы, телефоны, email, адреса, ссылки на мессенджеры и соцсети,
 * а также общие фотографии автосалона (фасад, шоурум, команда, сервис).
 * 
 * Все изменения сразу же отображаются во всех блоках сайта:
 * в шапке, подвале, блоке контактов, форме заявки и на карте.
 */

export interface DealershipConfig {
  // Название и слоган
  brandName: string;
  brandAccent: string;
  fullName: string;
  tagline: string;
  city: string;

  // Контактные данные
  phone: string;
  phoneRaw: string; // формат без пробелов и скобок для tel: ссылки (+74958904422)
  tollFreePhone: string; // бесплатная линия 8-800
  email: string;
  feedbackEmail: string;

  // Физический адрес и ориентиры
  address: string;
  metro: string;
  parkingInfo: string;
  coordinates: {
    lat: number;
    lng: number;
    display: string;
  };
  navigationLinks: {
    yandex: string;
    google: string;
  };

  // Режим работы
  workingHours: string;
  workingDays: string;
  salesDeptHours: string;
  serviceDeptHours: string;
  statusBadge: string;

  // Числа и метрики (актуализировано на 2026 год)
  establishedYear: number;
  yearsOnMarket: number; // 2012 -> 2026 (14 лет)
  carsSold: string;
  carsInStock: string;
  creditMinRate: string;
  warrantyYears: number;
  serviceBaysCount: number;
  partnerBanksCount: number;

  // Ссылки на социальные сети и мессенджеры
  socials: {
    vk: string;
    telegram: string;
    youtube: string;
    whatsapp?: string;
  };

  // Основные фотографии автосалона (можно ставить ссылки http://... или локальные /images/...)
  photos: {
    exterior: string;    // Фасад здания
    showroom: string;    // Главный шоурум
    serviceZone: string; // Зона сервиса и ТО
    team: string;        // Команда автосалона
    heroBackground: string; // Фоновое фото на первом экране
  };

  // Тексты юридического блока и дисклеймеров
  legal: {
    copyrightYear: number; // 2026
    legalNotice: string;
  };
}

export const DEALERSHIP_CONFIG: DealershipConfig = {
  // Название компании
  brandName: 'Авто',
  brandAccent: 'Вектор',
  fullName: 'Автосалон «АвтоВектор»',
  tagline: 'Автомобили с характером и официальной гарантией',
  city: 'Москва',

  // Телефоны и почта для связи
  phone: '+7 (495) 890-44-22',
  phoneRaw: '+74958904422',
  tollFreePhone: '8 (800) 550-20-30',
  email: 'rampaga@autovector-motors.ru',
  feedbackEmail: 'client@autovector-motors.ru',

  // Адрес салона и транспортная доступность
  address: 'г. Москва, Варшавское шоссе, д. 125, стр. 1',
  metro: 'м. Южная (300 м) / м. Пражская',
  parkingInfo: 'Собственная охраняемая парковка на 25 мест для клиентов',
  coordinates: {
    lat: 55.622415,
    lng: 37.600982,
    display: '55.622415, 37.600982'
  },
  navigationLinks: {
    yandex: 'https://yandex.ru/maps/?rtext=~55.622415,37.600982',
    google: 'https://maps.google.com/?q=55.622415,37.600982'
  },

  // График работы
  workingHours: 'Ежедневно с 09:00 до 21:00 (без перерывов)',
  workingDays: 'Без выходных и праздников',
  salesDeptHours: 'Отдел продаж: 09:00 — 21:00',
  serviceDeptHours: 'Сервисный центр: 08:00 — 21:00',
  statusBadge: 'Открыты сегодня до 21:00',

  // Метрики компании (на 2026 год: 14 лет работы, более 10 500 проданных авто)
  establishedYear: 2012,
  yearsOnMarket: 14,
  carsSold: '10 500+',
  carsInStock: '140+',
  creditMinRate: 'от 4.9%',
  warrantyYears: 3,
  serviceBaysCount: 12,
  partnerBanksCount: 16,

  // Соцсети и мессенджеры
  socials: {
    vk: 'https://vk.com',
    telegram: 'https://t.me',
    youtube: 'https://youtube.com',
    whatsapp: 'https://wa.me/74958904422'
  },

  // Ключевые фотографии разделов
  // Замените эти ссылки на ваши файлы из папки public/images/...
  photos: {
    exterior: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
    showroom: 'https://images.unsplash.com/photo-1562920616-0447387342bf?auto=format&fit=crop&w=1200&q=80',
    serviceZone: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80',
    team: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
    heroBackground: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85'
  },

  // Юридическая информация
  legal: {
    copyrightYear: 2026,
    legalNotice: 'Вся представленная на сайте информация, касающаяся комплектаций, технических характеристик, наличия и стоимости автомобилей, носит исключительно справочный характер и не является публичной офертой (ст. 437 ГК РФ).'
  }
};
