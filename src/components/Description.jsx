import React from "react";

const Description = ({ text }) => {
  return (
    <h1 className="absolute top-0 left-0 text-[#f54a14] uppercase ml-[20px] vsm:ml-[30px] font-bold text-[14px]">
      {text}
    </h1>
  );
};

export default Description;
