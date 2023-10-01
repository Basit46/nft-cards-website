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
  }, []);

  return (
    <div
      ref={sectionRef}
      id="roadmap"
      className="relative mt-[160px] mb-[80px] w-full h-[300vh]"
    >
      <div className="sticky top-[20px] px-[30px]">
        <Description text="/ROADMAP" />

        <h1 className="font-Anton text-[87px] tracking-[-2.6px] leading-[95px]">
          <span className="block ml-[30%]">This Roadmap Outlines</span>
          <span>Our</span>{" "}
          <span className="text-[#f54a14]">
            Goals And Where We Want To Take
          </span>
        </h1>

        <div className="mt-[60px] w-full overflow-x-hidden">
          <div ref={slideRef} className="w-fit flex gap-[20px]">
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
