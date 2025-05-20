"use client";

import { grotesk } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { TfiFacebook, TfiLinkedin, TfiGithub } from "react-icons/tfi";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const iconRef = useRef(null);
  const logoRef = useRef(null);
  const markRef = useRef(null);
  const inputRef = useRef(null);

  useGSAP(() => {
    gsap.from(footerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 50%",
      },
    });

    gsap.from(logoRef.current, {
      x: -100,
      duration: 1,
      ease: "power2.out",
      delay: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 50%",
      },
    });

    gsap.from(markRef.current, {
      x: -200,
      duration: 1,
      ease: "power2.out",
      delay: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 50%",
      },
    });

    gsap.from(".footLinks", {
      y: 50,
      duration: 1,
      ease: "power2.out",
      delay: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 50%",
      },
    });

    gsap.from(iconRef.current, {
      y: 50,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
      delay: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 50%",
      },
    });

    gsap.from(inputRef.current, {
      y: 50,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
      delay: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 50%",
      },
    });

    gsap.from(".text", {
      y: 50,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
      delay: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 50%",
      },
    });
  });

  return (
    <section ref={footerRef} className="pt-20 bg-whital md:px-6">
      <div className="w-full md:h-[80vh] h-[150vh] bg-dark md:rounded-t-[45px] rounded-t-4xl lg:p-14 md:p-8 p-4 pt-12">
        <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-5 items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="overflow-hidden">
              <Image
                ref={logoRef}
                src={"/footerLogo.svg"}
                alt="logo"
                height={100}
                width={60}
              />
            </div>
            <div className="overflow-hidden flex items-center justify-center">
              <h1
                ref={markRef}
                className={`${grotesk.className} text-5xl text-white font-semibold`}
              >
                Inspirus
              </h1>
            </div>
          </div>
          <div
            className={`flex items-center justify-center text-white ${grotesk.className} `}
          >
            <ul className="flex md:flex-row flex-col items-center justify-center md:gap-6 gap-4 tracking-wide overflow-hidden">
              <li className=" relative footLinks">
                <Link href={""}>About Us</Link>
              </li>
              <li className=" relative footLinks">
                <Link href={""}>Services</Link>
              </li>
              <li className=" relative footLinks">
                <Link href={""}>Use Cases</Link>
              </li>
              <li className=" relative footLinks">
                <Link href={""}>Pricing</Link>
              </li>
              <li className=" relative footLinks">
                <Link href={""}>Blog</Link>
              </li>
            </ul>
          </div>
          <div ref={iconRef} className="flex items-center gap-5">
            <Link
              href={
                "https://www.linkedin.com/in/muhammad-dawood-iqbal-bb469b29a/"
              }
              className="w-8 h-8 bg-white hover:bg-[#0A66C2] rounded-full flex items-center justify-center transition-all text-dark hover:text-white"
            >
              <TfiLinkedin size={17} />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/muhammad-dawood-iqbal-bb469b29a/"
              }
              className="w-8 h-8 bg-white hover:bg-gray-700 rounded-full flex items-center justify-center transition-all text-dark hover:text-white"
            >
              <TfiGithub size={17} />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/muhammad-dawood-iqbal-bb469b29a/"
              }
              className="w-8 h-8 bg-white hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all text-dark hover:text-white"
            >
              <TfiFacebook size={17} />
            </Link>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col items-center justify-between lg:mt-10 mt-16 ">
          <div
            className={`${grotesk.className} lg:w-[25%] text-white md:text-left text-center flex flex-col lg:items-start items-center gap-5`}
          >
            <div className=" overflow-hidden">
              <h1 className="text-primary text-2xl text">Contact Us</h1>
            </div>
            <div className=" overflow-hidden">
              <p className="text">Email: examplemail.com</p>
            </div>
            <div className=" overflow-hidden">
              <p className="text">Phone: +123 456 789</p>
            </div>
            <div className=" overflow-hidden">
              <p className="text">Address: 1234 Street Name, City Name, Country Name</p>
            </div>
          </div>
          <div
            ref={inputRef}
            className="lg:w-[65%] w-full lg:mt-0 mt-20 md:h-48 h-56 px-10 flex md:flex-row flex-col md:justify-between justify-evenly items-center rounded-2xl bg-[#292A32] "
          >
            <input
              type="text"
              placeholder="Email"
              className="md:w-[50%] w-full py-5 px-10 text-white focus:outline-none rounded-2xl border border-whital"
            />
            <Button
              link=""
              otherClass=" md:w-[45%] w-full h-16 rounded-lg bg-primary text-dark "
              title="Subscribe To News"
              secondColor="bg-white"
            />
          </div>
        </div>
        <div
          className={`${grotesk.className} w-full border-t text-white border-white md:text-left text-center lg:mt-10 mt-20 pt-5 flex items-center justify-center`}
        >
          <div className="overflow-hidden">
            <h1 className="text group">
              2025 INSPIRUS - Made With 💚 By <br className="block md:hidden" />{" "}
              <Link
                target="_blank"
                href={"https://dawood-iqbal.vercel.app"}
                className="underline group-hover:text-primary"
              >
                Muhammad Dawood Iqbal
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
