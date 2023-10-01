import React from "react";
import Description from "../components/Description";
import img1 from "../assets/heroImg1.jpg";
import img2 from "../assets/categ2.jpg";
import img3 from "../assets/categ3.jpg";

const Category = () => {
  return (
    <section
      id="category"
      className="mt-[160px] mb-[80px] w-full px-[30px] relative min-h-[50vh]"
    >
      <Description text="/CATEGORY" />

      <h1 className="ml-[30%] font-Anton text-[87px] tracking-[-2.6px] leading-[95.7px]">
        Choose <span className="text-orange">Your Category</span>
      </h1>

      <div className="mt-[70px] w-full flex">
        <div className="w-[33.3%] h-[612px] py-[42px] pr-[14px] border-y-[1px] border-[#27272733]">
          <div className="relative w-full h-[500px] group duration-200 rounded-[10px] overflow-hidden">
            <img
              src={img1}
              className="h-full w-full object-cover rounded-[10px]"
              alt="category"
            />

            {/* On hover */}
            <div className="opacity-0 absolute top-0 left-0 w-full h-full bg-black/50 group-hover:opacity-100 grid place-items-center duration-300">
              <button className="px-[60px] py-[20px] rounded-[50px] bg-white hover:bg-orange text-[#272727] hover:text-white text-[14px] font-medium duration-300">
                VIEW ALL
              </button>
            </div>
          </div>
          <div className="mt-[10px] w-full flex justify-between items-center">
            <p className="tracking-[-0.48px] text-[#949494]">01</p>
            <p className="tracking-[-0.48px] font-medium">CATS</p>
          </div>
        </div>

        <div className="w-[33.3%] h-[612px] py-[42px] px-[14px] border-y-[1px] border-x-[1px] border-[#27272733]">
          <div className="relative w-full h-[500px] group rounded-[10px] overflow-hidden">
            <img
              src={img2}
              className="h-full w-full object-cover rounded-[10px]"
              alt="category"
            />

            {/* On hover */}
            <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 grid place-items-center duration-300">
              <button className="px-[60px] py-[20px] rounded-[50px] bg-white hover:bg-orange text-[#272727] hover:text-white text-[14px] font-medium duration-300">
                VIEW ALL
              </button>
            </div>
          </div>
          <div className="mt-[10px] w-full flex justify-between items-center">
            <p className="tracking-[-0.48px] text-[#949494]">02</p>
            <p className="tracking-[-0.48px] font-medium">PANDAS</p>
          </div>
        </div>

        <div className="w-[33.3%] h-[612px] py-[42px] pl-[14px] border-y-[1px] border-[#27272733]">
          <div className="relative w-full h-[500px] group rounded-[10px] overflow-hidden">
            <img
              src={img3}
              className="h-full w-full object-cover rounded-[10px]"
              alt="category"
            />

            {/* On hover */}
            <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 grid place-items-center duration-300">
              <button className="px-[60px] py-[20px] rounded-[50px] bg-white hover:bg-orange text-[#272727] hover:text-white text-[14px] font-medium duration-300">
                VIEW ALL
              </button>
            </div>
          </div>
          <div className="mt-[10px] w-full flex justify-between items-center">
            <p className="tracking-[-0.48px] text-[#949494]">03</p>
            <p className="tracking-[-0.48px] font-medium">OCTOPUSES</p>
          </div>
        </div>
      </div>

      <button className="mt-[60px] block mx-auto px-[60px] py-[20px] rounded-[50px] bg-[#272727] hover:bg-orange text-white text-[14px] font-medium duration-300">
        SEE ALL CATEGORIES
      </button>
    </section>
  );
};

export default Category;
