import React, { useEffect, useRef } from "react";
import img1 from "../assets/comm1.jpg";
import img2 from "../assets/comm2.jpg";
import img3 from "../assets/comm3.jpg";
import img4 from "../assets/comm4.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  const sectionRef = useRef();
  const slide1Ref = useRef();
  const slide2Ref = useRef();

  useEffect(() => {
    if (window.innerWidth < 1280) {
      return;
    }
    gsap.to(slide1Ref.current, {
      y: -150,
      duration: 3,
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 2,
        start: "top 30%",
      },
    });

    gsap.to(slide2Ref.current, {
      y: 150,
      duration: 3,
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 2,
        start: "top 30%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-[130px] mx-[20px] vsm:mx-[30px] h-fit xl:h-[543px] bg-grey py-[40px] xl:py-0 px-[20px] xl:px-0 text-white rounded-[10px] flex flex-col-reverse xl:flex-row justify-center gap-[80px] items-center"
    >
      <div className="w-full xl:w-fit h-full overflow-y-hidden">
        <div className="w-full xl:w-fit h-fit flex gap-[30px] xl:gap-[50px]">
          {/* Slide 1 */}
          <div
            ref={slide1Ref}
            className="flex flex-row xl:flex-col gap-[30px] xl:mt-[-220px]"
          >
            <div className="w-[300px] vsm:w-[50%] xl:w-[230px] h-fit xl:h-[368px] rounded-[10px] overflow-hidden">
              <img
                src={img1}
                className="h-full w-full object-cover"
                alt="community"
              />
            </div>

            <div className="w-[300px] vsm:w-[50%] xl:w-[230px] h-fit xl:h-[368px] rounded-[10px] overflow-hidden">
              <img
                src={img2}
                className="h-full w-full object-cover"
                alt="community"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div
            ref={slide2Ref}
            className="flex flex-row xl:flex-col gap-[30px] xl:mt-[-10px]"
          >
            <div className="w-[300px] vsm:w-[50%] xl:w-[230px] h-fit xl:h-[368px] rounded-[10px] overflow-hidden">
              <img
                src={img3}
                className="h-full w-full object-cover"
                alt="community"
              />
            </div>

            <div className="w-[300px] vsm:w-[50%] xl:w-[230px] h-fit xl:h-[368px] rounded-[10px] overflow-hidden">
              <img
                src={img4}
                className="h-full w-full object-cover"
                alt="community"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-[35%] flex flex-col items-center">
        <h1 className="font-Anton text-center text-[50px] xl:text-[87px] tracking-[-2.6px] leading-[1.1] xl:leading-[95px]">
          Join The Community
        </h1>
        <p className="w-[90%] vsm:w-full mt-[20px] mb-[40px] text-[#949494] tracking-[-0.8px] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          iusto laudantium, magni eum id eos rerum.
        </p>
        <button className="bg-white text-grey hover:bg-orange hover:text-white duration-300 py-[20px] px-[60px] rounded-[50px] text-[14px] font-medium tracking-[-0.42px]">
          DISCORD
        </button>
      </div>
    </section>
  );
};

export default Community;
