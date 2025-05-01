"use client";

import Link from "next/link";
import React, {useState, useRef} from "react";
import { grotesk } from "@/font";
import Image from "next/image";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".logo", {
      x: -100,
      duration: 1,
      ease: "power2.out",
      delay: 1,
    });
    gsap.from(".mark", {
      x: -150,
      duration: 1,
      ease: "power2.out",
      delay: 1,
    });
    gsap.from(".button", {
      x: 150,
      duration: 1,
      ease: "power2.out",
      delay: 1,
      opacity: 0,
    });
    gsap.from(".navLinks", {
      y: 50,
      duration: 1,
      ease: "power2.out",
      delay: 1,
      stagger: 0.1,
    })
    gsap.from(".menu", {
      x: 100,
      duration: 1,
      delay: 1,
      ease: 'power2.out',
      opacity: 0
    })

  });

  const [isOpen, setIsOpen] = useState(false);
  const topline = useRef(null);
  const bottomline = useRef(null);
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      gsap.to(topline.current, {
        rotate: 45,
        duration: 0.3,
        ease: "power2.out",
        y: 6
      });
      gsap.to(bottomline.current, {
        rotate: -45,
        duration: 0.3,
        ease: "power2.out",
        y: -6,
      });
      gsap.to(menuRef.current, {
        height: 45+'vh',
        duration: 0.5,
        ease: "power2.inOut",
      })
      gsap.from(".leading-5", {
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 1,
        stagger: 0.1,
      })

    }
    else {
      gsap.to(topline.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power2.out",
        y: 0
      });
      gsap.to(bottomline.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power2.out",
        y: 0,
      });
      gsap.to(menuRef.current, {
        height: 6 + 'vh',
        duration: 0.5,
        ease: "power2.inOut",
      })
      gsap.to(".leading-5", {
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1,
        stagger: 0.1,
      })
    }
      
    }


  return (
    <div ref={menuRef} className={`navbar lg:h-28 sm:h-[6vh] h-40 overflow-hidden fixed z-50 top-0 flex flex-col items-center gap-14 bg-whital w-full px-28`}>
      <div className="flex items-center justify-between w-full  lg:pt-5">

      <div className="flex items-center justify-center ">
        <div className="overflow-hidden">
          <Image
            src={"/logo.svg"}
            alt="logo"
            height={100}
            width={60}
            className="logo"
          />
        </div>
        <div className="overflow-hidden flex items-center justify-center">
          <h1 className={`mark ${grotesk.className} text-4xl font-semibold`}>
            Inspirus
          </h1> 
        </div>
      </div>
      <div onClick={handleClick} className="lg:hidden menu w-10 h-10 relative flex flex-col items-center gap-2 cursor-pointer mt-6">
        <span ref={topline} className={`w-8 h-1 bg-dark  `}></span>
        <span ref={bottomline} className={`w-8 h-1 bg-dark  `}></span>
      </div>
      <div className={`lg:flex hidden items-center justify-center ${grotesk.className} `}>
        <ul className="flex items-center justify-center gap-8 tracking-wide font-medium overflow-hidden">
          <li className=" navLinks relative">
            <Link href={""}>About Us</Link>
          </li>
          <li className=" navLinks relative">
            <Link href={""}>Services</Link>
          </li>
          <li className=" navLinks relative">
            <Link href={""}>Use Cases</Link>
          </li>
          <li className=" navLinks relative">
            <Link href={""}>Pricing</Link>
          </li>
          <li className=" navLinks relative">
            <Link href={""}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="overflow-hidden lg:flex hidden">
        <div className="button">
          <Button
            link=""
            title="Request a quote"
            otherClass="h-18 w-max px-9 bg-whital text-dark border border-dark text-xl rounded-2xl hover:text-whital"
            secondColor="bg-[#191A23]"
          />
        </div>
      </div>
      </div>
      <div className="flex flex-col items-start lg:hidden w-full h-[30vh] rounded-2xl border border-dark ">
        <div className={`flex items-start ${grotesk.className} `}>
        <ul className="flex flex-col items-start justify-center gap-4  text-xl px-10 py-5 font-medium">
          <li className=" navLinks overflow-hidden ">
            <Link href={""} className="leading-5" >About Us</Link>
          </li>
          <li className=" navLinks ">
            <Link href={""} className="leading-5" >Services</Link>
          </li>
          <li className=" navLinks ">
            <Link href={""} className="leading-5" >Use Cases</Link>
          </li>
          <li className=" navLinks ">
            <Link href={""} className="leading-5" >Pricing</Link>
          </li>
          <li className=" navLinks ">
            <Link href={""} className="leading-5" >Blog</Link>
          </li>
        </ul>
        </div>
        <div className="overflow-hidden flex mx-auto">
        <div className="button">
          <Button
            link=""
            title="Request a quote"
            otherClass="h-18 w-max px-9 bg-whital text-dark border border-dark text-xl rounded-2xl hover:text-whital"
            secondColor="bg-[#191A23]"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
