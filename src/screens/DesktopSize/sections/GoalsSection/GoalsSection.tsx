import { FlameIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for the goals cards
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
    <section className="flex flex-col items-center gap-[52px] px-[92px] py-[140px] bg-graybluelightbg rounded-[50px_50px_0px_0px] overflow-hidden">
      <h2 className="font-h3 text-dark text-[42px] font-bold text-center leading-[58.8px]">
        Задачи
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-[40px]">
        {goalsData.map((goal) => (
          <Card
            key={goal.id}
            className="w-[404px] h-[448px] rounded-[50px] overflow-hidden shadow-light-shadow"
          >
            <CardContent className="flex flex-col items-start gap-[52px] p-0 pt-[52px] pl-[45px] pr-[45px]">
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
                <h3 className="w-full font-h4 font-bold text-dark text-[32px] leading-[140%]">
                  {goal.title}
                </h3>

                <p className="w-full opacity-80 font-t3 font-normal text-[#282828] text-[16px] leading-[140%]">
                  {goal.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
