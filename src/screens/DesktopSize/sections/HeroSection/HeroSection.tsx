import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "../../../../components/ui/avatar";
import { Progress } from "../../../../components/ui/progress";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-dark">
      {/* Background elements */}
      <div className="relative h-full w-full">
       
        <img
          className="w-full md:w-[510px] h-auto md:h-[563px] top-[141px] right-0"
          alt="Blur gradient"
          src="/blur-gradient-3.svg"
        />
        <img
          className="w-full md:w-[1345px] h-auto md:h-[980px] top-0 right-0"
          alt="Blur gradient"
          src="/blur-gradient-2.svg"
        />
        <img
          className="w-full md:w-[1304px] h-auto md:h-[948px] top-8 right-0"
          alt="Blur gradient"
          src="/blur-gradient-1.svg"
        />
      </div>

      {/* Hero content */}
      <div className="relative w-full h-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center bg-[url(/blur-gradient-1.svg)]">
            {/* Left side - Text content */}
            <div className="flex flex-col items-start gap-8 lg:gap-[52px] py-20 lg:py-0 text-center lg:text-left w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start gap-8">
                <h1 className="font-h2 text-4xl lg:text-[64px] text-white leading-tight">
                  Единый<br />
                  личный кабинет
                </h1>
                <p className="text-white text-lg lg:text-xl leading-relaxed max-w-[529px]">
                  Цифровая платформа, которая упрощает взаимодействие студентов
                  с университетом и образовательными ресурсами
                </p>
              </div>
              <Button 
                className="w-full lg:w-64 h-[50px] px-[37px] py-[15px] bg-bluebright rounded-[30px] text-white font-t3-bold"
              >
                Начать работу
              </Button>
            </div>

            {/* Right side - UI Cards */}
            <div className="hidden lg:block relative flex-1">
              {/* Карточки UI здесь... */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};