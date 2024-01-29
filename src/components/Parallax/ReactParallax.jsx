import Description from "../Description";
import React, { useState, useEffect } from "react";
import "../Parallax/Parallax.css";
import HeroImg from "../../images/witcher.png";
import { Link } from "react-router-dom";

// import DownloadIcon from '@mui/icons-material/Download';

const downloadLink = "/";
const playNowLink = "/";

const ReactParallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateOpacity = () => {
    // Adjust the values as needed for your specific scroll position
    const threshold = 150; // Scroll position when second text becomes fully visible
    const maxOpacity = 1;

    return Math.max(0, maxOpacity - scrollPosition / threshold);
  };

  return (
    <div
      className="parallax-container"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="parallax-bg"
        style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
      ></div>
      <div
        className="parallax-content flex flex-col items-center justify-center"
        style={{ position: "relative" }}
      >
        <aside
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: calculateOpacity(),
          }}
        >
          <h1 className="text-yellow-500 text-2xl font-Cinzel_Decorative mb-8 font-bold stroke-white stroke-2 md:text-4xl lg:text-6xl md:mt-10">
            Welcome to Old School RuneScape!
          </h1>
          <Link to={downloadLink}>
            <button className="bg-DownloadBtnBg w-[210px] h-[86px] bg-no-repeat text-white font-Cinzel_Decorative font-bold hover:text-yellow-500 cursor-pointer">
              Download <br />
              Now
            </button>
          </Link>{" "}
          <Link to={playNowLink}>
            <button className="bg-DownloadBtnBg w-[210px] h-[86px] bg-no-repeat text-white font-Cinzel_Decorative font-bold cursor-pointer">
              Play
              <br /> Now
            </button>
          </Link>
        </aside>
        <div className="relative" style={{ opacity: 1 - calculateOpacity() }}>
          <Description />
          <img
            className="absolute bottom-[-520px] md:left-[35%]"
            src={HeroImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ReactParallax;
