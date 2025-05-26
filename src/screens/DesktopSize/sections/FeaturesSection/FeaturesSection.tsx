import React, { useState } from 'react';
import { Button, ConfigProvider } from 'antd';
import { Globe, BookOpen, Users, Briefcase, User, CheckSquare, Calendar, ClipboardList, Table, Clock } from 'lucide-react';

// Определение типа данных для слайда
interface SlideData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const FeaturesSection: React.FC = () => {
  // Создаем данные для каждого слайда
  const slides: SlideData[] = [
    {
      id: 'bilingual',
      title: 'Двуязычность',
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Двуязычность</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Управляй учёбой на удобном для тебя языке: выбирай русский
              или английский в личном кабинете
            </li>
            <li>
              Международная среда: подготовка к общению и работе в глобальном мире
            </li>
            <li>
              Более широкий доступ к информации: используй ресурсы университета
              на двух языках
            </li>
            <li>
              Развитие языковых навыков: практикуй английский в привычной учебной
              среде
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'messenger',
      title: 'Мессенджер',
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Мессенджер</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Общайся с преподавателями и сокурсниками в удобном университетском мессенджере
            </li>
            <li>
              Создавай групповые чаты для обсуждения проектов и совместной работы
            </li>
            <li>
              Получай важные уведомления о занятиях и изменениях в расписании
            </li>
            <li>
              Обменивайся файлами и учебными материалами прямо в чате
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'teacher',
      title: 'Преподавателю',
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Преподавателю</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Удобный доступ к расписанию занятий и консультаций
            </li>
            <li>
              Инструменты для размещения учебных материалов и заданий
            </li>
            <li>
              Система оценивания и обратной связи со студентами
            </li>
            <li>
              Аналитика успеваемости и посещаемости групп
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'practices',
      title: 'Практики студентов',
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Практики студентов</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Информация о доступных местах практики в компаниях-партнерах
            </li>
            <li>
              Календарь практик с важными датами и дедлайнами
            </li>
            <li>
              Система загрузки отчетов и получения обратной связи
            </li>
            <li>
              Рейтинг мест практики на основе отзывов студентов
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'employment',
      title: 'Трудоустройство',
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Трудоустройство</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Актуальные вакансии от компаний-партнеров университета
            </li>
            <li>
              Помощь в составлении резюме и подготовке к собеседованиям
            </li>
            <li>
              Карьерные консультации и профориентация
            </li>
            <li>
              Истории успеха выпускников и их карьерные траектории
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'about',
      title: 'Обо мне',
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Обо мне</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Личная информация и настройки профиля
            </li>
            <li>
              Достижения и портфолио студента
            </li>
            <li>
              Персональная успеваемость и рейтинг
            </li>
            <li>
              Индивидуальная образовательная траектория
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'credit',
      title: 'Зачётка',
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Зачётка</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Электронная зачетная книжка с оценками по всем предметам
            </li>
            <li>
              История сдачи экзаменов и зачетов
            </li>
            <li>
              Текущий рейтинг и академическая статистика
            </li>
            <li>
              Прогноз успеваемости и рекомендации по улучшению результатов
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'session',
      title: 'Сессия',
    
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Сессия</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Расписание экзаменов с указанием аудиторий и времени
            </li>
            <li>
              Информация о преподавателях, принимающих экзамены
            </li>
            <li>
              Материалы для подготовки и примеры экзаменационных заданий
            </li>
            <li>
              Система записи на пересдачи и консультации
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'schedule',
      title: 'Расписание',
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Расписание</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Интерактивное расписание занятий с возможностью фильтрации
            </li>
            <li>
              Уведомления об изменениях в расписании
            </li>
            <li>
              Персональный календарь с важными датами и дедлайнами
            </li>
            <li>
              Синхронизация с популярными календарными приложениями
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'vacation',
      title: 'Отпуск',
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Отпуск</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Процедура оформления академического отпуска
            </li>
            <li>
              Календарь каникул и праздничных дней
            </li>
            <li>
              Информация о возможностях для отдыха в студенческих лагерях
            </li>
            <li>
              Специальные предложения для студентов на время каникул
            </li>
          </ul>
        </div>
      ),
    },
  ];

  // Состояние для отслеживания текущего активного слайда
  const [activeSlide, setActiveSlide] = useState<string>(slides[0].id);

  // Функция для переключения слайда
  const handleSlideChange = (slideId: string) => {
    setActiveSlide(slideId);
  };

  // Находим текущий слайд для отображения
  const currentSlide = slides.find((slide) => slide.id === activeSlide) || slides[0];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677FF',
          borderRadius: 6,
        },
      }}
    >
       <h2 className="w-full font-h4 text-2xl md:text-[42px] text-dark text-center font-bold leading-[140%]">
          Реализованные фичи
        </h2>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Навигационные кнопки */}
        <div className="flex flex-wrap gap-2 mb-8">
          {slides.map((slide) => (
            <Button
              key={slide.id}
              type={activeSlide === slide.id ? 'primary' : 'default'}
              onClick={() => handleSlideChange(slide.id)}
              className={` border-1 border-solid border-black p-2 text-sm transition-all duration-300 rounded-full  h-full flex items-center ${
                
                activeSlide === slide.id
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {slide.title}
            </Button>
          ))}
        </div>

        {/* Контейнер для слайдов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 rounded-lg p-6 shadow-sm min-h-[400px]">
          {/* Левая часть - изображение (заглушка) */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <div className="text-center text-gray-500 p-8">
              <div className="text-5xl mb-4">
              </div>
              <p className="text-lg">Визуализация для "{currentSlide.title}"</p>
            </div>
          </div>

          {/* Правая часть - контент */}
          <div className="flex flex-col justify-center">
            {currentSlide.content}
          </div>
        </div>
      </div>

      
    </ConfigProvider>
  );
};

export default FeaturesSection;