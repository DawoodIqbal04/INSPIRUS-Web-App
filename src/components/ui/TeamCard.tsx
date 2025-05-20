import { grotesk, sans } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { TfiLinkedin } from "react-icons/tfi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TeamCard = ({
  image,
  name,
  position,
  desc,
}: {
  image: string;
  name: string;
  position: string;
  desc: string;
}) => {

  const teamRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const positionRef = useRef(null);
  const iconRef = useRef(null);
  const descRef = useRef(null);


  useGSAP(() => {
    gsap.from(teamRef.current, {
      y: 70,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top 60%",
      },
    });
    
    gsap.from(imageRef.current, {
      y: 70,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top 60%",
      },
    })
      
    gsap.from(nameRef.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 60%",
        },
      })
      
      gsap.from(positionRef.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 60%",
        },
      })

      gsap.from(iconRef.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 60%",
        },
      })
      
      gsap.from(descRef.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 60%",
        },
      })
  });

  return (
    <div ref={teamRef} className="lg:w-[30vw] lg:h-[65vh] rounded-[45px] bg-[#e8e8e8] p-14 flex flex-col items-center gap-5 border border-dark shadow-[0_5px_rgba(0,0,0,0.8)] ">
      <div className="h-[50%] w-full flex gap-28 md:items-start md:justify-between ">
        <div className="flex md:flex-row flex-col items-end md:gap-5 gap-1 w-full">
          <Image ref={imageRef} src={image} alt={""} height={100} width={100} />
          <div className="flex flex-col items-start w-full">
            <div className="overflow-hidden w-max">
              <h4 ref={nameRef} className={`${grotesk.className} text-lg leading-5 font-medium `}>
                {name}
              </h4>
            </div>
            <div className="overflow-hidden w-max">
              <p ref={positionRef} className={`${sans.className} text-sm`}>{position}</p>
            </div>
          </div>
        </div>
        <div ref={iconRef}>
          <Link
            href={
              "https://www.linkedin.com/in/muhammad-dawood-iqbal-bb469b29a/"
            }
            className="w-8 h-8 bg-dark hover:bg-blue-600 rounded-full flex items-center justify-center transition-all text-primary hover:text-white"
          >
            <TfiLinkedin size={17} />
          </Link>
        </div>
      </div>
      <div className=" min-h-[50%] w-full overflow-hidden border-t border-dark ">
        <p ref={descRef} className={`${grotesk.className} mt-7`}>{desc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
