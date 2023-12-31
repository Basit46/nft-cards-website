import React, { useEffect, useState, useRef } from "react";
import heroImg1 from "../assets/heroImg1.jpg";
import heroImg2 from "../assets/heroimg2.jpg";
import heroImg3 from "../assets/heroimg3.png";
import Splitting from "splitting";
import gsap from "gsap";

const Hero = () => {
  const heroTextRef = useRef();

  const images = [heroImg1, heroImg2, heroImg3];
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i >= 2) {
        i = 0;
        setCurrIndex(0);
      } else {
        i++;
        setCurrIndex(i);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //GSAP animation for hero text
  useEffect(() => {
    const chars = Splitting({
      target: heroTextRef.current,
      by: "chars",
    });

    chars[0].chars.forEach((char, index) => {
      gsap.fromTo(
        char,
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: index * 0.1 }
      );
    });
  }, []);

  return (
    <section className="hero w-full mt-[140px]">
      <h1
        ref={heroTextRef}
        className="w-full px-[20px] vsm:px-[30px] text-left font-Anton text-[#f54a14] text-[4.8rem] vsm:text-[6rem] xmd:text-[8.72rem] tracking-[-2.76px] leading-[1] xmd:leading-[136.62px]"
      >
        DIGITAL COLLECTION CARDS
      </h1>

      <div className="relative mx-[20px] vsm:mx-[30px] h-[350px] vsm:h-[400px] md:h-[700px] mt-[20px] rounded-[10px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            className={`${
              currIndex == index ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 w-full h-full object-cover duration-1000 rounded-[10px]`}
            src={img}
            alt="hero image"
          />
        ))}
      </div>

      <div className="mt-[40px] w-full overflow-x-hidden border-y-[1px] border-black py-[30px]">
        <div className="slide w-fit flex gap-[30px]">
          <div className="w-fit pl-[30px] flex flex-nowrap items-center gap-[30px]">
            <h1 className="font-Anton text-[1.2rem] sm:text-[1.875rem] whitespace-nowrap">
              Explore This Collection Carefully
            </h1>
            <div className="h-[10px] w-[10px] bg-[#f54a14]"></div>
            <h1 className="font-Anton text-[1.2rem] sm:text-[1.875rem] whitespace-nowrap">
              Explore This Collection Carefully
            </h1>
            <div className="h-[10px] w-[10px] bg-[#f54a14]"></div>
            <h1 className="font-Anton text-[1.2rem] sm:text-[1.875rem] whitespace-nowrap">
              Explore This Collection Carefully
            </h1>
            <div className="h-[10px] w-[10px] bg-[#f54a14]"></div>
          </div>
          <div className="w-fit flex flex-nowrap items-center gap-[30px]">
            <h1 className="font-Anton text-[1.2rem] sm:text-[1.875rem] whitespace-nowrap">
              Explore This Collection Carefully
            </h1>
            <div className="h-[10px] w-[10px] bg-[#f54a14]"></div>
            <h1 className="font-Anton text-[1.2rem] sm:text-[1.875rem] whitespace-nowrap">
              Explore This Collection Carefully
            </h1>
            <div className="h-[10px] w-[10px] bg-[#f54a14]"></div>
            <h1 className="font-Anton text-[1.2rem] sm:text-[1.875rem] whitespace-nowrap">
              Explore This Collection Carefully
            </h1>
            <div className="h-[10px] w-[10px] bg-[#f54a14]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
