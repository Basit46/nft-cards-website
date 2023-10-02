import React from "react";
import Description from "../components/Description";

const TheFuture = () => {
  return (
    <section className="w-full mt-[80px] vsm:mt-[160px] relative px-[20px] vsm:px-[30px]">
      <Description text="/THE FUTURE" />

      <h1 className="font-Anton pt-[30px] xmd:pt-0 text-[45px] vsm:text-[50px] xmd:text-[70px] xl:text-[87px] tracking-[-1px] vsm:tracking-[-2.6px] leading-[1.1] xmd:leading-[95px]">
        <span className="block xmd:ml-[30%]">Our Project Includes</span>{" "}
        Exclusive Digital{" "}
        <span className="text-[#f54a14]">
          Maps Designed By Our Leading Designers
        </span>
      </h1>

      <div className="mt-[30px] flex justify-end gap-[20px]">
        <div className="w-[50%] md:w-[409px]">
          <p className="text-[#525252] text-[14px] md:text[16px] tracking-[-0.8px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis
            accusantium cumque modi aperiam, nesciunt iure praesentium eos et
          </p>
        </div>
        <div className="w-[50%] xmd:w-[409px]">
          <p className="text-[#525252] text-[14px] md:text[16px] tracking-[-0.8px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis
            accusantium cumque modi aperiam, nesciunt iure praesentium eos et
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheFuture;
