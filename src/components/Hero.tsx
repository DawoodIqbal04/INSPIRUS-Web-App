'use client';

import { grotesk, sans } from "@/font";
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

  useGSAP(() => {

    gsap.from(".header, .subheader", {
      y: 100,
      duration: 1,
      ease: "power2.out",
      delay: 1.6,
      stagger: 0.1,
    });
    gsap.from(".herobutton", {
      y: 100,
      duration: 2,
      ease: "power2.out",
      delay: 1.6,
      opacity: 0,
    })
    gsap.from('.heroimage', {
      y: 200,
      scale: 0.95,
      ease: 'power2.out',
      duration: 1.5,
      delay: 1.6,
      opacity: 0
    })
  })

  return (
    <section className="hero w-full lg:h-[calc(100vh_-_112px)] min-h-[50vh] flex lg:item-center items-center gap-3 mt-28 lg:py-10">
      <div className="lg:w-[42vw] w-[70vw] flex flex-col gap-4 mt-10">
        <div className="flex flex-col justify-start gap-3">
          <div className={`${grotesk.className} lg:text-6xl text-5xl font-[500]`}>
            <div className="overflow-hidden lg:leading-16 leading-14 ">
              <h1 className="header">Turning Digital</h1>
            </div>
            <div className="overflow-hidden lg:leading-16 leading-14 ">
              <h1 className="header">Dreams In To The</h1>
            </div>
            <div className="overflow-hidden lg:leading-16 leading-14 ">
              <h1 className="header">Thriving Visions</h1>
            </div>
          </div>
          <div className={`${sans.className} text-lg flex flex-col items-start lg:gap-2`}>
            <div className="overflow-hidden lg:leading-5">
              <p className="subheader">Our digital software agency helps businesses grow and</p>
            </div>
            <div className="overflow-hidden lg:leading-5">
              <p className="subheader">succeed online through a range of services including Web</p>
            </div>
            <div className="overflow-hidden lg:leading-5">
              <p className="subheader">Development, E-commerce Website and UI/ UX Design.</p>
            </div>
          </div>
        </div>
        <div className="herobutton">
            <Button link="" title="Book a consultation" secondColor="bg-[#B9FF66]" otherClass="w-max h-18 px-8 bg-dark text-white border border-dark text-xl rounded-2xl hover:text-dark" />
        </div>
      </div>
      <div className="heroimage">
        <Image src={'/hero.svg'} alt="Hero Image" height={500} width={700} />
      </div>
    </section>
  );
};

export default Hero;
