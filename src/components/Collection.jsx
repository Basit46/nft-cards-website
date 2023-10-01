import React from "react";

const Collection = ({ img, text1, text2 }) => {
  return (
    <div className="w-[23.5%] group hover:w-[60%] h-[576px] duration-[0.4s] overflow-hidden">
      <div className="h-[550px] rounded-[10px] overflow-hidden">
        <img
          src={img}
          className="h-full w-full group-hover:scale-110 duration-[0.4s] object-cover rounded-[10px]"
          alt="collection"
        />
      </div>
      <div className="opacity-0 group-hover:opacity-100 w-full flex justify-between">
        <p className="text-grey font-medium tracking-[-0.48px]">{text1}</p>
        <p className="text-[#949494] font-medium tracking-[-0.48px]">
          /{text2}
        </p>
      </div>
    </div>
  );
};

export default Collection;
