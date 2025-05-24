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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="relative w-[177.02px] h-10">
            <img
              className="w-[33px] h-10"
              alt="Vector"
              src="/vector-14.svg"
            />
            <div className="ml-[45px] w-[132px] h-[35px] bg-[url(/group-8.png)] bg-[100%_100%]" />
          </div>

          {/* Мобильное меню */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div className={`lg:flex items-center gap-8 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-dark p-4' : 'hidden'}`}>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col lg:flex-row gap-4 lg:gap-[52px]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="font-t2 text-white text-xl leading-5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="px-[38px] py-[15px] h-[50px] bg-bluebright rounded-[30px] font-t3-bold text-white w-full lg:w-auto">
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