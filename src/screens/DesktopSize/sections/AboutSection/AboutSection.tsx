import React from "react";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 py-10 md:py-20 px-4">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          {/* Круглый фон */}
          <div className="absolute w-[448px] h-[448px] bg-[#E0ECFE] rounded-full transform translate-x-[65px] translate-y-[89px]" />

          {/* Изображение мозга */}
          <img
            className="absolute w-[307px] h-[308px] transform translate-x-[425px] translate-y-[48px] z-10"
            alt="Brain illustration"
            src="/imgbrain.png"
          />

          {/* Изображение человека */}
          <img
            className="relative w-[578px] h-auto z-20"
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
          <br /><br />
          Эти ребята следят за тем, чтобы у всех был интернет, компы не
          тупили, и вообще все IT-штуки работали на полную катушку. Они шарят,
          как новые технологии могут помочь учиться и создавать классные
          проекты.
        </p>
      </div>
    </section>
  );
};