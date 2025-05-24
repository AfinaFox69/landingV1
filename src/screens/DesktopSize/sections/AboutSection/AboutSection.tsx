import React from "react";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex justify-center py-20 w-full">
      <div className="flex flex-wrap items-center justify-between gap-16 max-w-7xl">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Light blue circular background */}
            <div className="absolute w-[448px] h-[448px] top-[89px] left-[65px] bg-bluelight rounded-full" />

            {/* Brain image */}
            <img
              className="absolute w-[307px] h-[308px] top-12 left-[425px] object-cover"
              alt="Brain illustration"
              src="/imgbrain.png"
            />

            {/* Person image */}
            <img
              className="relative w-[578px] h-[578px]"
              alt="Person illustration"
              src="/imgchel.png"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-10 w-full md:w-2/5">
          <h2 className="font-h3 text-dark text-[42px] font-bold leading-[140%]">
            О нас
          </h2>

          <p className="font-t2 text-dark text-[20px] leading-[150%]">
            Департамент информатизации и связи — это мозг КФУ в плане
            технологий.
            <br />
            Эти ребята следят за тем, чтобы у всех был интернет, компы не
            тупили, и вообще все IT-штуки работали на полную катушку. Они шарят,
            как новые технологии могут помочь учиться и создавать классные
            проекты.
          </p>
        </div>
      </div>
    </section>
  );
};
