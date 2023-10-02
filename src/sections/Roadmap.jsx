import React, { useEffect, useRef } from "react";
import Description from "../components/Description";
import RoadmapBox from "../components/RoadmapBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
  const sectionRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1281) {
      return;
    } else {
      sectionRef.current.style.height = slideRef.current.clientWidth + "px";
      gsap.fromTo(
        slideRef.current,
        {
          x: 0,
        },
        {
          x: -+(slideRef.current.clientWidth - window.innerWidth + 100),
          duration: 3,
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
            start: "top 0%",
            end: "bottom top",
          },
        }
      );
    }
  }, []);

  //Reload so as to get the updated value of window.innerwidth
  //in case user resize their browser
  const handleReload = () => {
    if (window.innerWidth < 451) {
      return;
    }
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("resize", handleReload);

    return () => {
      window.removeEventListener("resize", handleReload);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="roadmap"
      className="relative mt-[80px] vsm:mt-[160px] mb-[80px] w-full h-fit xl:h-[300vh]"
    >
      <div className="xmd:sticky top-[20px] px-[20px] vsm:px-[30px] h-fit">
        <Description text="/ROADMAP" />

        <h1 className="font-Anton pt-[30px] xmd:pt-0 text-[45px] vsm:text-[50px] xmd:text-[70px] xl:text-[87px] tracking-[-1px] vsm:tracking-[-2.6px] leading-[1.1] xmd:leading-[95px]">
          <span className="xmd:block xmd:ml-[30%]">This Roadmap Outlines</span>{" "}
          <span>Our</span>{" "}
          <span className="text-[#f54a14]">
            Goals And Where We We Are Going
          </span>
        </h1>

        <div className="mt-[60px] w-full h-fit overflow-x-auto xmd:overflow-x-hidden">
          <div
            ref={slideRef}
            className="w-full xmd:w-fit h-fit flex flex-wrap xl:flex-nowrap justify-center xl:justify-start xl:flex-row items-center xmd:items-start gap-[20px]"
          >
            <RoadmapBox index="01" title="Launch" />
            <RoadmapBox index="02" title="Physical Part" />
            <RoadmapBox index="03" title="Community Giveaway" />
            <RoadmapBox index="04" title="Merchandise Drop" />
            <RoadmapBox index="05" title="Collabaration" />
            <RoadmapBox index="06" title="Future Drops" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
