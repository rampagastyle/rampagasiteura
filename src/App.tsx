import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { CarModal } from './components/CarModal';
import { Advantages } from './components/Advantages';
import { Services } from './components/Services';
import { Promotions } from './components/Promotions';
import { Gallery } from './components/Gallery';
import { Contacts } from './components/Contacts';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { PhotoNoticeModal } from './components/PhotoNoticeModal';
import { Car } from './types';
import { Phone } from 'lucide-react';
import { DEALERSHIP_INFO } from './data/dealershipData';

export default function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [bookingType, setBookingType] = useState<string>('test-drive');
  const [bookingCar, setBookingCar] = useState<string>('');
  const [isPhotoGuideOpen, setIsPhotoGuideOpen] = useState<boolean>(false);

  const scrollToBooking = (type: string = 'test-drive', carName: string = '') => {
    setBookingType(type);
    if (carName) {
      setBookingCar(carName);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalog = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDetails = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseDetails = () => {
    setSelectedCar(null);
  };

  const handleBookTestDrive = (carName: string) => {
    scrollToBooking('test-drive', carName);
  };

  return (
    <div id="top" className="min-h-screen bg-canvas text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Шапка сайта */}
      <Header onOpenBooking={scrollToBooking} />

      {/* 1. Первый экран (Hero) */}
      <Hero
        onOpenBooking={scrollToBooking}
        onExploreCatalog={scrollToCatalog}
      />

      {/* 2. О компании */}
      <About onOpenBooking={scrollToBooking} />

      {/* 3. Каталог автомобилей */}
      <Catalog
        onOpenDetails={handleOpenDetails}
        onBookTestDrive={handleBookTestDrive}
      />

      {/* 4. Преимущества */}
      <Advantages onOpenBooking={scrollToBooking} />

      {/* 5. Услуги и калькулятор */}
      <Services onOpenBooking={scrollToBooking} />

      {/* 6. Акции и спецпредложения */}
      <Promotions onOpenBooking={scrollToBooking} />

      {/* 7. Галерея */}
      <Gallery />

      {/* 8. Контакты и локация */}
      <Contacts />

      {/* 9. Форма заявки */}
      <BookingForm
        initialType={bookingType}
        initialCar={bookingCar}
      />

      {/* 10. Футер */}
      <Footer onOpenPhotoGuide={() => setIsPhotoGuideOpen(true)} />

      {/* Модальное окно просмотра деталей авто */}
      {selectedCar && (
        <CarModal
          key={selectedCar.id}
          car={selectedCar}
          onClose={handleCloseDetails}
          onBookTestDrive={handleBookTestDrive}
        />
      )}

      {/* Модальное окно справки по фотографиям */}
      <PhotoNoticeModal
        isOpen={isPhotoGuideOpen}
        onClose={() => setIsPhotoGuideOpen(false)}
      />

      {/* Плавающие кнопки: быстрый доступ к инструкции и звонку */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsPhotoGuideOpen(true)}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-slate-900/90 hover:bg-slate-900 text-slate-200 text-xs font-semibold rounded-lg shadow-lg border border-slate-700/80 backdrop-blur-md transition-all cursor-pointer"
          title="Как легко менять контакты, тексты и фото"
        >
          <span>Редактирование сайта (2026)</span>
        </button>

        <a
          href={`tel:${DEALERSHIP_INFO.phoneRaw}`}
          className="sm:hidden w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl active:scale-90 transition-transform"
          aria-label="Позвонить в автосалон"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
