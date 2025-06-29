import "./Header.css";
import classImg from "../../assets/class.webp";
import {useEffect, useRef} from "react";
function Header() {
  const headerRef = useRef(null);
  const fixedBg = useRef();
  const opacityBg = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const scrollTop = window.pageYOffset;

      if (scrollTop > 90) {
        header.style.setProperty("--scale", "1.1");
        fixedBg.current.style.display = "none";
      } else {
        header.style.setProperty("--scale", "1");
        fixedBg.current.style.display = "block";
      }

      if (scrollTop > 1000) {
        fixedBg.current.style.display = "none";
        opacityBg.current.style.display = "none";
      } else {
        fixedBg.current.style.display = "block";
        opacityBg.current.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const content = {
    title1: "SenseCode-AI",
    title2: "Empowering Visually Impaired Youth Through Inclusive AI Education",
    text: "SenseCode-AI is more than a research project—it’s a movement to make AI education inclusive, engaging, and empowering. Whether you’re a parent, educator, policymaker, or technologist, we invite you to be part of our mission to bring meaningful technology      education to every learner.",
  };

  return (
    <div ref={headerRef} className="header flex items-center justify-between">
      <div className="relative isolate overflow-hidden flex flex-col sm:flex-row mx-auto max-w-7xl px-6 lg:px-20 gap-16">
        <div className="w-full">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              <h1>{content.title1}</h1>
              <h2>{content.title2}</h2>
            </div>
            <p className="mt-2 text-pretty text-lg font-medium text-white sm:text-xl/8 ">
              {content.text}
            </p>
          </div>
        </div>
        <div className="w-full">
          <img
            className="rounded"
            style={{width: "100%", backgroundSize: "cover"}}
            src={classImg}
            alt=""
          />
        </div>
      </div>
      <div ref={fixedBg} className="background"></div>
      <div ref={opacityBg} className="opacitybg"></div>
    </div>
  );
}

export default Header;
