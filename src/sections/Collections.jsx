import React from "react";
import Description from "../components/Description";
import img1 from "../assets/coll1.png";
import img2 from "../assets/coll2.png";
import img3 from "../assets/coll3.png";
import img4 from "../assets/coll4.png";
import Collection from "../components/Collection";

const Collections = () => {
  return (
    <section className="mt-[160px] mb-[80px] w-full px-[30px] relative min-h-[50vh]">
      <Description text="/COLLECTION" />

      <h1 className="font-Anton pt-[30px] xmd:pt-0 text-[45px] vsm:text-[50px] xmd:text-[70px] xl:text-[87px] tracking-[-1px] vsm:tracking-[-2.6px] leading-[1.1] xmd:leading-[95px]">
        <span className="xmd:block xmd:ml-[30%]">We Offer A Variety Of</span>{" "}
        <span className="text-[#f54a14]">
          Digital Pictures For Your Every Taste
        </span>
      </h1>

      <div className="mt-[70px] w-full flex flex-col xmd:flex-row gap-[20px] justify-between">
        <Collection img={img1} text1="GHOST DIAMOND" text2="GHOSTS" />
        <Collection img={img2} text1="OCTOPUS ANGEL" text2="OCTOPUSES" />
        <Collection img={img3} text1="CAT ARMOR" text2="CATS" />
        <Collection img={img4} text1="PANDA DIAMOND" text2="PANDAS" />
      </div>

      <button className="mt-[60px] block mx-auto px-[60px] py-[20px] rounded-[50px] bg-[#272727] hover:bg-orange text-white text-[14px] font-medium duration-300">
        VIEW FULL COLLECTION
      </button>
    </section>
  );
};

export default Collections;
