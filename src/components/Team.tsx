import React from "react";
import Marker from "./ui/Marker";
import { teamMembers } from "@/data/data";
import Image from "next/image";
import { grotesk, sans } from "@/font";
import { TfiLinkedin } from "react-icons/tfi";
import Link from "next/link";

const Team = () => {
  return (
    <section className="py-20">
      <div>
        <Marker
          title="Our Team"
          desc="Meet Our Skilled And Exceptoinal Team Who Crafts Your Next Big Idea Into Digital Reality."
        />
      </div>
      <div className="w-full mt-20">
        <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-10">
          {teamMembers.map(({ name, image, position, desc}, index) => (
            <div
              key={index}
              className="lg:w-[30vw] lg:h-[65vh] rounded-[45px] bg-[#e8e8e8] p-14 flex flex-col items-center gap-5 border border-dark shadow-[0_5px_rgba(0,0,0,0.8)] "
            >
              <div className="h-[50%] flex items-start justify-between ">
                <div className="flex items-end gap-5 w-full">
                  <Image
                    src={image}
                    alt={name}
                    height={100}
                    width={100}
                  />
                  <div className="flex flex-col items-start">
                    <h4 className={`${grotesk.className} text-lg font-medium `}>
                      {name}
                    </h4>
                    <p className={`${sans.className} text-sm`}>
                      {position}
                    </p>
                  </div>
                </div>
                <div className="">
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
              <div className=" h-[50%] w-full border-t border-dark ">
                <p className={`${grotesk.className} mt-7`}>{desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
