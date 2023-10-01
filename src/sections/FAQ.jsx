import React from "react";
import Description from "../components/Description";
import Question from "../components/Question";

const FAQ = () => {
  return (
    <section
      id="FAQ"
      className="mt-[160px] mb-[80px] w-full px-[30px] relative min-h-[50vh]"
    >
      <Description text="/FAQ" />

      <h1 className="font-Anton text-[87px] tracking-[-2.6px] leading-[95px] text-right mr-[20px]">
        <span className="">People Often</span>{" "}
        <span className="text-orange">Ask Us About</span>
      </h1>

      <div className="mt-[70px] w-full flex flex-col gap-[20px]">
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </section>
  );
};

export default FAQ;
