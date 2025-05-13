import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import backgroundIntro from "@/assets/images/background-intro.jpg";
import Person from "@/assets/images/person.png";

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

  const scale = Math.max(1, 1.2 - scrollY / 1000);
  const scale2 = Math.max(1, 190 - (scrollY * 0.18));
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

      <div className="fixed h-[100vh] top-0 w-full flex justify-center items-center">
        <div className="inset-0 flex justify-center items-center z-30 pointer-events-none">
          <h1
            className="text-[20px] font-extrabold  text-transparent pricedown"
            style={{
              transform: `scale(${scale2})`,
              WebkitTextStroke: "2px black",
              mixBlendMode: "overlay",
            }}
          >
            grand
            <br />
            theft
            <br />
            auto
          </h1>
        </div>
      </div>
    </div>
  );
}
