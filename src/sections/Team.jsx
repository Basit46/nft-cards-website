import React from "react";
import Description from "../components/Description";
import img1 from "../assets/mem1.jpg";
import img2 from "../assets/mem2.jpg";
import img3 from "../assets/mem3.jpg";
import img4 from "../assets/mem4.jpg";
import img5 from "../assets/mem5.jpg";
import img6 from "../assets/mem6.jpg";
import Member from "../components/Member";

const Team = () => {
  return (
    <section
      id="team"
      className="mt-[160px] mb-[80px] w-full px-[30px] relative min-h-[50vh]"
    >
      <Description text="/WHO WE ARE" />

      <h1 className="font-Anton text-[87px] tracking-[-2.6px] leading-[95px]">
        <span className="block ml-[32%]">Our Team Has 3 Years</span>
        <span className="text-[#f54a14]">Experience In NFT Development</span>
      </h1>

      <div className="mt-[70px] w-full flex flex-wrap gap-[30px]">
        <Member img={img1} name="Basit" role="Developer" />
        <Member img={img2} name="jessica" role="Designer" />
        <Member img={img3} name="Michael" role="Designer" />
        <Member img={img4} name="Jennifer" role="CEO" />
        <Member img={img5} name="Mattew" role="CTO" />
        <Member img={img6} name="John" role="Designer" />
      </div>
    </section>
  );
};

export default Team;
