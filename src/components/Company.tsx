"use client";

import { logos, logosMob } from "@/data/data";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Company = () => {
  useGSAP(() => {
    gsap.to(".overlay", {
      duration: 2,
      scaleX: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".overlay",
        start: "top 75%",
      },

    });
    gsap.to(".overlays", {
      duration: 2,
      scaleX: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".overlays",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="lg:py-40 md:py-26 py-32 relative">
      <div className="h-[5vw] md:flex hidden gap-16  items-center justify-center md:overflow-hidden relative backdrop-grayscale">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className={`w-max h-max relative md:overflow-hidden ${
              logo.id == 1 && "mr-10"
            } ${logo.id == 2 && "-mr-9 -ml-18"} ${logo.id == 3 && "-mr-5"} ${
              logo.id == 4 && "-mr-6"
            }`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              height={100}
              width={120}
              className={`${
                logo.id == 1 && "h-14 w-14"
              } grayscale hover:grayscale-0 `}
            />
            <div
              style={{ transformOrigin: "right" }}
              className="overlay absolute bg-whital h-full w-full md:flex hidden top-0 left-0"
            ></div>
          </div>
        ))}
      </div>
      <div className="w-full h-[25vh] md:hidden grid grid-cols-3 gap-x-10 gap-y-8 items-center relative">

        {logosMob.map((logo, idx) => (
          <div
            key={idx}
            className={` relative  ${logo.id == 1 && 'w-12 h-12'} ${logo.id == 2 && 'w-12 h-12'} ${logo.id == 4 && 'w-14 h-14'} ${logo.id == 7 && 'inset-x-32 -inset-y-7 '} `}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              height={100}
              width={120}
              className={` grayscale hover:grayscale-0 `}
            />
            <div
              style={{ transformOrigin: "right" }}
              className="overlays absolute bg-accent h-full w-full top-0 left-0"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
