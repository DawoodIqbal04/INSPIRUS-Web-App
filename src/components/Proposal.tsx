import React, { useRef } from "react";
import Button from "./ui/Button";
import { grotesk, sans } from "@/font";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Proposal = () => {
  const proposalRef = useRef(null);
  const buttonRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(proposalRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: proposalRef.current,
        start: "top 45%",
        markers: true,
      },
    });
    gsap.from(buttonRef.current, {
      y: 70,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: proposalRef.current,
        start: "top 45%",
      },
    });
    gsap.from(titleRef.current, {
      y: 70,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: proposalRef.current,
        start: "top 45%",
      },
    });
    gsap.from(descRef.current, {
      y: 70,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: proposalRef.current,
        start: "top 45%",
      },
    });
    gsap.from(imageRef.current, {
      x: 70,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: proposalRef.current,
        start: "top 45%",
      },
    });
  });

  return (
    <section className="relative py-20">
      <div
        ref={proposalRef}
        className=" w-full lg:h-84 md:h-[38vh] h-[55vh] flex items-center justify-between bg-[#E8E8E8] rounded-[38px] p-16"
      >
        <div className="flex flex-col items-start md:text-left gap-5 lg:w-[50%] md:w-[40%] ">
          <div className="overflow-hidden">
            <h1
              ref={titleRef}
              className={`${grotesk.className} text-3xl font-semibold`}
            >
              Let&apos;s make things happen
            </h1>
          </div>
          <div className="overflow-hidden">
            <p
              ref={descRef}
              className={`${sans.className} tracking-wide lg:w-[36vw] `}
            >
              Contact us today to learn more about how our creative software
              services can help your business grow and succeed online
            </p>
          </div>
          <div className="overflow-hidden">
            <div ref={buttonRef}>
              <Button
                link=""
                otherClass="h-16 w-max lg:px-28 px-10 bg-dark text-white border border-dark lg:text-lg rounded-lg hover:text-dark"
                title="Get Your Free Posposal"
                secondColor="bg-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <Image
          ref={imageRef}
          src={"/prop.svg"}
          alt="image"
          height={200}
          width={800}
          className="absolute md:flex hidden lg:-top-35 lg:-right-10 -top-30 -right-45 z-10"
        />
      </div>
    </section>
  );
};

export default Proposal;
