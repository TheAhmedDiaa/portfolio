import "./Header.css";
import { useEffect, useState } from "react";
import GradientText from "../TextAnimations/GradientText/GradientText.jsx";
import bars from "../assets/menu2.svg";

export default function Header() {
  let [isSmall, setIsSmall] = useState(false);
  let [sideParOpen, setSideParOpen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmall(window.innerWidth < 762);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  function openNav() {
    setSideParOpen(true);
  }

  function closeNav() {
    setSideParOpen(false);
  }

  return (
    <>
      <header data-aos="fade-down" className="sticky top-0 z-10">
        <nav
          id="mainPar"
          className="grid grid-cols-[1fr_0.5fr] mx-auto min-h-[3.2rem] shadow-[var(--shadow-lg)] bg-(--background)"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="pl-12 rounded-[inherit]"
          >
            Ahmed's Portfolio
          </GradientText>
          {!isSmall && (
            <div className="href-container flex pr-8 ml-auto items-center shadow-2xl">
              <a className="mx-4 relative text-(--accent) hover:text-(--accent-hover)" href="#about">
                About
              </a>
              <a className="mx-4 relative text-(--accent) hover:text-(--accent-hover)" href="#skills">
                Skills
              </a>
              <a className="mx-4 relative text-(--accent) hover:text-(--accent-hover)" href="#projects">
                Projects
              </a>
              <a className="mx-4 relative text-(--accent) hover:text-(--accent-hover)" href="#contact">
                Contact
              </a>
            </div>
          )}
          {isSmall && (
            <img
              className="max-w-8 mr-8 flex justify-self-end self-center rounded-[inherit] cursor-pointer"
              src={bars}
              onClick={openNav}
              alt="More"
            ></img>
          )}
        </nav>
      </header>
      <div
        id="sidePar"
        className="h-full w-0 fixed z-[200] top-0 right-0 overflow-x-hidden transition-all duration-500 pt-15 bg-(--nav-background) text-(--secondary-text)"
        style={{ width: sideParOpen ? "205px" : "0" }}
      >
        <button
          id="closeB"
          className="fixed top-0 text-2xl ml-8 cursor-pointer"
          onClick={closeNav}
        >
          &times;
        </button>
        <a
          className="block py-2 px-2 pl-8 text-2xl no-underline transition-all duration-30 text-(--accent) hover:text-(--accent-hover)"
          href="#about"
        >
          About
        </a>
        <a
          className="block py-2 px-2 pl-8 text-2xl no-underline transition-all duration-30 text-(--accent) hover:text-(--accent-hover)"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="block py-2 px-2 pl-8 text-2xl no-underline transition-all duration-30 text-(--accent) hover:text-(--accent-hover)"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="block py-2 px-2 pl-8 text-2xl no-underline transition-all duration-30 text-(--accent) hover:text-(--accent-hover)"
          href="#contact"
        >
          Contact
        </a>
      </div>
    </>
  );
}
