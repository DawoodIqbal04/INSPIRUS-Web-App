import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import gsap from "gsap";
import { grotesk } from "@/font";

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
  return (
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
        className=" flex flex-col py-12 items-center justify-between  w-full h-full"
      >
        <div className="flex items-center justify-between w-full">
          <div className={`flex items-center md:gap-5 gap-3`}>
            <h1 className={`md:text-7xl text-4xl`}>0{index}</h1>
            <p>{title}</p>
          </div>
          <div
            onClick={handleClick}
            className="w-14 h-14 flex items-center bg-[#E8E8E8] justify-center rounded-full border border-black  "
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
        <div className="absolute top-43 md:mx-16 mx-8 border-t-2 pt-7 border-dark">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ExtendBox;
