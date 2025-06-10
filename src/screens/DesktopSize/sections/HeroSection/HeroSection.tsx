
import { Button } from "../../../../components/ui/button";
import { TypingAnimation } from "../../../../components/magicui/typing-animation";
import { BlurFade } from "../../../../components/magicui/blur-fade";

export const HeroSection = (): JSX.Element => {
  return (
    
    <section className="relative w-full h-[100vh] bg- flex items-end  bg-dark bg-[url(/Background.svg)] bg-[url(/blur-gradient-1.svg)] ">
      <div className="md:container mx-auto md:px-4 h-full">
        <div className="relative  w-full min-h-[60vh] h-full">
          <div className="flex flex-col lg:flex-row  items-center justify-center  bg-cover bg-center bg-no-repeat h-full">
            {/* Left side - Text content */}
            
            <div className="flex flex-col items-start gap-8 lg:gap-[52px] py-20 lg:py-0 text-center lg:text-left  lg:w-[45%]">
             <BlurFade delay={0.5}>
              <div style={{ fontFamily: 'PT Sans' }} className="flex flex-col items-center lg:items-start gap-8 min-w-[100%] ">
                <h1 className="font-h2 text-4xl lg:text-[64px] text-white  ">
                  <div className="font-h2 sm:mb-6 text-sm sm:text-4xl lg:text-[64px] text-white " >
                    Единый
                  </div>
                  <div className="font-h2 text-sm sm:text-4xl lg:text-[64px] text-white " >
                    личный кабинет
                  </div>

                </h1>
                <p className="text-white text-lg lg:text-xl leading-relaxed max-w-[529px]">
                  <div className="text-white text-xs sm:text-lg leading-relaxed max-w-[529px] font-light" >
                    Цифровая платформа, которая упрощает взаимодействие студентов с университетом и образовательными ресурсами
                  </div>
                </p>
              </div>
              </BlurFade>
         
           <BlurFade className="w-full"  delay={0.5}>
              <Button className="hover:bg-white hover:text-black w-[50%] md:w-full lg:w-64 px-[37px] py-[15px] bg-bluebright rounded-[30px] font-t3-bold text-white">
                Начать работу
              </Button>
              </BlurFade>
             
            </div>
     
            {/* Right side - UI Cards */}
            
            <div   className=" lg:w-[55%] !h-full flex items-end">
              <BlurFade delay={1.5} className="">
            <img src={"/imgInterfacePieces.png"} alt="UI Cards" className="w-full h-full " />
             </BlurFade>
            </div>
           
          </div>
        </div>
      </div>
    </section>
   
  );
};
