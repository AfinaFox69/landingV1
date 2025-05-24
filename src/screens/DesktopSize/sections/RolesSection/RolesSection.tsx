import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const RolesSection = (): JSX.Element => {
  // Data for role cards to enable mapping
  const roleCards = [
    {
      id: 1,
      title: "Абитуриент",
      image: "/mask-group-5.png",
      description: [
        "Подача заявления на поступление в КФУ",
        "Участие в олимпиадах для поступающих (Магистриум, Open Doors и пр.)",
        "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства (если совершеннолетний)",
        "Просмотр каталога образовательных курсов КФУ",
      ],
    },
    {
      id: 2,
      title: "Студент",
      image: "/mask-group-4.png",
      description: [
        "Участие в олимпиадах, научных конференциях школьников под эгидой КФУ (в т.ч. для иностранных граждан)",
        "Подготовка к ОГЭ/ЕГЭ",
        "Просмотр каталога образовательных курсов КФУ",
        "Поступление в лицей и школы в составе КФУ",
      ],
    },
    {
      id: 3,
      title: "Сотрудник",
      image: "/mask-group-3.png",
      description: [
        "Просмотр расчётного листа",
        "Заказ справок из УК и бухгалтерии",
        "Подача заявлений на отпуск, командировки",
        "Запись на прохождение образовательных курсов КФУ",
        "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства",
        "Подача заявления на поступление в КФУ",
        "Должностные сервисы, подключаемые индивидуально",
      ],
    },
    {
      id: 4,
      title: "Гость",
      image: "/mask-group-2.png",
      description: [
        "Просмотр функциональных возможностей кабинета (просмотр новостей, анонсов мероприятий)",
        "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства",
        "Просмотр каталога образовательных курсов КФУ",
        "Подача заявления на поступление в КФУ",
      ],
    },
    {
      id: 5,
      title: "Школьник",
      image: "/mask-group-1.png",
      description: [
        "Участие в олимпиадах, научных конференциях школьников под эгидой КФУ (в т.ч. для иностранных граждан)",
        "Подготовка к ОГЭ/ЕГЭ",
        "Просмотр каталога образовательных курсов КФУ",
        "Поступление в лицей и школы в составе КФУ",
      ],
    },
    {
      id: 6,
      title: "Слушатель",
      image: "/mask-group.png",
      description: [
        "Запись на прохождение образовательных курсов КФУ",
        "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства",
        "Подача заявления на поступление в КФУ",
      ],
    },
  ];

  return (
    <section className="w-full py-[140px] px-6 md:px-12 lg:px-[91px] bg-graybluedarkerbg">
      <div className="flex flex-col items-start gap-[52px] w-full">
        <h2 className="w-full font-h4 text-dark text-[42px] text-center font-bold leading-[58.8px]">
          Ролевая модель
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {roleCards.map((role) => (
            <div key={role.id} className="relative">
              <Card className="rounded-[40px] shadow-shadow-soft h-[568px]">
                <div className="relative pt-[150px] pb-[140px] px-[65px]">
                  <img
                    className="absolute w-[207px] h-[207px] top-[-58px] left-1/2 transform -translate-x-1/2"
                    alt={`${role.title} icon`}
                    src={role.image}
                  />
                  <CardContent className="p-0">
                    <h3 className="w-full font-h4 text-dark text-center mb-[85px]">
                      {role.title}
                    </h3>
                    <div className="opacity-80 font-t3 text-dark">
                      {role.description.map((item, index) => (
                        <React.Fragment key={index}>
                          {item}
                          {index < role.description.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
