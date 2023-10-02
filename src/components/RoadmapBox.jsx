import React from "react";

const RoadmapBox = ({ index, title }) => {
  return (
    <div className="w-full sm:w-[410px] h-fit sm:h-[388px] p-[20px] sm:p-[40px] bg-white rounded-[10px]">
      <div className="w-[65px] h-[65px] bg-orange text-white grid place-items-center rounded-[10px] tracking-[-0.8px]">
        {index}
      </div>
      <h1 className="mt-[20px] sm:mt-[40px] mb-[10px] sm;mb-[20px] text-[40px] font-Anton text-grey leading-[1]">
        {title}
      </h1>
      <p className="tracking-[-0.8px] leading-[24px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati
        molestiae fugiat harum ut, modi distinctio est molestias deserunt
      </p>
    </div>
  );
};

export default RoadmapBox;
