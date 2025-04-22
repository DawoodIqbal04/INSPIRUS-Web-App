"use client";

import { logos } from "@/data/data";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Company = () => {


  useGSAP(() => {
    gsap.to('.overlay', {
      duration: 2,
      scaleX: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.overlay',
        start: 'top 75%',
      }
    })
}, []);

  return (
    <div className="py-40 relative">
      <div className="h-[5vw] flex gap-16 items-center justify-center overflow-hidden relative backdrop-grayscale">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className={`w-max h-max relative overflow-hidden ${logo.id == 1 && "mr-10"} ${
              logo.id == 2 && "-mr-9 -ml-18"
            } ${logo.id == 3 && "-mr-5"} ${logo.id == 4 && "-mr-6"}`}
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
            <div style={{transformOrigin: 'right'}} className="overlay absolute bg-whital h-full w-full top-0 left-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
