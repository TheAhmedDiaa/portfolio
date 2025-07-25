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
      <header data-aos="fade-down">
        <nav id="mainPar">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="h3"
          >
            Ahmed's Portfolio
          </GradientText>
          {!isSmall && (
            <div className="as">
              <a className="a" href="#skills">Skills</a>
              <a className="a" href="#about">About</a>
              <a className="a" href="#projects">Projects</a>
            </div>
          )}
          {isSmall && <img className="img" src={bars} onClick={openNav} alt="More"></img>}
        </nav>
      </header>
      <div id="sidePar" style={{ width: sideParOpen ? "205px" : "0" }}>
        <button id="closeB" onClick={closeNav}>
          &times;
        </button>
        <a className="a" href="#about">About</a>
        <a className="a" href="#skills">Skills</a>
        <a className="a" href="#projects">Projects</a>
        <a className="a" href="#contact">Contact</a>
      </div>
    </>
  );
}
