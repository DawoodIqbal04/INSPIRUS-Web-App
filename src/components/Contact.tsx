import React, { useRef } from "react";
import Marker from "./ui/Marker";
import { grotesk } from "@/font";
import Button from "./ui/Button";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.from(contactRef.current, {
      y: 150,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 60%",
      },
    });

    gsap.from('.label', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 60%",
      },
    })

    gsap.from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 60%",
      },
    })

    gsap.from(buttonRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 60%",
      },
    });

    gsap.from('.input', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 60%",
      },
    })
  });

  return (
    <section className="py-20">
      <div>
        <Marker
          title="Contact Us"
          desc="Get in Touch with Us and Let's Start Building Your Digital Future Together!"
        />
      </div>
      <div
        ref={contactRef}
        className="w-full lg:min-h-[80vh] bg-[#e8e8e8] rounded-[45px] mt-20 md:p-20 p-10 relative "
      >
        <form
          className={`${grotesk.className} flex flex-col gap-5 h-full lg:w-[50%] w-full`}
        >
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="name" className=" leading-4 overflow-hidden" aria-required>
              <p className="label">Name*</p>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input px-8 py-5 lg:w-[90%] w-full bg-white focus:outline-none border border-dark rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email" className=" leading-4 overflow-hidden" aria-required>
              <p className="label">Email*</p>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input px-8 py-5 lg:w-[90%] w-full bg-white focus:outline-none border border-dark rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="mass" className=" leading-4 overflow-hidden" aria-required>
              <p className="label">Massege*</p>
            </label>
            <textarea
              placeholder="Massege"
              name="mass"
              className="input px-8 py-5 lg:w-[90%] w-full bg-white focus:outline-none border border-dark rounded-2xl"
            />
          </div>
          <div ref={buttonRef}>
            <Button
              link=""
              title="Send"
              secondColor="bg-primary"
              otherClass="lg:w-[90%] w-full h-16 bg-dark text-white hover:text-dark hover:border border-black rounded-lg"
            />
          </div>
        </form>
        <div className="lg:flex hidden">
          <Image
            ref={imageRef}
            src={"/contactImage.svg"}
            alt="Contact Image"
            width={390}
            height={500}
            className="absolute right-0 top-0  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
