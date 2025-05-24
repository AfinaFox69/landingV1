import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CareerSection = (): JSX.Element => {
  return (
    <section className="w-full py-16">
      <Card className="relative w-full bg-bluelight rounded-[20px] overflow-hidden">
        <CardContent className="flex flex-row p-0">
          <div className="flex flex-col py-[100px] pl-[148px] pr-44 relative z-10">
            <div className="max-w-[701px]">
              <h3 className="font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] mb-10 [font-style:var(--h3-font-style)]">
                Мечаешь о карьере в IT?
              </h3>

              <p className="w-full font-normal text-white text-xl leading-[30px] mb-10 [font-family:'PT_Sans',Helvetica] tracking-[0]">
                <span>
                  Хочешь получить реальный опыт работы, который выделит тебя
                  среди других выпускников?{" "}
                </span>

                <span className="font-[number:var(--t2-font-weight)] leading-[var(--t2-line-height)] font-t2 [font-style:var(--t2-font-style)] tracking-[var(--t2-letter-spacing)] text-[length:var(--t2-font-size)]">
                  Департамент информатизации и связи приглашает тебя на
                  стажировку!
                </span>

                <span>
                  {" "}
                  Ты получишь возможность работать над реальными проектами,
                  учиться у профессионалов и видеть изнутри, как работает IT.
                  Подай заявку прямо сейчас и начни строить своё будущее!
                </span>
              </p>

              <Button className="rounded-[30px] bg-white text-bluedark hover:bg-white/90 px-[37px] py-[15px] h-[50px]">
                <span className="font-[number:var(--t3-bold-font-weight)] text-[length:var(--t3-bold-font-size)] leading-[var(--t3-bold-line-height)] font-t3-bold tracking-[var(--t3-bold-letter-spacing)] [font-style:var(--t3-bold-font-style)]">
                  Подать заявку
                </span>
              </Button>
            </div>
          </div>

          <img
            className="absolute right-0 top-[-60px] w-[631px] h-[566px]"
            alt="Img business cat"
            src="/imgbusinesscat.png"
          />
        </CardContent>
      </Card>
    </section>
  );
};
