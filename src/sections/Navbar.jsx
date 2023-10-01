import React, { useState, useEffect } from "react";
import { FaDiscord, FaTwitter, FaFacebook } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(true);

  //To hide navbar when scrolling down
  //and ro reveal navbar when scrolling up
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
      } fixed top-0 left-0 w-full z-[10] bg-navbarBg px-[30px] duration-500`}
    >
      <div className="flex items-center justify-between py-[30px] border-b-[1px] border-black">
        <img src={logo} width="127.94" height="20.4" alt="logo" />
        <div className="nav-links flex items-center gap-[20px]">
          <ScrollLink to="category" duration={1000} smooth="true" offset={-50}>
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
        <div className="social-links flex items-center gap-[20px]">
          <FaDiscord />
          <FaTwitter />
          <FaFacebook />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
