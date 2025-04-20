"use client";

import Link from "next/link";
import React from "react";
import { grotesk } from "@/font";
import Image from "next/image";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".navbar", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(".logo", {
      x: -100,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });
    gsap.from(".logotext", {
      x: -100,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });
  });

  return (
    <div className="navbar fixed z-50 top-0 flex items-center justify-between bg-whital w-full h-28 px-28">
      <div className="flex items-center justify-center ">
        <div className="overflow-hidden bg-accent">
          <Image
            src={"/logo.svg"}
            alt="logo"
            height={100}
            width={60}
            className="logo"
          />
        </div>
        <div className="overflow-hidden flex items-center justify-center">
          <h1
            className={`${grotesk.className}logotext text-4xl font-semibold`}
          >
            Inspirus
          </h1>
        </div>
      </div>
      <div className={`flex items-center justify-center ${grotesk.className} `}>
        <ul className="flex items-center justify-center gap-8 tracking-wide font-medium">
          <li>
            <Link href={""}>About Us</Link>
          </li>
          <li>
            <Link href={""}>Services</Link>
          </li>
          <li>
            <Link href={""}>Use Cases</Link>
          </li>
          <li>
            <Link href={""}>Pricing</Link>
          </li>
          <li>
            <Link href={""}>Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <Button
          link=""
          title="Request a quote"
          otherClass="h-18 w-max px-9 bg-whital text-dark border border-dark text-xl rounded-2xl hover:text-whital"
          secondColor="bg-[#191A23]"
        />
      </div>
    </div>
  );
};

export default Navbar;
