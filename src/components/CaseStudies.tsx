import { titles } from "@/data/data";
import { grotesk, sans } from "@/font";
import { color } from "motion/react";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const CasesStudies = () => {
  return (
    <section className="py-20">
      <div className="flex items-center justify-start gap-10">
        <h1 className={`text-4xl ${grotesk.className}`}>
          <mark className="bg-primary px-2 rounded-lg">Case Studies</mark>
        </h1>
        <p className={`${sans.className} tracking-wide`}>
          Explore Real-Life Examples of Our Proven Digital Web Success
          <br /> through Our Case Studies
        </p>
      </div>
      <div className="py-20 flex items-center gap-0.5">
        {titles.map((card, index) => (
          <div
            key={index}
            className={`${grotesk.className} group w-full h-[48vh] relative p-14 text-whital bg-dark rounded-[40px] overflow-hidden `}
          >
            <div className="parent w-fit h-full flex flex-col items-start justify-between relative z-10 ">
              <div className="text-white group-hover:text-dark line-clamp-5">
                <p>{card.title}</p>
              </div>
              <Link href={""} className="group-hover:text-dark flex items-center gap-3 text-primary">
                <h4>Case Info</h4>
                <FaArrowUp size={25} className=" rotate-54" />
              </Link>
            </div>
            <div
              style={{
                transition: "all 0.4s ease-in-out",
              }}
              className="group-hover:bottom-0 group-hover:rounded-none w-full h-full bg-primary absolute bottom-[-100%] left-0 rounded-[50%] "
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasesStudies;
