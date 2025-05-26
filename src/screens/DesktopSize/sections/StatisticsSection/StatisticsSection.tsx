import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { NumberTicker } from "../../../../components/magicui/number-ticker";

export const StatisticsSection = (): JSX.Element => {
  const statisticsData = [
    { value: "450+", description: "Виртуальных серверов" },
    { value: "25+", description: "Информационных систем" },
    { value: "800+", description: "Активных сетевых устройств" },
    { value: "80+", description: "Физических сервера" },
    { value: "9840+", description: "Персональных компьютеров" },
    { value: "2485+", description: "Единиц оргтехники" },
  ];

  return (
    <section className="w-full py-10 md:py-[120px] bg-graybluelightbg rounded-[20px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-16 md:gap-y-16">
          {statisticsData.map((stat, index) => {
            // На мобильных и планшетах — центрируем все
            // На lg — применяем выравнивание по колонкам
            let justifyClass = "justify-self-center"; // по умолчанию центр

            if (index % 3 === 0) justifyClass = "lg:justify-self-start";
            else if (index % 3 === 1) justifyClass = "lg:justify-self-center";
            else if (index % 3 === 2) justifyClass = "lg:justify-self-end";

            return (
              <Card key={index} className={`border-none bg-transparent shadow-none ${justifyClass}`}>
                <CardContent className="p-0">
                  <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                    <h2 className="font-h1 text-5xl md:text-[100px] text-dark leading-tight">
                      <NumberTicker
                        // @ts-ignore
                        value={stat?.value}
                        className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
                      />
                    </h2>
                    <p className="font-['PT_Sans',Helvetica] font-normal text-bwbw-6 text-lg md:text-xl leading-[30px]">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
