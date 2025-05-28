
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../../../components/ui/avatar";
import { TypingAnimation } from "../../../../components/magicui/typing-animation";
import { BlurFade } from "../../../../components/magicui/blur-fade";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-24 overflow-hidden bg-dark bg-[url(/Background.svg)]">
      <div className="md:container mx-auto md:px-4">
        <div className="relative  w-full">
          <div className="flex flex-col lg:flex-row  items-center justify-center bg-[url(/blur-gradient-1.svg)] bg-cover bg-center bg-no-repeat">
            {/* Left side - Text content */}
            <div className="flex flex-col items-start gap-8 lg:gap-[52px] py-20 lg:py-0 text-center lg:text-left  lg:w-[45%]">
              <div style={{ fontFamily: 'PT Sans' }} className="flex flex-col items-center lg:items-start gap-8 min-w-[100%]">
                <h1 className="font-h2 text-4xl lg:text-[64px] text-white leading-tight">
                  <TypingAnimation className="font-h2 text-4xl lg:text-[64px] text-white leading-tight" delay={400} duration={100}>
                    Единый
                  </TypingAnimation>
                  <TypingAnimation className="font-h2 text-4xl lg:text-[64px] text-white leading-tight" delay={900} duration={100}>
                    личный кабинет
                  </TypingAnimation>

                </h1>
                <p className="text-white text-lg lg:text-xl leading-relaxed max-w-[529px]">
                  <TypingAnimation className="text-white text-lg lg:text-xl leading-relaxed max-w-[529px] font-light" delay={2800} duration={30}>
                    Цифровая платформа, которая упрощает взаимодействие студентов с университетом и образовательными ресурсами
                  </TypingAnimation>
                </p>
              </div>
              <BlurFade delay={5.9} inView className="w-full  md:w-full">
              <Button className="hover:bg-white hover:text-black w-[50%] md:w-full lg:w-64 h-[50px] px-[37px] py-[15px] bg-bluebright rounded-[30px] font-t3-bold text-white">
                Начать работу
              </Button>
              </BlurFade>
            </div>

            {/* Right side - UI Cards */}
            <BlurFade delay={5.9} inView className=" lg:w-[55%] !h-full">
            <img src={"/imgInterfacePieces.png"} alt="UI Cards"  />
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};
