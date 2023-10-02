import React from "react";

const Member = ({ img, name, role }) => {
  return (
    <div className="w-full vsm:w-[410px] h-fit vsm:h-[527px]">
      <div className="h-fit vsm:h-[480px] overflow-hidden rounded-[10px] group">
        <img
          src={img}
          className="h-full w-full object-cover group-hover:scale-[1.1] duration-700 "
          alt="member"
        />
      </div>
      <p className="mt-[10px] font-medium text-grey tracking-[-0.48px] uppercase leading-[16px]">
        {name}
      </p>
      <p className="mt-[2px] font-medium text-[#949494] tracking-[-0.48px] uppercase leading-[16px]">
        {role}
      </p>
    </div>
  );
};

export default Member;
