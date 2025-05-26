import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  year: string;
  image: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  statusText: string;
  description: string;
  features: string[];
  additionalFeatures?: string[];
}

interface TimelineCarouselProps {
  items: TimelineItem[];
}

export const RoadmapSection: React.FC<TimelineCarouselProps> = () => {
  const items = [
  {
    id: 'project-1',
    title: 'Фаза 1',
    date: 'Январь 2024',
    year: '2024',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    status: 'completed',
    statusText: 'Завершено',
    description: 'Начальный этап разработки',
    features: [
      'Анализ требований и планирование',
      'Разработка архитектуры проекта',
      'Создание базовой инфраструктуры'
    ],
    additionalFeatures: [
      'Интеграция с внешними сервисами',
      'Оптимизация производительности',
      'Расширенная аналитика'
    ]
  },
  {
    id: 'project-2',
    title: 'Фаза 2',
    date: 'Март 2024',
    year: '2024',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    status: 'in-progress',
    statusText: 'В разработке',
    description: 'Развитие функциональности',
    features: [
      'Разработка ключевых компонентов',
      'Внедрение системы безопасности',
      'Тестирование и отладка'
    ],
    additionalFeatures: [
      'Масштабирование системы',
      'Улучшение пользовательского опыта',
      'Оптимизация работы с данными'
    ]
  },
  {
    id: 'project-3',
    title: 'Фаза 3',
    date: 'Июнь 2024',
    year: '2024',
    image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    status: 'upcoming',
    statusText: 'Планируется',
    description: 'Финальная стадия',
    features: [
      'Запуск в производство',
      'Мониторинг и поддержка',
      'Сбор обратной связи'
    ],
    additionalFeatures: [
      'Расширение функциональности',
      'Интеграция новых технологий',
      'Оптимизация процессов'
    ]
  },
  {
    id: 'project-3',
    title: 'Фаза 3',
    date: 'Июнь 2024',
    year: '2024',
    image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    status: 'upcoming',
    statusText: 'Планируется',
    description: 'Финальная стадия',
    features: [
      'Запуск в производство',
      'Мониторинг и поддержка',
      'Сбор обратной связи'
    ],
    additionalFeatures: [
      'Расширение функциональности',
      'Интеграция новых технологий',
      'Оптимизация процессов'
    ]
  }
];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  const goToPrev = () => {
    carouselRef.current?.prev();
  };

  const goToNext = () => {
    carouselRef.current?.next();
  };

  const onSlideChange = (current: number) => {
    setCurrentIndex(current);
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-purple-100 text-purple-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
       <h2 className="font-h3 text-dark text-3xl md:text-[42px] font-bold text-center leading-[140%]">
            Этапы развития проекта
          </h2>
      {/* Timeline indicator */}
      <div className="w-full mb-8">
        <div className="relative">
          <div className="border-[1px] absolute top-[17%] left-0 right-0 h-0.5 bg-gray-400 -translate-y-1/2"></div>
          <div className="relative flex justify-between items-center">
            {items.map((item, index) => (
              <div key={item.id} className="flex flex-col items-center">
                <div 
                  className={`w-6 h-6 rounded-full z-10 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-violet-600 scale-110' 
                      : index < currentIndex 
                        ? 'bg-violet-400' 
                        : 'bg-gray-200'
                  }`}
                />
                <div className="mt-4 text-center">
                  <p className={`font-medium transition-all duration-300 ${
                    index === currentIndex ? 'text-black' : 'text-gray-500'
                  }`}>
                    {item.title}
                  </p>
                  <p className={`text-sm transition-all duration-300 ${
                    index === currentIndex ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mt-12">
        {/* Navigation buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md transition-all hover:bg-gray-100 hover:shadow-lg focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <Carousel
          ref={carouselRef}
          beforeChange={(_, next) => onSlideChange(next)}
          dots={false}
          effect="fade"
        >
          {items.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                <div className="rounded-xl overflow-hidden bg-black/5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex flex-col space-y-6">
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full w-fit ${getStatusBadgeClass(item.status)}`}>
                      {item.statusText}
                    </span>

                    <div>
                      <h2 className="text-5xl font-bold mb-1">{item.title}</h2>
                      <p className="text-gray-600">{item.year}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">{item.description}</h3>
                      <ul className="space-y-4">
                        {item.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 mt-2 mr-2 bg-violet-500 rounded-full"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {item.additionalFeatures && (
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Возможные дополнительные возможности</h3>
                        <ul className="space-y-4">
                          {item.additionalFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-2 h-2 mt-2 mr-2 bg-violet-500 rounded-full"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <button className="inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg transition-colors hover:bg-violet-700">
                        Узнать больше
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md transition-all hover:bg-gray-100 hover:shadow-lg focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default RoadmapSection;