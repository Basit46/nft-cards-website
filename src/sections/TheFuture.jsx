import React from "react";
import Description from "../components/Description";

const TheFuture = () => {
  return (
    <section className="w-full mt-[160px] relative px-[30px]">
      <Description text="/THE FUTURE" />

      <h1 className="font-Anton text-[87px] tracking-[-2.6px] leading-[95px]">
        <span className="block ml-[30%]">Our Project Includes</span> Exclusive
        Digital{" "}
        <span className="text-[#f54a14]">
          Maps Designed By Our Leading Designers
        </span>
      </h1>

      <div className="mt-[30px] flex justify-end gap-[20px]">
        <div className="w-[409px]">
          <p className="text-[#525252] tracking-[-0.8px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis
            accusantium cumque modi aperiam, nesciunt iure praesentium eos et
            iusto quidem omnis odit earum iste, rem doloribus aliquid labore
            dicta accusamus voluptates consequuntur eius vero recusandae
            aspernatur! Adipisci, voluptates?
          </p>
        </div>
        <div className="w-[409px]">
          <p className="text-[#525252] tracking-[-0.8px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis
            accusantium cumque modi aperiam, nesciunt iure praesentium eos et
            iusto quidem omnis odit earum iste, rem doloribus aliquid labore
            dicta accusamus voluptates consequuntur eius vero recusandae
            aspernatur! Adipisci, voluptates?
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheFuture;
