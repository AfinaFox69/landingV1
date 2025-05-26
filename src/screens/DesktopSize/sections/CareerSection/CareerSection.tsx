import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CareerSection = (): JSX.Element => {
  return (
    <section id="career" className="w-full py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="relative w-full bg-bluelight rounded-[20px] overflow-hidden">
          <CardContent className="flex flex-col md:flex-row p-0 w-full ">
            <div className="flex flex-col py-8 md:py-[100px] px-6 md:pl-[148px] md:pr-44 relative z-10 md:w-2/3 ">
              <div className="max-w-full md:max-w-[701px]">
                <h3 className="font-h3 text-2xl md:text-[42px] text-white leading-[140%] mb-6 md:mb-10">
                  Мечтаешь о карьере в IT?
                </h3>

                <p className="text-white text-base md:text-xl leading-relaxed mb-6 md:mb-10 max-w-prose">
                  <span className="block mb-2">
                    Хочешь получить реальный опыт работы, который выделит тебя
                    среди других выпускников?
                  </span>

                  <span className="font-t2 block mb-2">
                    Департамент информатизации и связи приглашает тебя на
                    стажировку!
                  </span>

                  <span className="block">
                    Ты получишь возможность работать над реальными проектами,
                    учиться у профессионалов и видеть изнутри, как работает IT.
                    Подай заявку прямо сейчас и начни строить своё будущее!
                  </span>
                </p>

                <Button className="w-full md:w-auto rounded-[30px] bg-white text-bluedark hover:bg-white/90 px-6 md:px-[37px] py-[15px] h-[50px]">
                  <span className="font-t3-bold">
                    Подать заявку
                  </span>
                </Button>
              </div>
            </div>

          
             <img
              className=" md:w-1/3 lg:w-1/3 object-contain p-14 "
              alt="Img business cat"
              src="/imgbusinesscat.png"
            />
           
          </CardContent>
        </Card>
      </div>
    </section>
  );
};