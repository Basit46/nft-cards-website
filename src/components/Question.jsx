import React, { useState } from "react";
import { PiMinusLight, PiPlusLight } from "react-icons/pi";

const Question = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className="w-full h-fit bg-white rounded-[10px] p-[30px] group"
    >
      <div className="w-full flex justify-between items-center">
        <h1 className="font-Anton text-grey group-hover:text-orange duration-200 text-[30px] tracking-[-0.3px] leading-[36px]">
          Why Buy Our Digital NFT Cards?
        </h1>
        <button>
          {!isOpen ? (
            <PiPlusLight className="text-[33px]" />
          ) : (
            <PiMinusLight className="text-[33px]" />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "h-[73px]" : "h-0"
        } pt-[10px] duration-500 overflow-hidden`}
      >
        <p className="w-[60%] tracking-[-0.8px] leading-[24px] text-[#525252]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam
          exercitationem officiis odit consectetur adipisicing
        </p>
      </div>
    </div>
  );
};

export default Question;
