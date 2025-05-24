import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "../../../../components/ui/avatar";
import { Progress } from "../../../../components/ui/progress";

export const HeroSection = (): JSX.Element => {
  // Data for the cards in the UI
  const profileData = {
    name: "Морковникова Виктория Павловна",
    profileCompletion: 20,
    personalInfo: [
      { label: "Дата рождения:", value: "07.05.2006" },
      { label: "Пол:", value: "Женский" },
      { label: "Тип гражданства:", value: "Гражданка РФ" },
      { label: "Страна гражданства:", value: "Российская федерация" },
      { label: "Место рождения:", value: "Москва" },
    ],
    academicInfo: {
      level: "Бакалавриат",
      details: [
        { label: "Институт (факультет):", value: "ИФМК (ВШНКиОГТ)" },
        { label: "Специальность:", value: "00.00.00 Искусство" },
        { label: "Тип обучения:", value: "Очное" },
        { label: "Категория:", value: "Бюджет" },
        { label: "№ группы:", value: "10.2–914" },
        { label: "№ читательского билета и пароль:", value: "11–3309" },
        { label: "Идентификатор:", value: "1113309" },
        { label: "Окончание обучения:", value: "2028 г." },
      ],
    },
  };

  const serviceCards = [
    {
      title: "Электронная зачётная книжка",
      description: "Здесь находится план вашего обучения, предметы и отведённые для них часы",
      imageSrc: "/image-23.png",
    },
    {
      title: "Сотрудники",
      description: "Поиск по списку сотрудников Казанского федерального университета, а также их контакты",
      imageSrc: "/mask-group-7.png",
    },
    {
      title: "Сессия",
      description: "Вся информация по сессии, материалы и баллы отображаются здесь",
      imageSrc: "/image-28.png",
    },
    {
      title: "Карьера и трудоустройство",
      description: "Развивайтесь вместе с нами, работая в одном из ведущих университетов России",
      imageSrc: "/search-job-6617229-5501752-1.png",
    },
  ];

  const scheduleData = {
    day: "Пн",
    classes: [
      { time: "10:10–11:40", subject: "Элективные курсы по физической культуре и спорту" },
      { time: "13:50–15:20", subject: "Гистология" },
      { time: "15:50–17:20", subject: "Общая биология: тренинг по саморазвитию и планированию карьеры" },
      { time: "19:10–20:40", subject: "Почвоведение" },
    ],
  };

  const additionalServices = [
    {
      title: "Единый центр обслуживания",
      description: "Здесь вы можете подать заявки на оформление документов",
      imageSrc: "/image-31.png",
    },
    {
      title: "Мой рейтинг",
      description: "В разделе отображается рейтинг учащегося за все годы обучения",
      imageSrc: "/image-18.png",
    },
    {
      title: "Академический календарь",
      description: "Здесь находится план вашего обучения, предметы и отведённые для них часы",
      imageSrc: "/image-23-1.png",
    },
  ];

  return (
    <section className="relative w-full h-[980px] overflow-hidden bg-dark">
{/* Background elements */}
      <div className="relative h-full w-full">
<img
          className="absolute w-full h-full top-px left-0.5"
          alt="Bg noisy gradients"
          src="/bg-noisy-gradients.png"
        />
<img
          className="absolute w-[676px] h-[660px] top-80 right-0"
          alt="Blur gradient"
          src="/blur-gradient-4.svg"
        />
<img
          className="absolute w-[510px] h-[563px] top-[141px] right-0"
          alt="Blur gradient"
          src="/blur-gradient-3.svg"
        />
<img
          className="absolute w-[1345px] h-[980px] top-0 right-0"
          alt="Blur gradient"
          src="/blur-gradient-2.svg"
        />
<img
          className="absolute w-[1304px] h-[948px] top-8 right-0"
          alt="Blur gradient"
          src="/blur-gradient-1.svg"
        />
</div>
{/* Hero content */}
      <div className="absolute top-0 left-0 w-full h-full">
<div className="container h-full mx-auto">
<div className="flex h-full">
{/* Left side - Text content */}
            <div className="flex flex-col items-start gap-[52px] pt-[379px] pl-[240px]">
<div className="flex flex-col items-start gap-8">
<h1 className="font-h2 text-[length:var(--h2-font-size)] font-[number:var(--h2-font-weight)] text-white tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
Единый<br />
личный кабинет
                </h1>
<p className="w-[529px] font-['PT_Sans',Helvetica] font-normal text-white text-xl leading-5">
<span className="leading-[30px]">
Цифровая платформа, которая упрощает взаимодействие студентов
                    с университетом и образовательными ресурсами
                  </span>
</p>
</div>
<Button 
                className="w-64 h-[50px] px-[37px] py-[15px] bg-bluebright rounded-[30px] text-white font-t3-bold text-[length:var(--t3-bold-font-size)] font-[number:var(--t3-bold-font-weight)] tracking-[var(--t3-bold-letter-spacing)] leading-[var(--t3-bold-line-height)] [font-style:var(--t3-bold-font-style)]"
              >
Начать работу
              </Button>
</div>
{/* Right side - UI Cards */}
            <div className="relative flex-1">
{/* Empathy Map Card */}
              <Card className="absolute w-[427px] h-80 top-[170px] left-[105px] bg-[#f7f7f7] rounded-[21.34px] overflow-hidden transform -rotate-[12.91deg] shadow-none border-0">
<CardContent className="p-8">
<div className="relative w-[363px] h-64">
<div className="absolute w-[363px] h-64 top-0 left-0">
<div className="absolute w-0.5 h-[363px] top-[-53px] left-[181px] bg-[#d7d7d9] rounded-[1.6px] -rotate-90 opacity-40" />
<div className="absolute w-0.5 h-64 top-0 left-[181px] bg-[#d7d7d9] rounded-[1.6px] opacity-40" />
<div className="inline-flex items-start justify-center gap-4 absolute top-[37px] left-2.5">
{[1, 2].map((i) => (
                          <div key={`says-${i}`} className="inline-flex items-center justify-center gap-[1.33px] relative">
<img
                              className="relative w-[70.31px] h-[70.31px] mt-[-5.81px] mb-[-5.81px] ml-[-5.81px] mr-[-5.81px] rotate-[12.91deg]"
                              alt="Bg"
                              src="/bg-1.svg"
                            />
<div className="absolute w-[50px] h-[50px] top-1 left-1 font-['Inter',Helvetica] font-medium text-white text-[7.5px] text-center leading-[10.5px]">
What a user says
                            </div>
<img
                              className="absolute w-[15px] h-[15px] -top-px -left-px rotate-[12.91deg]"
                              alt="Bg"
                              src="/bg.svg"
                            />
</div>
))}
                      </div>
<div className="top-[37px] left-[219px] inline-flex items-start justify-center gap-4 absolute">
{[1, 2].map((i) => (
                          <div key={`thinks-${i}`} className="inline-flex items-center justify-center gap-[1.33px] relative">
<img
                              className="relative w-[70.31px] h-[70.31px] mt-[-5.81px] mb-[-5.81px] ml-[-5.81px] mr-[-5.81px] rotate-[12.91deg]"
                              alt="Bg"
                              src="/bg-1.svg"
                            />
<div className="absolute w-[50px] h-[50px] top-1 left-1 font-['Inter',Helvetica] font-medium text-white text-[7.5px] text-center leading-[10.5px]">
What a user thinks
                            </div>
<img
                              className="absolute w-[15px] h-[15px] -top-px -left-px rotate-[12.91deg]"
                              alt="Bg"
                              src="/bg.svg"
                            />
</div>
))}
                      </div>
<div className="absolute w-[158px] top-[139px] left-0 font-['Inter',Helvetica] font-bold text-[#37383f] text-[11.7px] text-center leading-[18.8px]">
Does
                      </div>
<div className="absolute w-[158px] top-[139px] left-[205px] font-['Inter',Helvetica] font-bold text-[#37383f] text-[11.7px] text-center leading-[18.8px]">
Feels
                      </div>
<div className="absolute w-[77px] h-[77px] top-[90px] left-[143px] bg-[#ff854c] rounded-[106.69px] overflow-hidden border-[3.2px] border-solid border-[#f7f7f7]">
<img
                          className="absolute w-[84px] h-[84px] top-[-7px] left-[-7px] rotate-[12.91deg]"
                          alt="Element"
                          src="/17-1.png"
                        />
</div>
</div>
<div className="absolute w-[158px] top-0 left-0 font-['Inter',Helvetica] font-bold text-[#37383f] text-[11.7px] text-center leading-[18.8px]">
Says
                    </div>
<div className="top-[177px] left-2.5 inline-flex items-start justify-center gap-4 absolute">
{[1, 2].map((i) => (
                        <div key={`does-${i}`} className="inline-flex items-center justify-center gap-[1.33px] relative">
<img
                            className="relative w-[70.31px] h-[70.31px] mt-[-5.81px] mb-[-5.81px] ml-[-5.81px] mr-[-5.81px] rotate-[12.91deg]"
                            alt="Bg"
                            src="/bg-1.svg"
                          />
<div className="absolute w-[50px] h-[50px] top-1 left-1 font-['Inter',Helvetica] font-medium text-white text-[7.5px] text-center leading-[10.5px]">
What a user does
                          </div>
<img
                            className="absolute w-[15px] h-[15px] -top-px -left-px rotate-[12.91deg]"
                            alt="Bg"
                            src="/bg.svg"
                          />
</div>
))}
                    </div>
<div className="top-[177px] left-[219px] inline-flex items-start justify-center gap-4 absolute">
{[1, 2].map((i) => (
                        <div key={`feels-${i}`} className="inline-flex items-center justify-center gap-[1.33px] relative">
<img
                            className="relative w-[70.31px] h-[70.31px] mt-[-5.81px] mb-[-5.81px] ml-[-5.81px] mr-[-5.81px] rotate-[12.91deg]"
                            alt="Bg"
                            src="/bg-1.svg"
                          />
<div className="absolute w-[50px] h-[50px] top-1 left-1 font-['Inter',Helvetica] font-medium text-white text-[7.5px] text-center leading-[10.5px]">
What a user feels
                          </div>
<img
                            className="absolute w-[15px] h-[15px] -top-px -left-px rotate-[12.91deg]"
                            alt="Bg"
                            src="/bg.svg"
                          />
</div>
))}
                    </div>
<div className="absolute w-[158px] top-0 left-[205px] font-['Inter',Helvetica] font-bold text-[#37383f] text-[11.7px] text-center leading-[18.8px]">
Thinks
                    </div>
</div>
</CardContent>
</Card>
{/* Profile Card */}
              <Card className="absolute w-[427px] h-80 top-[170px] left-[497px] bg-[#f5f8fb] rounded-[21.34px] overflow-hidden transform -rotate-[12.91deg] shadow-none border-0">
<CardContent className="flex flex-col items-center gap-[17.07px] px-[23.47px] py-[32.01px]">
<div className="flex flex-col h-[157.33px] items-start gap-[17.07px] pl-[49.51px] pr-[27.66px] py-[14.18px] relative self-stretch w-full">
<div className="absolute w-[380px] h-[157px] top-0 left-0 bg-white rounded-[8.54px] shadow-[0px_1.04px_4.15px_#0000000d]" />
<div className="flex w-[273.78px] items-center gap-[44.39px] relative flex-[0_0_auto]">
<div className="flex flex-col w-[106.5px] items-center gap-[5.88px] relative">
<div className="flex flex-col items-center gap-[13.83px] relative self-stretch w-full flex-[0_0_auto]">
<div className="flex flex-col w-[106.16px] items-center gap-[11.07px] relative flex-[0_0_auto]">
<div className="inline-flex flex-col items-center gap-[6.92px] relative flex-[0_0_auto]">
<Avatar className="relative w-[62.24px] h-[62.24px]">
<div className="relative w-[75px] h-[75px] -top-1.5 -left-1.5">
<div className="absolute w-[62px] h-[62px] top-1.5 left-1.5 bg-[#ff854c] rounded-[31.12px]" />
<AvatarImage
                                    className="absolute w-[75px] h-[75px] top-0 left-0"
                                    src="/mask-group-8.png"
                                    alt="Profile"
                                  />
<AvatarFallback>VP</AvatarFallback>
<div className="absolute w-3.5 h-3.5 top-[52px] left-[53px]">
<div className="h-3.5">
<div className="relative w-4 h-[17px] -top-px -left-px bg-[url(/vector-1.svg)] bg-[100%_100%]">
<img
                                          className="absolute w-2 h-2 top-[5px] left-1"
                                          alt="Union"
                                          src="/union.svg"
                                        />
</div>
</div>
</div>
</div>
</Avatar>
<div className="flex flex-col w-[95.78px] items-center gap-[6.92px] relative flex-[0_0_auto]">
<div className="relative self-stretch h-[6.99px] mt-[-0.35px] font-['PT_Sans',Helvetica] font-bold text-dark text-[5.5px] text-center tracking-[0] leading-[6.9px] whitespace-nowrap">
{profileData.name}
                                </div>
</div>
</div>
<div className="relative w-[108.16px] h-[14.1px] mr-[-2.00px]">
<div className="absolute w-[72px] top-0 left-0 font-['PT_Sans',Helvetica] font-normal text-dark text-[5.5px] text-center tracking-[0] leading-[6.9px] whitespace-nowrap">
Профиль заполнен на {profileData.profileCompletion}%
                              </div>
<div className="absolute w-[106px] h-[3px] top-2.5 left-0 bg-[#e6f1fc] rounded-[6.92px]">
<Progress value={profileData.profileCompletion} className="w-[30px] h-[3px] rounded-[6.92px] [background:linear-gradient(81deg,rgba(48,115,215,1)_0%,rgba(160,198,255,1)_100%)]" />
</div>
</div>
</div>
<Badge className="inline-flex h-[13.83px] items-center justify-center gap-[3.46px] px-[8.3px] py-[4.5px] relative bg-white rounded-[13.83px] overflow-hidden border-[0.35px] border-solid border-[#3073d6]">
<span className="relative w-fit mt-[-0.93px] mb-[-0.23px] font-['PT_Sans',Helvetica] font-normal text-kfu-stylebluebuttondefault text-[5.5px] tracking-[0] leading-[5.5px] whitespace-nowrap">
Посмотреть публичный профиль
                            </span>
</Badge>
</div>
</div>
<div className="flex flex-col w-[121.02px] items-start gap-[11.07px] relative">
<div className="relative self-stretch mt-[-0.35px] font-['PT_Sans',Helvetica] font-bold text-[#000000d9] text-[6.9px] tracking-[0] leading-[5.5px]">
Общие сведения
                        </div>
<div className="flex flex-col items-start gap-[8.3px] relative self-stretch w-full flex-[0_0_auto]">
{profileData.personalInfo.map((item, index) => (
                            <div key={index} className="flex h-[6.57px] items-start gap-[6.92px] relative self-stretch w-full">
<div className="inline-flex items-center gap-[5.53px] relative flex-[0_0_auto]">
<div className="relative w-fit mt-[-0.35px] font-['PT_Sans',Helvetica] font-normal text-[#797979] text-[5.5px] tracking-[0] leading-[5.5px] whitespace-nowrap">
{item.label}
                                </div>
<div className="relative w-fit mt-[-0.35px] font-['PT_Sans',Helvetica] font-normal text-black text-[5.5px] tracking-[0] leading-[5.5px] whitespace-nowrap">
{item.value}
                                </div>
</div>
{index === 0 && (
                                <div className="absolute w-[7px] h-1 top-px left-[74px]">
<div className="relative w-[11px] h-[11px] top-[-3px] -left-0.5">
<img
                                      className="absolute w-[7px] h-[5px] top-[3px] left-0.5 rotate-[12.91deg]"
                                      alt="Union"
                                      src="/union-1.svg"
                                    />
</div>
</div>
)}
                              {index > 0 && index < 4 && (
                                <div className={`absolute w-[7px] h-1 ${index === 1 ? 'top-5 left-10' : index === 2 ? 'top-8 left-[87px]' : 'top-[46px] left-[114px]'} opacity-40`}>
<div className="relative w-[11px] h-[11px] top-[-3px] -left-0.5">
<img
                                      className="absolute w-[7px] h-[5px] top-[3px] left-0.5 rotate-[12.91deg]"
                                      alt="Union"
                                      src="/union-1.svg"
                                    />
</div>
</div>
)}
                              {index === 4 && (
                                <div className="top-0.5 left-[70px] absolute w-[7px] h-1 opacity-40">
<div className="relative w-[11px] h-[11px] top-[-3px] -left-0.5">
<img
                                      className="absolute w-[7px] h-[5px] top-[3px] left-0.5 rotate-[12.91deg]"
                                      alt="Union"
                                      src="/union-1.svg"
                                    />
</div>
</div>
)}
                            </div>
))}
                        </div>
</div>
</div>
</div>
<div className="flex flex-col w-[379.04px] items-start gap-[17.07px] pt-[10.24px] pb-[8.55px] px-0 relative flex-[0_0_auto] mb-[-32.01px] bg-white rounded-[8.54px] shadow-[0px_1.07px_4.27px_#0000000d]">
<div className="flex flex-col h-[127.89px] items-start gap-[8.54px] relative self-stretch w-full">
<div className="relative w-[57.9px] h-[5.7px]">
<div className="flex w-[58px] items-center gap-[4.27px] relative">
<div className="relative w-[48.45px] h-[5.7px]">
<div className="absolute top-0 left-[18px] font-['PT_Sans',Helvetica] font-bold text-[#000000d9] text-[7.1px] tracking-[0] leading-[5.7px] whitespace-nowrap">
{profileData.academicInfo.level}
                            </div>
</div>
</div>
</div>
<img
                        className="relative w-[369.53px] h-[85.05px] mt-[-28.11px] rotate-[12.91deg]"
                        alt="Rectangle"
                        src="/rectangle.svg"
                      />
<div className="relative w-[224.07px] h-[59.14px]">
<div className="flex flex-col w-[206px] items-start gap-[8.55px] relative top-[3px] left-[18px]">
{profileData.academicInfo.details.map((detail, index) => (
                            <div key={index} className="flex items-start gap-[4.27px] relative self-stretch w-full flex-[0_0_auto]">
<div className="relative w-fit mt-[-0.36px] font-['PT_Sans',Helvetica] font-normal text-[#797979] text-[5.7px] tracking-[0] leading-[5.7px] whitespace-nowrap">
{detail.label}
                              </div>
<div className="relative w-fit mt-[-0.36px] font-['PT_Sans',Helvetica] font-normal text-black text-[5.7px] tracking-[0] leading-[5.7px] whitespace-nowrap">
{detail.value}
                              </div>
</div>
))}
                        </div>
</div>
</div>
</div>
</CardContent>
</Card>
{/* Service Cards */}
              <Card className="absolute w-[427px] h-80 top-[170px] left-[105px] bg-bluelight rounded-[21.34px] overflow-hidden transform -rotate-[12.91deg] shadow-none border-0">
<CardContent className="flex items-center justify-center h-full">
<div className="inline-flex items-center justify-center gap-[18.14px] relative mt-[-27.88px] mb-[-27.88px]">
<div className="inline-flex flex-col items-start gap-[18.14px] pt-0 pb-[41.83px] px-0 relative">
{serviceCards.slice(0, 2).map((card, index) => (
                        <Card key={index} className="relative w-[169.88px] h-[136.59px] bg-white rounded-[7.58px] shadow-none border-0">
<CardContent className="p-[15.15px] flex flex-col h-full items-start justify-center gap-[3.79px]">
<div className="relative w-[90.45px] h-[90.79px]">
<div className="absolute w-[76px] top-0 left-0 font-['Open_Sans',Helvetica] font-bold text-[#202020] text-[7.7px] leading-[10.6px]">
{card.title}
                              </div>
<div className="absolute w-[86px] top-[27px] left-0 font-['Open_Sans',Helvetica] font-normal text-[#202020] text-[6.1px] leading-[9.8px]">
{card.description}
                              </div>
<Button variant="outline" className="flex w-[76px] h-[19px] items-center justify-center gap-[3.79px] px-[14.02px] py-[5.68px] absolute top-[72px] left-0 rounded-[11.36px] border-[0.38px] border-solid border-black">
<span className="relative w-fit mt-[-0.59px] font-['Open_Sans',Helvetica] font-bold text-dark text-[6.1px] text-center leading-[7.6px] whitespace-nowrap">
Посмотреть
                                </span>
</Button>
</div>
</CardContent>
<div className="absolute w-[46px] h-12 top-[30px] left-[111px]">
<div className="relative h-[51px] top-[-3px]">
<div className="absolute w-[46px] h-[46px] top-[5px] left-0 bg-bluelight rounded-[23.11px] opacity-80" />
<img
                                className="w-10 h-[45px] left"
                                className="w-10 h-[45px] left-[3px] absolute top-0"
                                alt="Image"
                                src={card.imageSrc}
                              />
</div>
</div>
</Card>
))}
                    </div>
<div className="inline-flex flex-col items-start gap-[18.14px] pt-[84.51px] pb-0 px-0 relative">
{serviceCards.slice(2, 4).map((card, index) => (
                        <Card key={index} className="relative w-[169.88px] h-[136.59px] bg-white rounded-[7.58px] shadow-none border-0">
<CardContent className="p-[15.15px] flex flex-col h-full items-start justify-center gap-[3.79px]">
<div className="inline-flex flex-col h-[90.92px] items-start justify-between relative">
<div className="inline-flex flex-col items-start gap-[11.36px] relative">
<div className="relative w-[63.26px] mt-[-0.38px] font-['Open_Sans',Helvetica] font-bold text-[#202020] text-[7.7px] leading-[10.6px]">
{card.title}
                                </div>
<div className="relative w-[81.07px] font-['Open_Sans',Helvetica] font-normal text-[#202020] text-[6.1px] leading-[9.8px]">
{card.description}
                                </div>
</div>
{index === 0 && (
                                <Button variant="outline" className="flex w-[75.76px] h-[18.94px] items-center justify-center gap-[3.79px] px-[14.02px] py-[5.68px] relative rounded-[11.36px] border-[0.38px] border-solid border-black">
<span className="relative w-fit mt-[-0.59px] font-['Open_Sans',Helvetica] font-bold text-dark text-[6.1px] text-center leading-[7.6px] whitespace-nowrap">
Посмотреть
                                  </span>
</Button>
)}
                            </div>
</CardContent>
<div className="absolute w-[46px] h-[55px] top-[22px] left-[111px]">
<div className="relative h-[61px] top-[-3px]">
<div className="absolute w-[46px] h-[46px] top-[7px] left-0 bg-bluelight rounded-[23.11px] opacity-80" />
<img
                                className={index === 0 ? "w-11 h-[61px] left-0 absolute top-0" : "absolute w-[50px] h-[50px] top-0 left-[3px] object-cover"}
                                alt="Image"
                                src={card.imageSrc}
                              />
</div>
</div>
</Card>
))}
                    </div>
</div>
</CardContent>
</Card>
{/* Schedule Card */}
              <Card className="absolute w-[427px] h-80 top-[416px] left-[497px] bg-[#f5f8fb] rounded-[21.34px] overflow-hidden transform -rotate-[12.91deg] shadow-none border-0">
<CardContent className="flex flex-col items-start justify-center gap-[2.67px] px-[23.47px] py-[34.15px]">
<div className="relative w-[610.38px] h-[299.59px] mr-[-230.55px]">
<div className="absolute w-[612px] h-40 top-0 left-0">
<div className="absolute top-0 left-[3px] opacity-60 font-['Open_Sans',Helvetica] font-bold text-dark text-[9.8px] leading-[13.1px] whitespace-nowrap">
Личный кабинет КФУ
                      </div>
<div className="absolute w-[610px] h-[131px] top-[29px] left-0">
<div className="h-[131px]">
<div className="relative w-[610px] h-[131px] rounded-[8.18px]">
<div className="absolute w-[610px] h-[131px] top-0 left-0 rounded-[8.18px] overflow-hidden shadow-[0px_1.23px_4.91px_#0000000d] [background:linear-gradient(89deg,rgba(113,170,255,1)_0%,rgba(61,122,212,1)_100%)]">
<div className="relative w-[585px] h-[104px] top-[26px] left-[22px]">
<div className="flex w-[585px] h-[61px] items-end gap-[327.68px] pl-0 pr-[11.86px] py-0 absolute top-[13px] left-0">
<div className="inline-flex flex-col items-start gap-[24.55px] relative mt-[-8.55px]">
<div className="relative w-fit mt-[-0.41px] font-['Open_Sans',Helvetica] font-extrabold text-white text-[14.7px] leading-[18.8px] whitespace-nowrap">
Расписание
                                    </div>
<div className="inline-flex items-center gap-[12.27px] relative">
{['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => (
                                        <div 
                                          key={day} 
                                          className={`relative ${index === 0 ? 'inline-flex items-start gap-[4.09px] px-[7.77px] py-[3.27px] bg-white rounded-[2.05px] overflow-hidden border-[0.41px] border-solid border-[#1e5cb7]' : ''}`}
                                        >
<div className={`relative w-fit ${index === 0 ? 'font-["Open_Sans",Helvetica] font-bold text-[#1851a5]' : 'font-["Open_Sans",Helvetica] font-bold text-white'} text-[9.8px] leading-[18.8px] whitespace-nowrap`}>
{day}
                                          </div>
</div>
))}
                                    </div>
</div>
<img
                                    className="relative flex-[0_0_auto] h-[68.73px] mb-[-10534.59px] ml-[-10436.94px]"
                                    alt="Frame"
                                    src="/frame-415.svg"
                                  />
</div>
<div className="inline-flex flex-col items-start gap-[8.18px] absolute top-0 left-[214px]">
{scheduleData.classes.map((classItem, index) => (
                                    <div key={index} className="relative w-[149.82px] h-[23px] mr-[-4.00px]">
<div className="left-0 font-normal whitespace-nowrap absolute top-0 font-['Open_Sans',Helvetica] text-white text-[6.5px] leading-[7.4px]">
{classItem.time}
                                      </div>
<div className="w-[94px] left-[52px] font-bold absolute top-0 font-['Open_Sans',Helvetica] text-white text-[6.5px] leading-[7.4px]">
{classItem.subject}
                                      </div>
</div>
))}
                                </div>
<img
                                  className="absolute w-5 h-[85px] top-[19px] left-[187px]"
                                  alt="Vector"
                                  src="/vector-88.svg"
                                />
</div>
</div>
<div className="absolute w-[125px] h-[110px] top-0.5 left-[395px]">
<div className="h-[110px]">
<div className="relative w-[114px] h-[121px] top-[-9px] left-[-7px]">
<div className="absolute w-[92px] h-[92px] top-[27px] left-[22px] bg-[#e5eefd] rounded-[45.91px/46.01px]" />
<img
                                    className="w-[68px] h-[121px] left-0 absolute top-0"
                                    alt="Image"
                                    src="/image-15.png"
                                  />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex w-[610px] h-[131px] items-start gap-[8.18px] absolute top-[169px] left-0">
{additionalServices.map((service, index) => (
                        <Card key={index} className="relative w-[198px] h-[130.91px] bg-white rounded-[8.18px] shadow-[0px_1.23px_4.91px_#0000000d] border-0">
<CardContent className="flex flex-col h-full items-center justify-center gap-[4.09px] px-[12.27px] py-[16.36px]">
<div className="relative w-[182.86px] h-[98.04px] ml-[-4.70px] mr-[-4.70px]">
<div className="w-[97px] relative h-[98px] left-[9px]">
<div className="absolute w-[82px] top-0 left-0 font-['Open_Sans',Helvetica] font-bold text-[#202020] text-[8.2px] leading-[11.5px]">
{service.title}
                                </div>
<div className="absolute w-[93px] top-[29px] left-0 font-['Open_Sans',Helvetica] font-normal text-[#202020] text-[6.5px] leading-[10.6px]">
{service.description}
                                </div>
<Button variant="outline" className="flex w-[82px] h-5 items-center justify-center gap-[4.09px] px-[15.14px] py-[6.14px] absolute top-[78px] left-0 rounded-[12.27px] border-[0.41px] border-solid border-black">
<span className="relative w-fit mt-[-0.82px] font-['Open_Sans',Helvetica] font-bold text-dark text-[6.5px] text-center leading-[8.2px] whitespace-nowrap">
{index === 0 ? "Перейти" : "Посмотреть"}
                                  </span>
</Button>
</div>
</div>
</CardContent>
<div className="absolute w-[51px] h-[53px] top-4 left-[117px]">
<div className="relative w-[52px] h-[58px] top-[-3px] -left-0.5">
<div className="absolute w-[50px] h-[50px] top-[7px] left-0.5 bg-kfu-stylebluebuttonhover rounded-[24.97px/25.02px] opacity-80" />
<img
                                className="w-12 h-[50px] left-0 absolute top-0"
                                alt="Image"
                                src={service.imageSrc}
                              />
</div>
</div>
</Card>
))}
                    </div>
</div>
</CardContent>
</Card>
{/* Mobile Cards */}
              <Card className="absolute w-[427px] h-80 top-[416px] left-[105px] bg-bluelight rounded-[21.34px] overflow-hidden transform -rotate-[12.91deg] shadow-none border-0">
<CardContent className="h-full">
{[1, 2, 3].map((index) => (
                    <div 
                      key={index} 
                      className={`absolute w-[100px] h-[217px] bg-white rounded-[12.8px] ${
                        index === 1 
                          ? 'top-[52px] left-[163px]' 
                          : index === 2 
                            ? 'top-[71px] left-[280px]' 
                            : 'top-8 left-[46px]'
                      }`}
                    >
<div className="relative h-[217px] rounded-[12.8px]">
<div className="flex flex-col w-[83px] items-center gap-[2.13px] absolute top-[100px] left-[9px]">
<div className="relative self-stretch mt-[-0.27px] font-['Inter',Helvetica] font-bold text-[#afafb2] text-[7.5px] text-center tracking-[0] leading-[11.2px]">
37 × 12
                          </div>
</div>
<div className="flex w-[100px] h-[217px] items-center justify-center gap-[2.67px] absolute top-0 left-0 rounded-[12.8px] overflow-hidden">
<div className="relative w-[100.03px] h-[216.59px] rounded-[12.8px]" />
</div>
</div>
</div>
))}
                </CardContent>
</Card>
</div>
</div>
</div>
</div>
</section>
);
};