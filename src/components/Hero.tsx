import { grotesk, sans } from "@/font";
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh_-_112px)] flex in-center gap-3 mt-28 py-10">
      <div className="w-[42vw] flex flex-col gap-4 mt-10">
        <div className="flex flex-col justify-start gap-3">
          <h1 className={`${grotesk.className} text-6xl font-[500]`}>Turning Digital Dreams In To The Thriving Visions </h1>
          <p className={`${sans.className} text-lg `}>Our digital software agency helps businesses grow and succeed online through a range of services including Web Development, E-commerce Website and UI/ UX Design.</p>
        </div>
        <div>
            <Button link="" title="Book a consultation" secondColor="bg-[#B9FF66]" otherClass="w-max h-18 px-8 bg-dark text-white border border-dark text-xl rounded-2xl hover:text-dark" />
        </div>
      </div>
      <div>
        <Image src={'/hero.svg'} alt="Hero Image" height={500} width={700} />
      </div>
    </section>
  );
};

export default Hero;
