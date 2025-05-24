import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const StatisticsSection = (): JSX.Element => {
  // Data for statistics to enable mapping
  const statisticsData = [
    { value: "450+", description: "Виртуальных серверов" },
    { value: "25+", description: "Информационных систем" },
    { value: "800+", description: "Активных сетевых устройств" },
    { value: "80+", description: "Физических сервера" },
    { value: "9840+", description: "Персональных компьютеров" },
    { value: "2485+", description: "Единиц оргтехники" },
  ];

  return (
    <section className="w-full py-[120px] px-12 bg-graybluelightbg rounded-[20px]">
      <div className="grid grid-cols-3 gap-x-16 gap-y-16 max-w-[1412px] mx-auto">
        {statisticsData.map((stat, index) => (
          <Card key={index} className="border-none bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-h1 font-[number:var(--h1-font-weight)] text-dark text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
                  {stat.value}
                </h2>
                <p className="[font-family:'PT_Sans',Helvetica] font-normal text-bwbw-6 text-xl leading-[30px]">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
