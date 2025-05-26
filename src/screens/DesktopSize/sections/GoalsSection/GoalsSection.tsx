import { FlameIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const goalsData = [
  {
    id: 1,
    icon: "/group-5.png",
    title: "Объединение",
    description:
      "Перейти от подхода множественности личных кабинетов к единой учётной записи с ролевым распределением",
  },
  {
    id: 2,
    icon: "/group-6.png",
    title: "Новый стек",
    description:
      "Перенести ИАС «Электронный университет» на новый технологический стек, с частичным сохранением баз данных на Oracle",
  },
  {
    id: 3,
    iconType: "flame",
    title: "Новый дизайн",
    description:
      "Разработать крутой дизайн, чтобы юзеры не грустили: сделать интерфейс удобным и интуитивно понятным на всех девайсах, браузерах и языках",
  },
  {
    id: 4,
    icon: "/group-7.png",
    title: "Цифровизация",
    description:
      "Разработать новые HR-сервисы: трудоустройство, кадровый учёт, учёт рабочего времени и другие сервисы, которые упрощают взаимодействие HR с сотрудниками",
  },
];

export const GoalsSection = (): JSX.Element => {
  return (
    <section className="bg-graybluelightbg rounded-[50px_50px_0px_0px] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-[140px]">
        <div className="flex flex-col items-center gap-8 md:gap-[52px]">
          <h2 className="font-h3 text-dark text-3xl md:text-[42px] font-bold text-center leading-[140%] mb-[40px]">
            Задачи
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-[40px]">
            {goalsData.map((goal) => (
              <Card
                key={goal.id}
                className="w-full md:w-[404px] h-auto md:h-[448px] rounded-[50px] overflow-hidden shadow-light-shadow"
              >
                <CardContent className="flex flex-col items-start gap-[52px] p-6 md:p-[52px]">
                  <div className="relative w-[60px] h-[60px]">
                    {goal.iconType === "flame" ? (
                      <FlameIcon className="w-[50px] h-[50px]" />
                    ) : (
                      <img
                        className="absolute w-[50px] h-[50px] top-[5px] left-[5px]"
                        alt={`${goal.title} icon`}
                        src={goal.icon}
                      />
                    )}
                  </div>

                  <div className="flex flex-col items-start gap-10 w-full">
                    <h3 className="w-full font-h4 font-bold text-dark text-2xl md:text-[32px] leading-[140%]">
                      {goal.title}
                    </h3>

                    <p className="w-full opacity-80 font-t3 font-normal text-[#282828] text-base md:text-[16px] leading-[140%]">
                      {goal.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};