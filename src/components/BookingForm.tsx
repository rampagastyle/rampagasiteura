import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Calendar, Clock, Car, User, AlertCircle, ShieldCheck, LoaderCircle } from 'lucide-react';
import { CARS_DATA } from '../data/carsData';
import { BookingFormData } from '../types';

interface BookingFormProps {
  initialType?: string;
  initialCar?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ 
  initialType = 'test-drive', 
  initialCar = '' 
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    requestType: 'test-drive',
    carModel: initialCar || 'Кроссовер X-Line Pro',
    budget: '2 000 000 - 2 500 000 ₽',
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    comment: '',
    agreed: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    if (initialType) {
      if (['test-drive', 'car-selection', 'credit', 'trade-in'].includes(initialType)) {
        setFormData((prev) => ({ ...prev, requestType: initialType as any }));
      }
    }
    if (initialCar) {
      setFormData((prev) => ({ ...prev, carModel: initialCar }));
    }
  }, [initialType, initialCar]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Пожалуйста, введите ваше имя');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^\d+]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Пожалуйста, введите корректный номер телефона (минимум 10 цифр)');
      return;
    }

    if (!formData.agreed) {
      setErrorMsg('Необходимо согласие на обработку персональных данных');
      return;
    }

    setIsSubmitting(true);

    // Имитация отправки в CRM / на почту
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderNumber('AV-' + Math.floor(100000 + Math.random() * 900000));
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      phone: '',
      requestType: 'test-drive',
      carModel: 'Кроссовер X-Line Pro',
      budget: '2 000 000 - 2 500 000 ₽',
      date: new Date().toISOString().split('T')[0],
      time: '12:00',
      comment: '',
      agreed: true,
    });
  };

  return (
    <section id="booking" className="section-shell bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-5">
          <div className="max-w-3xl">
            <div className="section-kicker text-blue-300">
              <Calendar className="w-3.5 h-3.5" />
              <span>Быстрая запись за 1 минуту</span>
            </div>

            <h2 className="section-title text-white">
              Запишитесь на тест‑драйв или бесплатный подбор авто
            </h2>

            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              Подберём модель под ваш бюджет и согласуем удобное время визита. Тест-драйв ни к чему не обязывает.
            </p>
          </div>

          <div>
            <div className="bg-inset text-slate-900 rounded-xl p-4 sm:p-5 border border-slate-200">
              {isSuccess ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Заявка успешно принята!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Спасибо, <strong>{formData.name}</strong>! Номер вашей заявки: <strong className="text-blue-600">{orderNumber}</strong>.
                    Наш менеджер свяжется с вами по номеру <strong>{formData.phone}</strong> в течение 10 минут.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
                    <div><strong>Автомобиль:</strong> {formData.carModel}</div>
                    <div><strong>Желаемое время:</strong> {formData.date} в {formData.time}</div>
                    <div><strong>Тип обращения:</strong> {
                      formData.requestType === 'test-drive' ? 'Тест-драйв' :
                      formData.requestType === 'car-selection' ? 'Подбор автомобиля' :
                      formData.requestType === 'credit' ? 'Расчёт кредита' : 'Трейд-ин'
                    }</div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-4">
                  {/* Выбор типа заявки */}
                  <div className="lg:col-span-3">
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Цель обращения:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-2xl">
                      {[
                        { id: 'test-drive', label: 'Тест-драйв' },
                        { id: 'car-selection', label: 'Подбор авто' },
                        { id: 'credit', label: 'Кредит 5%' },
                        { id: 'trade-in', label: 'Трейд-ин' },
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, requestType: type.id as any })}
                          className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer text-center ${
                            formData.requestType === type.id
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Имя и Телефон */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Ваше имя <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Иван Петров"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Номер телефона <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="+7 (999) 000-00-00"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Желаемая модель или бюджет */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Интересующая модель
                      </label>
                      <div className="relative">
                        <Car className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={formData.carModel}
                          onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-surface cursor-pointer"
                        >
                          {CARS_DATA.map((car) => (
                            <option key={car.id} value={car.name}>
                              {car.name}
                            </option>
                          ))}
                          <option value="Другая модель">Другая модель / любая</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Планируемый бюджет
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-surface cursor-pointer"
                      >
                        <option value="до 2 000 000 ₽">до 2 000 000 ₽</option>
                        <option value="2 000 000 - 2 500 000 ₽">2 000 000 - 2 500 000 ₽</option>
                        <option value="2 500 000 - 3 500 000 ₽">2 500 000 - 3 500 000 ₽</option>
                        <option value="от 3 500 000 ₽">от 3 500 000 ₽</option>
                      </select>
                    </div>
                  </div>

                  {/* Дата и время визита */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Удобная дата визита
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Удобное время
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-surface cursor-pointer"
                        >
                          <option value="10:00">10:00 (Утро)</option>
                          <option value="12:00">12:00 (День)</option>
                          <option value="15:00">15:00 (День)</option>
                          <option value="18:00">18:00 (Вечер)</option>
                          <option value="20:00">20:00 (Вечер)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Ошибка валидации */}
                  {errorMsg && (
                    <div role="alert" className="lg:col-span-3 flex items-center gap-2 text-rose-600 bg-rose-50 p-3 rounded-lg text-xs font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Согласие */}
                  <label className="lg:col-span-2 flex items-center gap-2.5 cursor-pointer max-w-2xl">
                    <input
                      type="checkbox"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="shrink-0 rounded accent-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                    <span className="text-xs text-slate-600 leading-normal">
                      Я согласен на обработку персональных данных и подтверждаю ознакомление с правилами автосалона. Конфиденциальность гарантируется.
                    </span>
                  </label>

                  {/* Кнопка отправки */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <LoaderCircle className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    <span>{isSubmitting ? 'Отправка заявки...' : 'Отправить заявку'}</span>
                  </button>

                  <div className="lg:col-span-3 flex items-center gap-1.5 text-[11px] text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Используем контактные данные только для связи по вашей заявке</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
