import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { AboutSection } from "./sections/AboutSection";
import { CareerSection } from "./sections/CareerSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { GoalsSection } from "./sections/GoalsSection";
import { HeroSection } from "./sections/HeroSection";
import { MissionSection } from "./sections/MissionSection/MissionSection";
import { RoadmapSection } from "./sections/RoadmapSection/RoadmapSection";
import { RolesSection } from "./sections/RolesSection";
import { StatisticsSection } from "./sections/StatisticsSection/StatisticsSection";

export const DesktopSize = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "О нас", href: "#about" },
    { label: "Роудмап", href: "#roadmap" },
    { label: "Роли", href: "#roles" },
    { label: "Фичи", href: "#features" },
    { label: "Стажировка", href: "#career" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <header className="w-full fixed top-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="relative w-[177.02px] h-10">
            <img
              className="absolute w-[33px] h-10 top-0 left-0"
              alt="Vector"
              src="/vector-14.svg"
            />
            <div className="absolute w-[132px] h-[35px] top-px left-[45px] bg-[url(/group-8.png)] bg-[100%_100%]" />
          </div>

          <div className="flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-[52px]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="font-t2 text-white text-xl leading-5"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="px-[38px] py-[15px] h-[50px] bg-bluebright rounded-[30px] font-t3-bold text-white">
              Протестировать
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <StatisticsSection />
        <RoadmapSection />
        <MissionSection />
        <GoalsSection />
        <RolesSection />
        <FeaturesSection />
        <CareerSection />
        <FooterSection />
      </main>
    </div>
  );
};
