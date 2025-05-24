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
  const [activeYearIndex, setActiveYearIndex] = React.useState(0);

  return (
    <section className="flex flex-col w-full items-center gap-6 md:gap-10 py-8 md:py-10 px-4 md:px-6 overflow-hidden">
      <h2 className="font-h3 text-2xl md:text-[42px] text-dark text-center leading-[140%]">
        Этапы развития проекта
      </h2>

      <div className="flex flex-col items-start gap-8 md:gap-[72px] w-full">
        {/* Timeline header */}
        <div className="relative w-full h-[120px] md:h-[147px]">
          <div className="absolute w-full h-[89px] top-[58px] left-0">
            <div className="relative h-[89px]">
              {/* Timeline bar */}
              <div className="absolute w-full h-1 top-[17px] left-0 bg-[#d1e3fe] rounded-[5px]" />

              {/* Timeline years */}
              <div className="flex justify-between md:justify-start md:relative">
                {timelineYears.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex flex-col items-center gap-4 md:gap-[23px] ${
                      index === activeYearIndex ? "opacity-100" : "opacity-50"
                    } md:absolute md:top-0`}
                    style={{ left: item.position }}
                  >
                    <div className="relative w-6 h-6 md:w-8 md:h-8">
                      <div
                        className={`${
                          index === activeYearIndex ? "bg-[#65a1fa]" : "bg-[#d1e3fe]"
                        } h-full rounded-2xl rotate-90`}
                      />
                    </div>
                    <div
                      className={`text-lg md:text-2xl ${
                        index === activeYearIndex
                          ? "font-h5 font-bold"
                          : "font-normal opacity-80"
                      } text-dark text-center`}
                    >
                      {item.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Completed badge */}
          <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-[83px] md:transform-none bg-[#bfffd4] text-dark rounded-[20px] px-6 md:px-[41px] py-2 font-t3 text-sm md:text-base">
            Завершено
          </Badge>
        </div>

        {/* Content section */}
        <div className="relative w-full">
          {/* Background card */}
          <Card className="w-full md:w-[780px] bg-[#f5f8fb] rounded-[20px] border-none p-6 md:p-8">
            <CardContent className="space-y-8">
              <h3 className="text-xl md:text-[32px] font-h4 font-bold text-dark leading-[140%]">
                {timelineYears[activeYearIndex].year}
              </h3>

              <div className="space-y-6 md:space-y-10">
                {milestones.map((milestone, index) => (
                  <div key={index} className="space-y-2 md:space-y-2.5">
                    <div className="font-t2 text-dark text-lg md:text-xl leading-5">
                      {milestone.date}
                    </div>
                    <div className="font-t3 text-dark text-base md:text-[16px] leading-[140%]">
                      {milestone.description.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < milestone.description.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <div className="flex justify-between w-full md:w-auto md:absolute md:top-1/2 md:-translate-y-1/2 mt-4 md:mt-0">
            <button
              onClick={() => setActiveYearIndex((prev) => (prev > 0 ? prev - 1 : prev))}
              className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white rounded-full shadow-md md:-left-7"
              disabled={activeYearIndex === 0}
            >
              <ChevronLeftIcon size={24} />
            </button>
            <button
              onClick={() => setActiveYearIndex((prev) => (prev < timelineYears.length - 1 ? prev + 1 : prev))}
              className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white rounded-full shadow-md md:-right-7"
              disabled={activeYearIndex === timelineYears.length - 1}
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};