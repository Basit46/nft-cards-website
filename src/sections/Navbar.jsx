import React, { useState, useEffect } from "react";
import {
  FaDiscord,
  FaTwitter,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ isOpen, setIsOpen }) => {
  //To close the menu bar when a menu item is clicked
  document.querySelectorAll("nav a").forEach((child) => {
    child.addEventListener("click", () => {
      setIsOpen(false);
    });
  });

  //To hide navbar when scrolling down
  //and ro reveal navbar when scrolling up
  const [show, setShow] = useState(true);
  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function () {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <nav
      className={`${
        show ? "translate-y-0" : "-translate-y-[100px]"
      } fixed top-0 left-0 w-full bg-navbarBg z-[10] px-[20px] vsm:px-[30px] duration-500`}
    >
      <div className="w-full flex items-center xl:gap-[200px] justify-between py-[30px] border-b-[1px] border-black">
        <img src={logo} width="128" height="20" alt="logo" />

        <div
          className={`${
            isOpen ? "h-[100vh]" : "h-0"
          } fixed left-0 top-[86px] bg-navbarBg overflow-hidden bottom-0 w-full xl:w-fit xl:h-fit duration-500 px-[20px] vsm:px-[30px] xl:px-0 xl:static flex-1 flex flex-col xl:flex-row xl:justify-between`}
        >
          <div className="nav-links bg-navbarBg flex flex-col xl:flex-row xl:items-center py-[20px] xl:py-0 gap-[5px] xl:gap-[20px]">
            <ScrollLink
              to="category"
              duration={1000}
              smooth="true"
              offset={-50}
            >
              categories
            </ScrollLink>
            <ScrollLink to="team" duration={1000} smooth="true" offset={-50}>
              Who we are
            </ScrollLink>
            <ScrollLink to="roadmap" duration={1000} smooth="true" offset={-50}>
              Roadmap
            </ScrollLink>
            <ScrollLink to="rarity" duration={1000} smooth="true" offset={-50}>
              Rarity
            </ScrollLink>
            <ScrollLink to="stats" duration={1000} smooth="true" offset={-50}>
              Stats
            </ScrollLink>
            <ScrollLink to="FAQ" duration={1000} smooth="true" offset={-50}>
              FAQ
            </ScrollLink>
            <a
              href="#"
              onClick={() => alert("Coming soon 🫵")}
              duration={1000}
              smooth="true"
              offset={-50}
            >
              Blog
            </a>
            <ScrollLink to="contact" duration={1000} smooth="true" offset={-50}>
              Contact
            </ScrollLink>
          </div>
          <div className="social-links pt-[20px] xl:pt-0 border-t-[1px] border-black xl:border-none flex items-center gap-[20px]">
            <FaDiscord />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>

        <button className="xl:hidden w-fit">
          {isOpen ? (
            <FaTimes
              onClick={() => setIsOpen(false)}
              className="text-[25px] text-[red]"
            />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} className="text-[25px]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
