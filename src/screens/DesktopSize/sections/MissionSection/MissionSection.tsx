import React from "react";

export const MissionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-24 py-16">
      <h2 className="text-center font-h3 text-[42px] leading-[140%] tracking-[0]">
        <span className="text-black">Цель разработки: внедрение принципа </span>
        <span className="text-[#3073d6]">
          «Одно физическое лицо — одна учётная запись»
        </span>
      </h2>

      <div className="relative w-full max-w-[760px] h-[411px]">
        <div className="relative h-[448px] top-[-37px]">
          {/* Right avatar */}
          <div
            className="absolute w-96 h-96 top-[50px] left-[376px] bg-[#e0ecfe] rounded-[192px] bg-cover bg-center"
            style={{ backgroundImage: "url(/imgavatarright.png)" }}
          />

          {/* Left avatar */}
          <div
            className="absolute w-96 h-96 top-[50px] left-0 bg-[#e0ecfe] rounded-[192px] bg-cover bg-center"
            style={{ backgroundImage: "url(/imgavatarleft.png)" }}
          />

          {/* Center connecting element */}
          <div
            className="absolute w-[448px] h-[448px] top-0 left-[159px] bg-cover"
            style={{ backgroundImage: "url(/mask-group-6.png)" }}
          />
        </div>
      </div>
    </section>
  );
};
