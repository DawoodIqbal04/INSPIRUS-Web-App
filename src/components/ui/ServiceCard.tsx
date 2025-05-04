import { grotesk } from "@/font";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mark } from "motion/react-client";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({
  bgColor,
  title1,
  title2,
  image,
  buttonColor,
  markBg,
  arrowColor,
  buttonText,
  hoverBgColor,
}: {
  bgColor: string;
  title1: string;
  title2: string;
  image: string;
  buttonColor: string;
  markBg: string;
  arrowColor: string;
  buttonText: string;
  hoverBgColor: string;
}) => {
  const serviceRef = useRef(null);
  const markRef = useRef(null);
  const linkRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(serviceRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 60%",
        markers: true,
      },
    });
    gsap.to(markRef.current, {
      width: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
      display: "none",
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 60%",
      }
    })
    gsap.from(linkRef.current, {
      y: 50,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 60%",
      }
    })
    gsap.from(imageRef.current, {
      x: 50,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 60%",
      }
    })
  });

  return (
    <div
      ref={serviceRef}
      className={`group relative lg:w-[46.5vw] w-full lg:h-68 md:h-[35vh] ${bgColor} z-11 rounded-[45px] border border-dark lg:p-14 p-10 flex justify-between items-center drop-shadow-[0_6px_rgba(0,0,0,0.6)] overflow-hidden hover:[&>.child]:bottom-0 hover:[&>.child]:rounded-none`}
    >
      <div className="w-full h-full z-10 flex items-center justify-between">
        <div className="flex flex-col items-start lg:gap-16 gap-40 w-[50%] ">
          <div className={`${grotesk.className} title`}>
            <h1 className="title relative flex flex-col text-lg">
              <div className="flex flex-col">
                <mark className={`marker px-2 rounded-md w-max bg-${markBg}`}>
                  {title1}
                </mark>
                <mark className={`marker px-2 rounded-md w-max bg-${markBg}`}>
                  {title2}
                </mark>
              </div>
              <div ref={markRef} className={`absolute origin-right top-0 w-full h-full ${bgColor}`}></div>
            </h1>
          </div>
          <div ref={linkRef} >
            <Link href={""} className="link flex items-center gap-3">
              <div
                className={`md:h-10 md:w-10 h-12 w-12 bg-${buttonColor} rounded-full flex items-center justify-center`}
              >
                <FaArrowUp
                  size={26}
                  className="rotate-45 group-hover:rotate-90 transition-transform duration-400"
                  color={arrowColor}
                />
              </div>
              <p
                className={`${grotesk.className} text-${buttonText} text-lg md:flex hidden`}
              >
                Service Info
              </p>
            </Link>
          </div>
        </div>
        <div ref={imageRef} className="lg:h-44 lg:w-48 md:mt-0 mt-20 object-center object-cover">
          <Image
            src={image}
            alt=""
            height={0}
            width={0}
            className={`w-full h-full `}
          />
        </div>
      </div>
      <div
        style={{
          transition: "all 0.4s ease-in-out",
        }}
        className={`child absolute w-full h-full ${hoverBgColor} bottom-[-100%] rounded-[50%] left-0`}
      ></div>
    </div>
  );
};

export default ServiceCard;
