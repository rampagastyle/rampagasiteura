import { AdvantageItem, GalleryPhoto, PromoItem, ServiceItem } from '../types';
import { DEALERSHIP_CONFIG } from '../config/dealershipConfig';

/**
 * РЕЭКСПОРТ ДАННЫХ ИЗ КОНФИГА
 * Для обратной совместимости DEALERSHIP_INFO берёт все базовые значения
 * напрямую из единого файла src/config/dealershipConfig.ts
 */
export const DEALERSHIP_INFO = {
  name: DEALERSHIP_CONFIG.brandName + DEALERSHIP_CONFIG.brandAccent,
  fullName: DEALERSHIP_CONFIG.fullName,
  slogan: DEALERSHIP_CONFIG.tagline,
  establishedYear: DEALERSHIP_CONFIG.establishedYear,
  yearsOnMarket: DEALERSHIP_CONFIG.yearsOnMarket,
  carsSold: DEALERSHIP_CONFIG.carsSold,
  carsInStock: DEALERSHIP_CONFIG.carsInStock,
  approvalRate: '98%',
  banksCount: DEALERSHIP_CONFIG.partnerBanksCount,
  warrantyYears: DEALERSHIP_CONFIG.warrantyYears,
  address: DEALERSHIP_CONFIG.address,
  metro: DEALERSHIP_CONFIG.metro,
  phone: DEALERSHIP_CONFIG.phone,
  phoneRaw: DEALERSHIP_CONFIG.phoneRaw,
  tollFreePhone: DEALERSHIP_CONFIG.tollFreePhone,
  email: DEALERSHIP_CONFIG.email,
  workingHours: DEALERSHIP_CONFIG.workingHours,
  statusBadge: DEALERSHIP_CONFIG.statusBadge,
  showroomImage: DEALERSHIP_CONFIG.photos.showroom,
  teamImage: DEALERSHIP_CONFIG.photos.team,
  serviceZoneImage: DEALERSHIP_CONFIG.photos.serviceZone,
  exteriorImage: DEALERSHIP_CONFIG.photos.exterior,
  heroBackgroundImage: DEALERSHIP_CONFIG.photos.heroBackground,
  coordinates: DEALERSHIP_CONFIG.coordinates,
  navigationLinks: DEALERSHIP_CONFIG.navigationLinks,
  socials: DEALERSHIP_CONFIG.socials,
  legalNotice: DEALERSHIP_CONFIG.legal.legalNotice,
  copyrightYear: DEALERSHIP_CONFIG.legal.copyrightYear,
};

export const ADVANTAGES: AdvantageItem[] = [
  {
    title: `Кредит ${DEALERSHIP_CONFIG.creditMinRate}`,
    subtitle: `${DEALERSHIP_CONFIG.partnerBanksCount}+ банков-партнеров. Решение за 15 минут, без первого взноса.`,
    metric: `${DEALERSHIP_CONFIG.creditMinRate} годовых`,
    iconName: 'Percent'
  },
  {
    title: 'Трейд‑ин за 1 день',
    subtitle: 'Честная оценка по рыночной стоимости. Дополнительная скидка до 150 000 ₽.',
    metric: 'до 150 000 ₽ выгода',
    iconName: 'RefreshCw'
  },
  {
    title: 'Тест‑драйв без обязательств',
    subtitle: 'Индивидуальный маршрут: город и свободный участок трассы в удобное для вас время.',
    metric: '30 минут за рулём',
    iconName: 'Gauge'
  },
  {
    title: `Гарантия ${DEALERSHIP_CONFIG.warrantyYears} года`,
    subtitle: `Полное сервисное сопровождение ${DEALERSHIP_CONFIG.warrantyYears} года или 100 000 км пробега.`,
    metric: `${DEALERSHIP_CONFIG.warrantyYears} года или 100 000 км`,
    iconName: 'ShieldCheck'
  },
  {
    title: 'Сервис на месте',
    subtitle: `Собственный современный техцентр: ${DEALERSHIP_CONFIG.serviceBaysCount} постов, диагностика и склад запчастей.`,
    metric: `${DEALERSHIP_CONFIG.serviceBaysCount} постов ТО`,
    iconName: 'Wrench'
  },
  {
    title: 'Помощь в регистрации',
    subtitle: 'Оформление в ГИБДД за 1 час. Получайте готовый авто с номерами прямо в автосалоне.',
    metric: '1 час в ГИБДД',
    iconName: 'FileCheck'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'credit',
    title: 'Автокредитование',
    shortDesc: 'Оформление кредита на специальных условиях от банков-партнёров с господдержкой.',
    highlightText: `Ставка ${DEALERSHIP_CONFIG.creditMinRate} • Без первого взноса`,
    features: [
      `Ставка ${DEALERSHIP_CONFIG.creditMinRate} годовых`,
      'Первоначальный взнос от 0%',
      'Срок кредитования до 8 лет',
      'Одобрение по двум документам за 15 минут'
    ],
    tag: 'Финансы',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tradein',
    title: 'Программа Трейд-ин',
    shortDesc: 'Обменяйте ваш текущий автомобиль на новый за 1 час с максимальной выгодой.',
    highlightText: 'Оценка выше рынка • Скидка до 150 000 ₽',
    features: [
      'Бесплатная диагностика и честная оценка',
      'Деньги в счёт первого взноса по кредиту',
      'Принимаем любые марки и года выпуска',
      'Юридическая чистота и быстрое переоформление'
    ],
    tag: 'Обмен',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'insurance',
    title: 'Автострахование',
    shortDesc: 'Полный комплекс страховых услуг КАСКО и ОСАГО от ведущих страховых компаний РФ.',
    highlightText: 'Скидки до 20% при оформлении в салоне',
    features: [
      'Подбор оптимального тарифа КАСКО / ОСАГО',
      'Защита от угона, ущерба и тотала',
      'Удалённое урегулирование убытков',
      'Рассрочка на страховку без переплат'
    ],
    tag: 'Защита',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'service',
    title: 'Сервисный центр и ТО',
    shortDesc: 'Сертифицированное техническое обслуживание, гарантийный ремонт и установка доп. оборудования.',
    highlightText: 'Гарантия на все работы и детали',
    features: [
      'Компьютерная диагностика систем',
      'Оригинальные расходники и масла',
      'Установка сигнализаций и шумоизоляции',
      'Комфортная зона ожидания с кофе и Wi-Fi'
    ],
    tag: 'Сервис',
    image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'registration',
    title: 'Регистрация в ГИБДД',
    shortDesc: 'Официальная постановка автомобиля на учёт без очередей и поездок в МРЭО.',
    highlightText: 'Номера прямо в автосалоне за 60 минут',
    features: [
      'Выдача госномеров и СТС в день выдачи',
      'Проверка истории и юридической чистоты',
      'Подготовка полного пакета документов',
      'Экономия вашего личного времени'
    ],
    tag: 'Документы',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROMOTIONS: PromoItem[] = [
  {
    id: 'promo-1',
    title: 'Комплект зимней резины или ТО-1 в подарок',
    badge: 'Подарок к авто',
    period: 'До конца месяца',
    benefit: 'Выгода до 80 000 ₽',
    description: 'При покупке любого кроссовера или седана до конца месяца дарим комплект премиальных шин или первое ТО.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'promo-2',
    title: 'Специальная субсидия по Трейд-ин',
    badge: 'Выгода трейд-ин',
    period: 'Действует сейчас',
    benefit: 'Скидка до 150 000 ₽',
    description: 'Сдайте старый автомобиль любой марки и получите прямую скидку на покупку нового авто из наличия.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'promo-3',
    title: `Льготный автокредит со ставкой ${DEALERSHIP_CONFIG.creditMinRate}`,
    badge: 'Госпрограмма 2026',
    period: 'Ограниченный лимит',
    benefit: 'Платеж от 13 500 ₽/мес',
    description: 'Субсидированная ставка от ведущих банков. Оформление без КАСКО и скрытых комиссий по двум документам.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Главный шоурум автосалона',
    category: 'showroom',
    categoryLabel: 'Шоурум',
    url: DEALERSHIP_CONFIG.photos.showroom,
    description: 'Просторный светлый выставочный зал с новейшими моделями'
  },
  {
    id: 'gal-2',
    title: 'Кроссовер X-Line Pro в экспозиции',
    category: 'cars',
    categoryLabel: 'Автомобили',
    url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    description: 'Топовая комплектация с панорамной крышей'
  },
  {
    id: 'gal-3',
    title: 'Зона сервисного обслуживания',
    category: 'service',
    categoryLabel: 'Сервисная зона',
    url: DEALERSHIP_CONFIG.photos.serviceZone,
    description: `${DEALERSHIP_CONFIG.serviceBaysCount} подъёмников, сертифицированное оборудование и мастера`
  },
  {
    id: 'gal-4',
    title: 'Команда отдела продаж и клиентского сервиса',
    category: 'team',
    categoryLabel: 'Команда',
    url: DEALERSHIP_CONFIG.photos.team,
    description: 'Персональные менеджеры, готовые подобрать идеальный авто'
  },
  {
    id: 'gal-5',
    title: 'Бизнес-седан Grand Prime',
    category: 'cars',
    categoryLabel: 'Автомобили',
    url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
    description: 'Элегантный кузов, дневное освещение в презентационной зоне'
  },
  {
    id: 'gal-6',
    title: 'Комфортабельная клиентская зона ожидания',
    category: 'showroom',
    categoryLabel: 'Шоурум',
    url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
    description: 'Кофе-бар, скоростной Wi-Fi и мониторы с ходом сервисных работ'
  },
  {
    id: 'gal-7',
    title: 'Пост высокоточной компьютерной диагностики',
    category: 'service',
    categoryLabel: 'Сервисная зона',
    url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
    description: 'Проверка электроники, ходовой части и тормозных стендов'
  },
  {
    id: 'gal-8',
    title: 'Консультация клиента кредитным специалистом',
    category: 'team',
    categoryLabel: 'Команда',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    description: 'Индивидуальный расчёт комфортного графика платежей'
  },
  {
    id: 'gal-9',
    title: 'Внедорожник Terra 4x4 перед выдачей',
    category: 'cars',
    categoryLabel: 'Автомобили',
    url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Предпродажная подготовка и полировка кузова'
  }
];
