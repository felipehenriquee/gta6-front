import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import backgroundIntro from "@/assets/images/background-intro.jpg";
import Person from "@/assets/images/person.png";
import Logo from "@/assets/images/logo_transparent.png";
import Logo2 from "@/assets/images/logo.png";
import "./Home.css";

export default function Home() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const fadeStart = 100;
  const fadeEnd = 200;

  const logo2Opacity = Math.max(
    0,
    Math.min(1, (scrollY - fadeStart) / (fadeEnd - fadeStart))
  );
  const scale = Math.max(1, 1.2 - scrollY / 1000);

  const scaleStart = 20;
  const scaleEnd = 0.3;
  const scaleScrollStart = 0;
  const scaleScrollEnd = 300;
  const scaleProgress = Math.max(
    0,
    Math.min(
      1,
      (scrollY - scaleScrollStart) / (scaleScrollEnd - scaleScrollStart)
    )
  );
  const scale2 = scaleStart - (scaleStart - scaleEnd) * scaleProgress;

  const backgroundOpacity = scrollY >= 170 ? 1 : 0;
  console.log(scrollY);
  return (
    <div className="relative h-[500vh]">
      <div className="h-[100vh] w-full overflow-hidden fixed">
        {/* <div className="flex-1 w-full top-[200px] h-full absolute z-20 flex justify-center">
          <p className="text-white text-[100px]">GTA</p>
        </div> */}
        <img
          ref={imgRef}
          src={backgroundIntro}
          alt="Background"
          className="top-0 left-0 w-full h-full object-cover z-10 transition-transform duration-75 ease-out"
          style={{ transform: `scale(${scale})` }}
        />
        <img
          ref={imgRef}
          src={Person}
          alt="Background"
          className="w-full z-30 h-full absolute object-cover transition-transform duration-75 ease-out"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
      <div
        className="fixed h-[100vh] top-0 w-full flex justify-center items-center z-30 pointer-events-none"
        style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}
      >
        <div
          className="inset-0 flex flex-col h-full w-full justify-center relative"
          style={{
            transform: `scale(${scale2})`,
            transition: "transform 0.1s",
          }}
        >
          {/* Logo 1 sempre visível */}
          <img
            className="ml-[28px] mt-[-20px] absolute"
            src={Logo}
            alt="Logo base"
          />

          {/* Logo 2 com fade-in */}
          <img
            className="ml-[28px] mt-[-20px] absolute"
            src={Logo2}
            alt="Logo que aparece"
            style={{
              opacity: logo2Opacity,
            }}
          />
        </div>
      </div>
    </div>
  );
}
