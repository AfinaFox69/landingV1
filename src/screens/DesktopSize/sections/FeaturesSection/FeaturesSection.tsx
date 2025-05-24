import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  const [activeFeatureIndex, setActiveFeatureIndex] = React.useState(0);

  // Feature data for mapping
  const features = [
    { id: 1, name: "Двуязычность", isActive: true },
    { id: 2, name: "Мессенджер", isActive: false },
    { id: 3, name: "Преподавателю", isActive: false },
    { id: 4, name: "Практики студентов", isActive: false },
    { id: 5, name: "Трудоустройство", isActive: false },
    { id: 6, name: "Обо мне", isActive: false },
    { id: 7, name: "Зачётка", isActive: false },
    { id: 8, name: "Сессия", isActive: false },
    { id: 9, name: "Расписание", isActive: false },
    { id: 10, name: "Табель УРВ", isActive: false },
    { id: 11, name: "Отпуск", isActive: false },
  ];

  // Content for the selected feature
  const featureContent = {
    title: "Двуязычность",
    description: [
      "Управляй учёбой на удобном для тебя языке: выбирай русский или английский в личном кабинете",
      "Международная среда: подготовка к общению и работе в глобальном мире.",
      "Более широкий доступ к информации: используй ресурсы университета на двух языках",
      "Развитие языковых навыков: практикуй английский в привычной учебной среде",
    ],
  };

  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-[62px] py-8 md:py-10 px-4 md:px-6">
      <h2 className="font-h3 text-2xl md:text-[42px] text-dark text-center leading-[140%]">
        Реализованные фичи
      </h2>

      <div className="flex flex-col items-start gap-6 md:gap-[52px] w-full">
        {/* Feature buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 w-full">
          {features.map((feature, index) => (
            <Button
              key={feature.id}
              variant={index === activeFeatureIndex ? "default" : "outline"}
              className={`rounded-[54.5px] px-3 md:px-4 py-2 h-auto text-sm md:text-base ${
                index === activeFeatureIndex
                  ? "bg-bluedark hover:bg-bluedark"
                  : "border-black border-opacity-70 text-black opacity-70 hover:opacity-100"
              }`}
              onClick={() => setActiveFeatureIndex(index)}
            >
              <span className="font-normal leading-4">
                {feature.name}
              </span>
            </Button>
          ))}
        </div>

        {/* Feature content */}
        <div className="flex flex-col items-start gap-8 md:gap-[72px] w-full">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full">
            {/* Feature preview */}
            <Card className="w-full md:w-[847px] h-[300px] md:h-[540px] bg-[#f5f8fb] rounded-[20px] border-none">
              <CardContent className="p-0 h-full">
                {/* Image or content placeholder */}
              </CardContent>
            </Card>

            {/* Feature description */}
            <div className="flex flex-col w-full md:w-[700px] items-start gap-6 md:gap-[52px]">
              <h3 className="font-h4 text-xl md:text-[32px] text-dark leading-[140%]">
                {featureContent.title}
              </h3>

              <div className="font-t2 text-base md:text-[20px] text-dark leading-[150%]">
                {featureContent.description.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < featureContent.description.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};