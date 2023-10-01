import React from "react";
import Description from "../components/Description";

const Stats = () => {
  return (
    <section
      id="stats"
      className="stats-section mt-[100px] w-full bg-[#272727] py-[120px] px-[30px] text-white"
    >
      <div className="relative">
        <Description text="/STATS" />

        <h1 className="text-center font-[Anton] text-[87px] tracking-[-2.6px] leading-[95.7px]">
          We Got Stats
        </h1>

        <div className="mt-[80px] grid-cont">
          <div className="flex justify-between items-center">
            <div className="border-y-[1px] border-[#525252]">
              <h1>12,000</h1> <p>TOTAL ASSETS</p>
            </div>
            <div className="line"></div>
            <div className="border-y-[1px] border-[#525252]">
              <h1>5,265</h1> <p>TOTAL OWNERS</p>
            </div>
            <div className="line"></div>
            <div className="border-y-[1px] border-[#525252]">
              <h1>15,354</h1> <p>TOTAL SALES</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="border-b-[1px] border-[#525252]">
              <h1>12,564</h1> <p>TOTAL VOLUME</p>
            </div>
            <div className="line"></div>
            <div className="border-b-[1px] border-[#525252]">
              <h1>153,8</h1> <p>24 VOLUME</p>
            </div>
            <div className="line"></div>
            <div className="border-b-[1px] border-[#525252]">
              <h1>230,000+</h1> <p>COMMUNITY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
