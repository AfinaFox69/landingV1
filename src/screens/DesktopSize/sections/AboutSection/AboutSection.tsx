import React from "react";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex justify-center py-10 md:py-20 w-full px-4 md:px-6">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 max-w-7xl">
        <div className="w-full md:w-1/2 flex justify-center">
           <img
              className=""
              alt="Brain illustration"
              src="/imgAvatarDIS.png"
            />
        </div>

        <div className="flex flex-col items-start gap-6 md:gap-10 w-full md:w-2/5">
          <h2 className="font-h3 text-dark text-3xl md:text-[42px] font-bold leading-[140%] text-center md:text-left w-full">
            О нас
          </h2>

          <p className="font-t2 text-dark text-lg md:text-[20px] leading-[150%] text-center md:text-left">
            Департамент информатизации и связи — это мозг КФУ в плане
            технологий.
            <br className="hidden md:block" />
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