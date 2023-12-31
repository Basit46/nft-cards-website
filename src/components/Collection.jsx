import React from "react";

const Collection = ({ img, text1, text2 }) => {
  return (
    <div className="w-full xmd:w-[23.5%] group xmd:hover:w-[60%] h-fit vsm:h-[576px] duration-[0.4s] overflow-hidden">
      <div className="h-fit vsm:h-[550px] rounded-[10px] overflow-hidden">
        <img
          src={img}
          className="h-full w-full group-hover:scale-110 duration-[0.4s] object-cover rounded-[10px]"
          alt="collection"
        />
      </div>
      <div className="xmd:opacity-0 xmd:group-hover:opacity-100 w-full flex justify-between">
        <p className="text-grey font-medium tracking-[-0.48px]">{text1}</p>
        <p className="text-[#949494] font-medium tracking-[-0.48px]">
          /{text2}
        </p>
      </div>
    </div>
  );
};

export default Collection;
