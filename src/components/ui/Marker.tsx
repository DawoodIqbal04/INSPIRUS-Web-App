import { grotesk, sans } from "@/font";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marker = ({ title, desc }: { title: string; desc: string }) => {
  const markerRef = useRef(null);

  useGSAP(() => {
    gsap.to(markerRef.current, {
      x: 300,
      duration: 1,
      ease: "power2.inOut",
      display: "none",
      scrollTrigger: {
        trigger: markerRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <div className="flex md:flex-row flex-col items-center justify-start md:gap-10 gap-8">
      <h1
        className={`text-4xl ${grotesk.className} relative overflow-hidden md:text-left text-center whitespace-nowrap flex items-center justify-center`}
      >
        <mark className="bg-primary lg:px-2 md:px-4 px-2 rounded-lg ">{title}</mark>
        <div
          ref={markerRef}
          className="absolute w-full h-full bg-whital top-0"
        ></div>
      </h1>
      <p className={`${sans.className} tracking-wide lg:w-[45%] md:w-[80%] w-full md:text-left text-center`}>
        {desc}
      </p>
    </div>
  );
};

export default Marker;
