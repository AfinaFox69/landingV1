import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
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
    <section className="flex flex-col w-full items-center gap-[62px] py-10">
      <h2 className="[font-family:'PT_Sans_Caption',Helvetica] font-bold text-dark text-[42px] text-center tracking-[0] leading-[58.8px]">
        Реализованные фичи
      </h2>

      <div className="flex flex-col items-start gap-[52px] w-full">
        <div className="flex flex-wrap items-start gap-3">
          {features.map((feature) => (
            <Button
              key={feature.id}
              variant={feature.isActive ? "default" : "outline"}
              className={`rounded-[54.5px] px-4 py-2 h-auto ${
                feature.isActive
                  ? "bg-bluedark hover:bg-bluedark"
                  : "border-black border-opacity-70 text-black opacity-70 hover:opacity-100"
              }`}
            >
              <span className="[font-family:'PT_Sans',Helvetica] font-normal text-base tracking-[0] leading-4">
                {feature.name}
              </span>
            </Button>
          ))}
        </div>

        <div className="flex flex-col items-start gap-[72px] w-full">
          <div className="flex flex-col md:flex-row items-start gap-10 w-full">
            <Card className="w-full md:w-[847px] h-[540px] bg-[#f5f8fb] rounded-[20px] border-none">
              <CardContent className="p-0 h-full">
                {/* Image or content placeholder */}
              </CardContent>
            </Card>

            <div className="flex flex-col w-full md:w-[700px] items-start gap-[52px]">
              <h3 className="font-h4 font-[number:var(--h4-font-weight)] text-dark text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                {featureContent.title}
              </h3>

              <div className="w-full font-t2 font-[number:var(--t2-font-weight)] text-dark text-[length:var(--t2-font-size)] tracking-[var(--t2-letter-spacing)] leading-[var(--t2-line-height)] [font-style:var(--t2-font-style)]">
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
