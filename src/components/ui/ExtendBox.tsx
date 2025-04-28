import React, { useState, useRef } from "react";
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
  const boxRef = useRef(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = () => {
    if (!animationRef.current) {
      animationRef.current = gsap.to(boxRef.current, {
        height: "52vh",
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
      className={` relative w-full bg-[#E8E8E8] h-[28vh]  ${
        grotesk.className
      } ${
        isMoved ? "bg-primary" : "bg-[#E8E8E8]"
      } border border-dark px-16 transition-transform duration-500 origin-bottom flex flex-col items-center justify-center overflow-hidden shadow-[0_6px_rgba(0,0,0,0.8)] rounded-[45px]`}
    >
      <div
        onClick={handleClick}
        className=" flex flex-col py-12 items-center justify-between  w-full h-full"
      >
        <div className="flex items-center justify-between w-full">
          <div className={`flex items-center gap-5`}>
            <h1 className={`text-7xl`}>0{index}</h1>
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
        <div className="absolute top-43 mx-16 border-t-2 pt-7 border-dark">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ExtendBox;
