export type BodyType = 'Седан' | 'Кроссовер' | 'Внедорожник' | 'Лифтбек' | 'Хэтчбек' | 'Минивэн';
export type FuelType = 'Бензин' | 'Дизель' | 'Гибрид' | 'Электро';
export type TransmissionType = 'АКПП' | 'МКПП' | 'Вариатор' | 'Робот';
export type DriveType = 'Передний' | 'Полный' | 'Задний';

export interface Car {
  id: string;
  name: string;
  brand: string;
  bodyType: BodyType;
  price: number;
  oldPrice?: number;
  monthlyPayment: number;
  year: number;
  engine: string;
  power: number; // л.с.
  fuel: FuelType;
  transmission: TransmissionType;
  drive: DriveType;
  acceleration: string; // 0-100 км/ч
  consumption: string; // л/100 км
  images: {
    front: string;
    side: string;
    interior: string;
  };
  features: string[];
  inStock: boolean;
  hasPts: boolean;
  badge?: string;
  description: string;
}

export interface CatalogFilter {
  brand: string;
  bodyType: string;
  fuel: string;
  transmission: string;
  maxPrice: number;
  search: string;
  sortBy: 'price-asc' | 'price-desc' | 'popular' | 'power';
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  features: string[];
  image: string;
  tag: string;
  highlightText: string;
}

export interface PromoItem {
  id: string;
  title: string;
  badge: string;
  period: string;
  benefit: string;
  description: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'showroom' | 'cars' | 'service' | 'team';
  categoryLabel: string;
  url: string;
  description: string;
}

export interface AdvantageItem {
  title: string;
  subtitle: string;
  metric: string;
  iconName: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  requestType: 'test-drive' | 'car-selection' | 'credit' | 'trade-in';
  carModel: string;
  budget: string;
  date: string;
  time: string;
  comment: string;
  agreed: boolean;
}
