import React from "react";
import Description from "../components/Description";
import loveIcon from "../assets/love.svg";
import checkIcon from "../assets/checkmark.svg";
import starIcon from "../assets/star.svg";

const Rarity = () => {
  return (
    <section id="rarity" className="w-full bg-grey py-[120px] text-white">
      <div className="relative px-[30px]">
        <Description text="/RARITY" />

        <h1 className="font-Anton xmd:text-center pt-[30px] xmd:pt-0 text-[45px] vsm:text-[50px] xmd:text-[70px] xl:text-[87px] tracking-[-1px] vsm:tracking-[-2.6px] leading-[1.1] xmd:leading-[95px]">
          Types Of Rarity
        </h1>

        <div className="mt-[50px] xmd:mt-[100px] flex flex-col xmd:flex-row items-center justify-between">
          <RarityFeature icon={loveIcon} title="Exclusive" />
          <div className="hidden xmd:block w-0 h-[250px] border-l-[1px] border-[#525252]"></div>
          <RarityFeature icon={checkIcon} title="Rare" />
          <div className="hidden xmd:block w-0 h-[250px] border-l-[1px] border-[#525252]"></div>
          <RarityFeature icon={starIcon} title="Legendary" />
        </div>
      </div>
    </section>
  );
};

export default Rarity;

const RarityFeature = ({ icon, title }) => {
  return (
    <div className="w-full xmd:w-[32%] h-[294px] p-[40px] flex flex-col justify-between items-center border-y-[1px] border-[#525252]">
      <img src={icon} alt="rarity icon" />
      <h1 className="text-center font-Anton text-[40px] tracking-[-1.2px] leading-[44px]">
        {title}
      </h1>
      <p className="text-center text-[#949494] leading-[24px] tracking-[-0.8px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit optio
        alias tempora veniam et autem
      </p>
    </div>
  );
};
