import React from "react";
import logo from "../assets/logo2.svg";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mt-[80px] mb-[20px] py-[80px] min-h-[30vh] border-y-black border-[1px] mx-[30px] flex justify-between"
    >
      <div>
        <img src={logo} width={205} alt="logo" />
        <div className="mt-[20px] flex gap-[5px]">
          <a
            className="border-[1px] border-grey rounded-[50px] py-[10px] px-[12.8px] text-[14px] font-medium uppercase text-grey"
            href="https://twitter.com/Basit0282"
            target="blank"
          >
            FACEBOOK
          </a>
          <a
            className="border-[1px] border-grey rounded-[50px] py-[10px] px-[12.8px] text-[14px] font-medium uppercase text-grey"
            href="https://twitter.com/Basit0282"
            target="blank"
          >
            DISCORD
          </a>
          <a
            className="border-[1px] border-grey rounded-[50px] py-[10px] px-[12.8px] text-[14px] font-medium uppercase text-grey"
            href="https://twitter.com/Basit0282"
            target="blank"
          >
            TWITTER
          </a>
        </div>
      </div>

      <div className="mr-[50px]">
        <h1 className="text-[2.5rem] font-Anton">
          DEVELOPED BY{" "}
          <span className="text-orange">
            <a href="mailto:hassanbasitope@gmail.com">HASSAN BASIT</a>
          </span>
          <span className="text-[1.3rem] font-RobotoMono">
            <sup>(Turning Coffee☕ into Code)</sup>
          </span>
        </h1>

        <h1 className="text-[2.5rem] font-Anton">
          DESIGNED BY{" "}
          <span className="text-orange">
            <a href="mailto:Info@db.Com">DIGITAL BUTLERS</a>
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
