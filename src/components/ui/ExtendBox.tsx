import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import gsap from "gsap";
import { grotesk } from "@/font";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExtendBox = ({
  index,
  title,
  desc,
}: {
  index: string;
  title: string;
  desc: string;
}) => {
  let height: string | number;
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      height = 52 + "vh";
    } else if (window.innerWidth >= 768) {
      height = 28 + "vh";
    } else {
      height = 55 + "vh";
    }
  });

  const boxRef = useRef(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = () => {
    if (!animationRef.current) {
      animationRef.current = gsap.to(boxRef.current, {
        height,
        duration: 0.4,
        paused: true,
        ease: "power4.InOut",
      });
    }

    if (isMoved) {
      animationRef.current.reverse();
    } else {
      animationRef.current.play();
    }
    setIsMoved(!isMoved);
  };

  // -------------------------------------------

  const mainRef = useRef(null);
  const indexRef = useRef(null);
  const titleRef = useRef(null);
  const iconRef = useRef(null);

  useGSAP(() => {
    gsap.from(mainRef.current, {
      y: 70,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 60%",
      },
    });
    gsap.from([indexRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 60%",
      },
    })
    gsap.from([titleRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 60%",
      },
    })
    gsap.from([iconRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 60%",
      },
    })
  });

  return (
    <div ref={mainRef} className="w-full">
      <div
        onClick={() => setIsMoved(!isMoved)}
        ref={boxRef}
        className={` relative w-full bg-[#E8E8E8] lg:h-[28vh]  ${
          grotesk.className
        } ${
          isMoved ? "bg-primary" : "bg-[#E8E8E8]"
        } border border-dark md:px-16 px-8 transition-transform duration-500 origin-bottom flex flex-col items-center justify-center overflow-hidden shadow-[0_6px_rgba(0,0,0,0.8)] md:rounded-[45px] rounded-4xl`}
      >
        <div
          onClick={handleClick}
          className=" flex flex-col py-12 items-center justify-between w-full h-full"
        >
          <div className="flex items-center justify-between w-full">
            <div className={`flex items-center md:gap-5 gap-3`}>
              <div className="overflow-hidden">
                <h1 ref={indexRef} className={`md:text-7xl text-4xl`}>0{index}</h1>
              </div>
              <div className="overflow-hidden">
                <p ref={titleRef}>{title}</p>
              </div>
            </div>
            <div
              ref={iconRef}
              onClick={handleClick}
              className="w-14 h-14 flex items-center bg-[#E8E8E8] rounded-full border border-black justify-center"
            >
              <span
                className={`${
                  isMoved ? "rotate-180" : "rotate-0"
                } transition-transform font-bold duration-400`}
              >
                {isMoved ? (
                  <AiOutlineMinus size={50} />
                ) : (
                  <AiOutlinePlus size={50} />
                )}
              </span>
            </div>
          </div>
          <div className="absolute top-43 md:mx-16 mx-8 border-t-2 pt-7 mt-2 border-dark">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendBox;
