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
              Централизованный канал связи между студентами и администрацией университета
            </li>
            <li>
              Безопасная и контролируемая среда для общения
            </li>
            <li>
              Доступность на всех устройствах
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
              Просмотр расписания учебной нагрузки
            </li>
            <li>
              Заполнение журнала текущего контроля
            </li>
            <li>
              Заполнение итоговых оценок за зачёты/экзамены
            </li>
            <li>
              Заполнение журнала посещений
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
              Заполнение и проверка отчётных документов о прохождении практик
            </li>
            <li>
              Формирование печатных форм документов
            </li>
            <li>
             Согласование пакета документов об организации и прохождении практик
            </li>
            <li>
              Коммуникация между участниками процесса
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
              Поиск и подбор вакансий
            </li>
            <li>
              Подача откликов и необходимых документов по вакансиям от соискателей
            </li>
            <li>
              Просмотр откликов и назначение собеседования
            </li>
            <li>
              Приём и проверка документов соискателями сотрудниками профильных подразделений КФУ
            </li>
            <li>
              Прохождение этапов трудоустройства: запись на медицинский осмотр, тестирование по итоам изучения инструктажей
            </li>
            <li>
              Приём заявок на создание зарплатных банковских карт
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
              Редактирование и обновление персональных данных
            </li>
            <li>
              Загрузка и управление личными документами
            </li>
            <li>
              Настройка контактной информации и способов коммуникации
            </li>
            <li>
              Гайдлайн по заполнению анкеты и требованиям к документам
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
              Просмотр текущих и итоговых оценок по дисциплинам
            </li>
            <li>
              Отслеживание академической успеваемости и рейтинга
            </li>
            <li>
              Архив оценок за все периоды обучения
            </li>
            <li>
              Оценка работы преподавателей
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
              Просмотр расписания экзаменов и консультаций
            </li>
            <li>
              Отслеживание результатов сессии и задолженностей
            </li>
            <li>
              Интеграция с электронной зачётной книжкой
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
              Автоматическое формирование индивидуального расписания занятий
            </li>
            <li>
              Маркировка по дисциплинам, типам занятий, аудиториям
            </li>
           
          </ul>
        </div>
      ),
    },
    {
      id: 'tabel',
      title: 'Табель УРВ',
      content: (
        <div className="fade-in">
          <h2 className="text-2xl font-bold mb-6">Табель УРВ</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              Автоматизация процесса формирования и согласования табеля учёта рабочего времени сотрудников
            </li>
            <li>
              Реализация электронного согласования табеля УРВ
            </li>
            <li>
              Интеграция модуля с ПП «Парус» и ИАС «Электронный университет»
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
              Создание функционала по подаче заявлений и графиков отпусков
            </li>
            <li>
              Модернизация отчетов по отпускам для сотрудников подразделений КФУ
            </li>
            <li>
              Интеграция модуля с ПП «Парус» и ИАС «Электронный университет»
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
       <h2 className="w-full font-h4 text-2xl md:text-[42px] text-dark text-center font-bold leading-[140%] mb-[40px] mt-[100px]">
          Реализованные фичи
        </h2>
      <div id="features" className="max-w-7xl mx-auto px-4 py-6">
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