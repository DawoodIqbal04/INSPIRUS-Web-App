import { titles } from "@/data/data";
import { grotesk } from "@/font";
import Link from "next/link";
import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import Marker from "./ui/Marker";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CasesStudies = () => {
  const caseRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement[]>([]);
  const linkRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    gsap.from(caseRef.current, {
      y: 70,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: caseRef.current,
        start: "top 60%",
      },
    });
    gsap.from([textRef.current, linkRef.current], {
      y: 70,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: caseRef.current,
        start: "top 60%",
      },
    });
  });

  return (
    <section className="py-20">
      <div>
        <Marker
          title="Case Studies"
          desc="Explore Real-Life Examples of Our Proven Digital Web Success through Our Case Studies"
        />
      </div>
      <div className="py-20 flex lg:flex-row flex-col items-center md:gap-0.5 gap-1">
        {titles.map((card, index) => (
          <div
            ref={el => {
              caseRef.current[index] = el as HTMLDivElement;
            }}
            key={index}
            className={`${grotesk.className} group w-full lg:h-[48vh] relative p-14 text-whital bg-dark rounded-[40px] overflow-hidden border border-dark`}
          >
            <div className="parent w-fit h-full flex flex-col items-start justify-between lg:gap-0 gap-5 relative z-10 ">
              <div className="text-white group-hover:text-dark line-clamp-5 overflow-hidden">
                <p ref={el => {
                  textRef.current[index] = el as HTMLDivElement;
                }}>{card.title}</p>
              </div>
              <Link
                href={""}
                className="group-hover:text-dark flex items-center gap-3 overflow-hidden text-primary"
              >
                <div ref={el => {
                  linkRef.current[index] = el as HTMLDivElement;
                }}>
                  <h4>Case Info</h4>
                  <FaArrowUp
                    size={25}
                    className=" rotate-54 group-hover:rotate-90 transition duration-400"
                  />
                </div>
              </Link>
            </div>
            <div
              style={{
                transition: "all 0.4s ease-in-out",
              }}
              className="group-hover:bottom-0 group-hover:rounded-none w-full h-full bg-primary absolute bottom-[-100%] left-0 rounded-[50%] "
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasesStudies;
