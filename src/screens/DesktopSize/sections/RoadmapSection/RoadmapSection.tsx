import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Timeline data for years
const timelineYears = [
  { year: "2022–2023", active: true, position: "91px" },
  { year: "2024", active: false, position: "578px" },
  { year: "2025", active: false, position: "1021px" },
  { year: "2026", active: false, position: "1464px" },
];

// Milestone data for the active year
const milestones = [
  {
    date: "Декабрь 2022",
    description:
      "Отбор кандидатов на стажировку и формирование проектных команд. Проект DISTRICT",
  },
  {
    date: "Февраль–Март 2023",
    description: "Запуск проекта по разработке Единого личного кабинета",
  },
  {
    date: "Сентябрь–Октябрь 2023",
    description: "Разработка англоязычного кабинета для поступающих",
  },
  {
    date: "Ноябрь 2023",
    description:
      "Отбор на вторую волну стажировок DISTRICT\nНачало проектов: Трудоустройство, Отпуск, Практики студентов, Командировки, Центр единого облуживания",
  },
];

export const RoadmapSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 py-10">
      <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-dark text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
        Этапы развития проекта
      </h2>

      <div className="flex flex-col items-start gap-[72px] w-full">
        {/* Timeline header */}
        <div className="relative w-full h-[147px]">
          <div className="absolute w-full h-[89px] top-[58px] left-0">
            <div className="relative h-[89px]">
              {/* Timeline bar */}
              <div className="absolute w-full h-1 top-[17px] left-0 bg-[#d1e3fe] rounded-[5px]" />

              {/* Timeline years */}
              {timelineYears.map((item) => (
                <div
                  key={item.year}
                  className={`flex flex-col ${item.year === "2022–2023" ? "w-[145px]" : "w-[57px]"} items-center gap-[23px] absolute top-0`}
                  style={{ left: item.position }}
                >
                  <div className="relative w-8 h-8">
                    <div
                      className={`${item.active ? "bg-[#65a1fa]" : "bg-[#d1e3fe]"} h-8 rounded-2xl rotate-90`}
                    />
                  </div>
                  <div
                    className={`${
                      item.active
                        ? "text-[length:var(--h5-font-size)] text-center leading-[var(--h5-line-height)] relative self-stretch font-h5 font-[number:var(--h5-font-weight)] text-dark tracking-[var(--h5-letter-spacing)] [font-style:var(--h5-font-style)]"
                        : "relative self-stretch opacity-80 [font-family:'PT_Sans_Caption',Helvetica] font-normal text-dark text-2xl text-center tracking-[0] leading-6"
                    }`}
                  >
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed badge */}
          <Badge className="absolute top-0 left-[83px] bg-[#bfffd4] text-dark rounded-[20px] px-[41px] py-2 font-t3 font-[number:var(--t3-font-weight)] text-[length:var(--t3-font-size)] tracking-[var(--t3-letter-spacing)] leading-[var(--t3-line-height)] [font-style:var(--t3-font-style)]">
            Завершено
          </Badge>
        </div>

        {/* Content section */}
        <div className="relative w-full h-[605px]">
          {/* Background card */}
          <Card className="absolute w-[780px] h-[605px] top-0 left-[68px] bg-[#f5f8fb] rounded-[20px] border-none">
            <CardContent className="p-0"></CardContent>
          </Card>

          {/* Content */}
          <div className="flex flex-col w-[700px] items-start gap-[52px] absolute top-0 left-[888px]">
            <h3 className="mt-[-1.00px] text-[length:var(--h4-font-size)] leading-[var(--h4-line-height)] relative self-stretch font-h4 font-[number:var(--h4-font-weight)] text-dark tracking-[var(--h4-letter-spacing)] [font-style:var(--h4-font-style)]">
              2022–2023
            </h3>

            <div className="flex flex-col items-start gap-10 relative self-stretch w-full">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-2.5 relative self-stretch w-full"
                >
                  <div className="self-stretch mt-[-1.00px] text-dark relative [font-family:'PT_Sans',Helvetica] font-normal text-xl tracking-[0] leading-5">
                    <span className="font-[number:var(--t2-font-weight)] leading-[var(--t2-line-height)] font-t2 [font-style:var(--t2-font-style)] tracking-[var(--t2-letter-spacing)] text-[length:var(--t2-font-size)]">
                      {milestone.date}
                    </span>
                  </div>
                  <div className="relative w-[700px] font-t3 font-[number:var(--t3-font-weight)] text-dark text-[length:var(--t3-font-size)] tracking-[var(--t3-letter-spacing)] leading-[var(--t3-line-height)] [font-style:var(--t3-font-style)]">
                    {milestone.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < milestone.description.split("\n").length - 1 && (
                          <br />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button className="absolute w-14 h-14 top-[277px] -left-3 flex items-center justify-center">
            <ChevronLeftIcon size={24} />
          </button>
          <button className="absolute w-14 h-14 top-[277px] left-[1692px] flex items-center justify-center">
            <ChevronRightIcon size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
