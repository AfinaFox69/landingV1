import React from "react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "../../../../components/ui/avatar";
import { Progress } from "../../../../components/ui/progress";
import { TypingAnimation } from "../../../../components/magicui/typing-animation";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-dark">
      <div className="md:container mx-auto md:px-4">
        <div className="relative h-full w-full">
          <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center bg-[url(/blur-gradient-1.svg)] bg-cover bg-center bg-no-repeat">
            {/* Left side - Text content */}
            <div className="flex flex-col items-start gap-8 lg:gap-[52px] py-20 lg:py-0 text-center lg:text-left w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start gap-8">
                <h1 className="font-h2 text-4xl lg:text-[64px] text-white leading-tight">
                  <TypingAnimation className="font-h2 text-4xl lg:text-[64px] text-white leading-tight" delay={0} duration={100}>Единый  </TypingAnimation>
                   <TypingAnimation className="font-h2 text-4xl lg:text-[64px] text-white leading-tight" delay={700} duration={100}>  личный кабинет</TypingAnimation>
                  {/* Единый<br />
                  личный кабинет */}
                </h1>
                <p className="text-white text-lg lg:text-xl leading-relaxed max-w-[529px]">
                  <TypingAnimation className="text-white text-lg lg:text-xl leading-relaxed max-w-[529px] font-light" delay={2200} duration={30}>  Цифровая платформа, которая упрощает взаимодействие студентов  с университетом и образовательными ресурсами</TypingAnimation>
                        {/* <TypingAnimation className="text-white text-lg lg:text-xl leading-relaxed max-w-[529px] font-light" delay={2500} duration={150}>  с университетом и образовательными ресурсами</TypingAnimation> */}
                  {/* Цифровая платформа, которая упрощает взаимодействие студентов */}
                  
                </p>
              </div>
              <Button 
                className="w-full lg:w-64 h-[50px] px-[37px] py-[15px] bg-bluebright rounded-[30px] font-t3-bold text-white"
              >
                Начать работу
              </Button>
            </div>

            {/* Right side - UI Cards */}
            <div className="hidden lg:flex flex-1 justify-center items-center relative">
              <div className="grid grid-cols-2 gap-6 transform rotate-[-10deg] scale-90">
                {/* Верхняя группа карточек */}
                <div className="space-y-6">
                  <Card className="w-[400px] bg-white rounded-xl p-4">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-bluelight rounded-full flex items-center justify-center">
                          <img src="/image-28.png" alt="Calendar" className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium mb-1">Электронное расписание</h3>
                          <p className="text-xs text-gray-600">Актуальное расписание занятий всегда под рукой</p>
                        </div>
                      </div>
                      <Button className="mt-4 w-full bg-bluelight text-white rounded-full text-sm">Перейти</Button>
                    </CardContent>
                  </Card>

                  <Card className="w-[400px] bg-white rounded-xl p-4">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src="/image-31.png" />
                          <AvatarFallback>СТ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium">Студент</h3>
                          <p className="text-xs text-gray-600">Доступ к учебным материалам и сервисам</p>
                        </div>
                      </div>
                      <Button className="mt-4 w-full bg-bluelight text-white rounded-full text-sm">Перейти</Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Нижняя группа карточек */}
                <div className="space-y-6 mt-12">
                  <Card className="w-[400px] bg-white rounded-xl p-4">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src="/image-23.png" />
                          <AvatarFallback>ПР</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium">Преподаватель</h3>
                          <p className="text-xs text-gray-600">Управление учебным процессом</p>
                        </div>
                      </div>
                      <Button className="mt-4 w-full bg-bluelight text-white rounded-full text-sm">Перейти</Button>
                    </CardContent>
                  </Card>

                  <Card className="w-[400px] bg-white rounded-xl p-4">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-bluelight rounded-full flex items-center justify-center">
                          <img src="/search-job-6617229-5501752-1.png" alt="Search" className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium">Поиск работы</h3>
                          <p className="text-xs text-gray-600">Вакансии для студентов и выпускников</p>
                        </div>
                      </div>
                      <Button className="mt-4 w-full bg-bluelight text-white rounded-full text-sm">Перейти</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};